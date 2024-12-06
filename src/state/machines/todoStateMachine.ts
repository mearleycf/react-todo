import { TodoStateMachine, createInitialContext, StateConfig, TodoState, TodoEvent } from '@/types'
import { createTodoValidationContext, validationTodoTransition } from '../validators/todoValidators'
import { TodoValidationConfig } from '../validators/types'

const initialState: TodoState = {
  status: 'not started',
  createdAt: new Date(),
  todoText: '',
  list: [],
}

const validationConfig: TodoValidationConfig = {
  text: {
    minTextLength: 3,
    maxTextLength: 100,
  },
  list: {
    minListItems: 1,
    maxListItems: 25,
  },
  status: {
    allowedStatuses: ['not started', 'in progress', 'completed', 'deleted', 'archived'],
    transitions: {
      'not started': ['in progress', 'deleted', 'archived'],
      'in progress': ['not started', 'completed', 'deleted', 'archived'],
      completed: ['in progress', 'deleted', 'archived'],
      deleted: ['in progress'],
      archived: ['in progress', 'deleted'],
    },
  },
}

const todoGuards = {
  canStartTodo: (event: TodoEvent): boolean => {
    if (event.type !== 'START') return false

    // create validation context for this transition
    const validationContext = createTodoValidationContext(initialState, event, validationConfig)

    // run validation
    const validationResult = validationTodoTransition(validationContext)

    // return true only if validation passes and assignedTo is present
    return validationResult.isValid && event.type === 'START' && event.assignedTo.length > 0
  },
  canCompleteTodo: (event: TodoEvent): boolean => {
    if (event.type !== 'COMPLETE') return false

    const validationContext = createTodoValidationContext(currentState, event, validationConfig)

    const validationResult = validationTodoTransition(validationContext)

    return validationResult.isValid && event.type === 'COMPLETE' && event.completedBy.length > 0
  },
  canDeleteTodo: (event: TodoEvent): boolean => {
    if (event.type !== 'DELETE') return false

    const validationContext = createTodoValidationContext(initialState, event, validationConfig)

    const validationResult = validationTodoTransition(validationContext)

    return (
      validationResult.isValid &&
      event.type === 'DELETE' &&
      validationContext.currentState.deletedAt != null
    )
  },
  // more guards below
}

const config: StateConfig<TodoState, TodoEvent> = {
  'not started': {
    onEntry: () => {
      console.log('not started state entered')
    },
    onExit: () => {
      console.log('exiting not started state')
    },
    target: (currentState: TodoState) => ({
      ...currentState,
      status: 'not started',
      createdAt: new Date(),
      todoText: currentState.todoText || '',
      list: currentState.list || [],
    }),
    on: {
      START: {
        onEntry: () =>
          console.log(
            'triggering start event on not started state and transitioning to in progress state'
          ),
        onExit: () => console.log('ending start event on not started state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'in progress',
          modifiedAt: new Date(),
          todoText: currentState.todoText,
          list: currentState.list,
        }),
        guard: todoGuards.canStartTodo,
      },
      DELETE: {
        onEntry: () =>
          console.log(
            'triggering delete event on not started state and transitioning to deleted state'
          ),
        onExit: () => console.log('ending delete event on not started state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'deleted',
          deletedAt: new Date(),
          todoText: currentState.todoText,
          list: currentState.list,
        }),
      },
      ARCHIVE: {
        onEntry: () =>
          console.log(
            'triggering archive event on not started state and transitioning to archived state'
          ),
        onExit: () => console.log('ending archive event on not started state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'archived',
          archivedAt: new Date(),
          todoText: currentState.todoText,
          list: currentState.list,
        }),
      },
    },
  },
  deleted: {
    onEntry: () => console.log('entering deleted state'),
    onExit: () => console.log('exiting deleted state'),
    target: (currentState: TodoState) => ({
      ...currentState,
      status: 'deleted',
      deletedAt: new Date(),
    }),
    on: {
      RESTORE: {
        onEntry: () => console.log('triggering restore event on delete state'),
        onExit: () => console.log('ending restore event on delete state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'in progress',
          modifiedAt: new Date(),
        }),
      },
    },
  },
  archived: {
    onEntry: () => console.log('entering archived state'),
    onExit: () => console.log('exiting archived state'),
    target: (currentState: TodoState) => ({
      ...currentState,
      status: 'archived',
      archivedAt: new Date(),
    }),
    on: {
      RESTORE: {
        onEntry: () =>
          console.log(
            'triggering restore event on archived state and transitioning to in progress state'
          ),
        onExit: () => console.log('ending restore event on archived state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'in progress',
          modifiedAt: new Date(),
        }),
      },
      DELETE: {
        onEntry: () =>
          console.log(
            'triggering delete event on archived state and transitioning to deleted state'
          ),
        onExit: () => console.log('ending delete event on archived state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'deleted',
          deletedAt: new Date(),
        }),
      },
    },
  },
  'in progress': {
    onEntry: () => console.log('entering in progress state'),
    onExit: () => console.log('exiting in progress state'),
    target: (currentState: TodoState) => ({
      ...currentState,
      status: 'in progress',
      modifiedAt: new Date(),
    }),
    on: {
      COMPLETE: {
        onEntry: () =>
          console.log(
            'triggering complete event on in progress state and transitioning to completed state'
          ),
        onExit: () => console.log('ending complete event on in progress state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'completed',
          completedAt: new Date(),
        }),
      },
      DELETE: {
        onEntry: () =>
          console.log(
            'triggering delete event on in progress state and transitioning to deleted state'
          ),
        onExit: () => console.log('ending delete event on in progress state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'deleted',
          deletedAt: new Date(),
        }),
      },
      ARCHIVE: {
        onEntry: () =>
          console.log(
            'triggering archive event on in progress state and transitioning to archived state'
          ),
        onExit: () => console.log('ending archive event on in progress state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'archived',
          archivedAt: new Date(),
        }),
      },
      RESET: {
        onEntry: () =>
          console.log(
            'triggering reset event on in progress state and transitioning to not started state'
          ),
        onExit: () => console.log('ending reset event on in progress state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'not started',
          createdAt: new Date(),
        }),
      },
    },
  },
  completed: {
    onEntry: () => console.log('entering completed state'),
    onExit: () => console.log('exiting completed state'),
    target: (currentState: TodoState) => ({
      ...currentState,
      status: 'completed',
      completedAt: new Date(),
    }),
    on: {
      DELETE: {
        onEntry: () =>
          console.log(
            'triggering delete event on completed state and transitioning to deleted state'
          ),
        onExit: () => console.log('ending delete event on completed state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'deleted',
          deletedAt: new Date(),
        }),
      },
      ARCHIVE: {
        onEntry: () =>
          console.log(
            'triggering archive event on completed state and transitioning to archived state'
          ),
        onExit: () => console.log('ending archive event on completed state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'archived',
          archivedAt: new Date(),
        }),
      },
      START: {
        onEntry: () =>
          console.log(
            'triggering start event on completed state and transitioning to in progress state'
          ),
        onExit: () => console.log('ending start event on completed state'),
        target: (currentState: TodoState) => ({
          ...currentState,
          status: 'in progress',
          modifiedAt: new Date(),
        }),
      },
    },
  },
}
const machineContext = createInitialContext()

export const todoStateMachine = new TodoStateMachine<TodoState, TodoEvent>(
  initialState,
  config,
  machineContext
)
