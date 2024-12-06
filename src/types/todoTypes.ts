import { ExtractPropertyType, MergeUnion } from './utilityTypes'

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
export type AllTodoEventProps = MergeUnion<TodoEvent>
export type AllTodoStateProps = MergeUnion<TodoState>

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
  stateProperty?: keyof AllTodoStateProps
  validator: (value: unknown) => boolean
}

export type TodoGuardValidation<T extends TodoEventType = TodoEventType> =
  | TodoGuardStringValidation<T>
  | TodoGuardCustomValidation<T>

export type TodoGuards = {
  [K: string]: {
    eventType: TodoEventType
    validations: TodoGuardValidation<TodoEventType>[]
  }
}

// State machine types
export type Guard<E> = (event: E) => boolean
export type Action<E> = (event: E) => void
export type Target<S> = S | ((state: S) => S)

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
