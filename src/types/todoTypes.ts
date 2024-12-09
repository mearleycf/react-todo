import { ExtractPropertyType, Prettify, StringKeysOf, UnionProperties } from './utilityTypes'

// Metadata for duplicated todos
export type DuplicateMetadata = {
  originalId: string
  duplicatedAt: Date
  duplicatedBy: string
}

// Base todo type
export type BaseTodo = {
  todoText: string
  list: string[]
}

// Todo states
export type TodoNotStarted = BaseTodo & {
  status: 'not started'
  createdAt: Date
  duplicateInfo?: DuplicateMetadata
  resetAt?: Date
}

export type TodoInProgress = BaseTodo & {
  status: 'in progress'
  modifiedAt: Date
  restoredAt?: Date
}

export type TodoCompleted = BaseTodo & {
  status: 'completed'
  completedAt: Date
}

export type TodoDeleted = BaseTodo & {
  status: 'deleted'
  deletedAt: Date
}

export type TodoArchived = BaseTodo & {
  status: 'archived'
  archivedAt: Date
}

export type TodoState = TodoNotStarted | TodoInProgress | TodoCompleted | TodoDeleted | TodoArchived

// Extract the status type from TodoState
export type TodoStatus = ExtractPropertyType<TodoState, 'status'>

export type TodoStatePrettified = Prettify<TodoState>

// Event types
export type BaseTodoEvent = {
  timestamp: Date
}

export type StartEvent = BaseTodoEvent & {
  type: 'START'
  assignedTo: string
}

export type CompleteEvent = BaseTodoEvent & {
  type: 'COMPLETE'
  completedBy: string
}

export type DeleteEvent = BaseTodoEvent & {
  type: 'DELETE'
  reason?: string
}

export type ArchiveEvent = BaseTodoEvent & {
  type: 'ARCHIVE'
  archiveReason: string
}

export type RestoreEvent = BaseTodoEvent & {
  type: 'RESTORE'
  restoredBy: string
  reason?: string
}

export type ResetEvent = BaseTodoEvent & {
  type: 'RESET'
  resetBy: string
  reason?: string
}

export type TodoEvent =
  | StartEvent
  | DeleteEvent
  | ArchiveEvent
  | RestoreEvent
  | ResetEvent
  | CompleteEvent

// Extract event types from TodoEvent
export type TodoEventType = ExtractPropertyType<TodoEvent, 'type'>

// Merged properties from unions
export type AllTodoEventProps = Prettify<TodoEvent>
export type AllTodoStateProps = Prettify<TodoState>

// Event type mapping
export type EventTypeMap = {
  START: StartEvent
  COMPLETE: CompleteEvent
  DELETE: DeleteEvent
  ARCHIVE: ArchiveEvent
  RESTORE: RestoreEvent
  RESET: ResetEvent
}

// Guard types
export type TodoGuardStringValidation<T extends TodoEventType> = {
  eventProperty: StringKeysOf<EventTypeMap[T]>
  stateProperty?: StringKeysOf<AllTodoStateProps>
  minLength: number
}

export type TodoGuardCustomValidation<T extends TodoEventType> = {
  eventProperty: keyof EventTypeMap[T]
  stateProperty?: UnionProperties<TodoState>
  validator: (value: unknown) => boolean
}

export type TodoGuardValidation<T extends TodoEventType = TodoEventType> =
  | TodoGuardStringValidation<T>
  | TodoGuardCustomValidation<T>

export type TodoGuards = {
  [K: string]: {
    eventType: TodoEventType
    validations: TodoGuardCustomValidation<TodoEventType>[]
  }
}

export type TodoContext = {
  readonly userId: string
  readonly todoList: BaseTodo[]
  readonly currentFilter: 'all' | TodoStatus
  readonly lastModified?: Date
  readonly error?: TodoError
}

export type TodoError = {
  message: string
  code?: string
  timestamp: Date
}

// State machine types
export type Guard<E> = (event: E) => boolean
export type Action<E> = (event: E) => void
export type Target<S> = S | ((state: S) => S)

export type StateConfig<S extends TodoState, E extends TodoEvent> = {
  [Status in TodoStatus]?: {
    on?: {
      [EventType in TodoEventType]?: TransitionConfig<S, E>
    }
    target: Target<S>
    action?: Action<E>
    guard?: Guard<E>
    onEntry?: () => void
    onExit?: () => void
  }
}

export function createInitialContext(overrides?: Partial<TodoContext>): TodoContext {
  return {
    userId: '',
    todoList: [],
    currentFilter: 'all',
    ...overrides,
  }
}
export class TodoStateMachine<S extends TodoState, E extends TodoEvent> {
  private currentState: S
  private config: StateConfig<S, E>
  private context: TodoContext
  private validationConfig: TodoValidationConfig
  constructor(
    initialState: S,
    config: StateConfig<S, E>,
    context: TodoContext,
    validationConfig: TodoValidationConfig
  ) {
    this.currentState = initialState
    this.config = config
    this.context = context
    this.validationConfig = validationConfig
    // validate initial state exists on config
    if (!this.config[initialState.status]) {
      throw new Error(`Invalid initial state: ${initialState.status}`)
    }
    // call onEntry for initial state
    const initialStateConfig = this.config[initialState.status]
    initialStateConfig?.onEntry?.()
    this.context = createInitialContext()
  } // end constructor
  private readonly guardConfigs: TodoGuards = {
    canStartTodo: {
      eventType: 'START',
      validations: [{ eventProperty: 'assignedTo', minLength: 1 }],
    },
    canCompleteTodo: {
      eventType: 'COMPLETE',
      validations: [{ eventProperty: 'completedBy', minLength: 1 }],
    },
  }
  private createGuardFunction(guardName: string) {
    const config = this.guardConfigs[guardName]
    return (event: E): boolean => {
      if (event.type !== config.eventType) return false
      const validationContext = createTodoValidationContext(
        this.currentState,
        event as EventTypeMap[typeof config.eventType],
        this.validationConfig
      )
      const validationResult = validationTodoTransition(validationContext)
      if (!validationResult.isValid) return false
      // Check all configured validations
      return config.validations.every((validation) => {
        const typedEvent = event as EventTypeMap[typeof config.eventType]
        const value = typedEvent[validation.eventProperty]
        if ('minLength' in validation) {
          return typeof value === 'string' && value.length >= validation.minLength
        }
        if ('validator' in validation) {
          return validation.validator(value)
        }
        return true
      })
    }
  }
  private todoGuards = Object.fromEntries(
    Object.keys(this.guardConfigs).map((guardName) => [
      guardName,
      this.createGuardFunction(guardName),
    ])
  ) as Record<keyof typeof this.guardConfigs, (event: E) => boolean>
  public transition(event: E): void {
    const currentState = this.config[this.currentState.status]
    const targetState = currentState?.on?.[event.type]?.target
    if (targetState) {
      const nextState = {
        ...this.currentState,
        ...targetState,
      }
      this.currentState = nextState
    }
  }
  public getState(): S {
    return this.currentState
  }
  public getContext(): TodoContext {
    return structuredClone(this.context)
  }
}
