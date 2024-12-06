import { ValidationResult, TodoValidationConfig, TodoValidationContext } from './types'
import { TodoStatus, TodoEvent, TodoEventType, TodoState } from '@/types'

export function todoTextValidator(
  text: string,
  config: TodoValidationConfig['text']
): ValidationResult {
  const errors: string[] = []

  if (!text) errors.push('Text is required')

  if (text) {
    if (text.length < config.minTextLength)
      errors.push(`Text must be at least ${config.minTextLength} characters long`)

    if (text.length > config.maxTextLength)
      errors.push(`Text must be at most ${config.maxTextLength} characters long`)
  }
  return {
    isValid: errors.length === 0,
    error: errors.length > 0 ? errors.join(', ') : undefined,
  }
}

export function todoListValidator(
  list: string[],
  config: TodoValidationConfig['list']
): ValidationResult {
  const errors: string[] = []

  if (list.length < config.minListItems)
    errors.push(`List must have at least ${config.minListItems} items`)

  if (list.length > config.maxListItems)
    errors.push(`List must have at most ${config.maxListItems} items`)

  return {
    isValid: errors.length === 0,
    error: errors.length > 0 ? errors.join(', ') : undefined,
  }
}

export function todoTransitionValidator(
  currentState: TodoState,
  event: { type: TodoEventType },
  config: TodoValidationConfig['status']
): ValidationResult {
  const errors: string[] = []

  // 1. validate current state is allowed
  if (!config.allowedStatuses.includes(currentState.status)) {
    errors.push(
      `Current state ${currentState.status} is not allowed; allowed states: ${config.allowedStatuses.join(', ')}`
    )
    return {
      isValid: false,
      error: errors.join(', '),
    }
  }

  // 2. Determine target state based on event type
  const targetState = determineTargetState(event)

  // 3. check if transition is allowed
  const allowedNextStates = config.transitions[currentState.status as TodoStatus]
  if (!allowedNextStates.includes(targetState)) {
    errors.push(`Transition from ${currentState.status} to ${targetState} is not allowed`)
  }

  return {
    isValid: errors.length === 0,
    error: errors.length > 0 ? errors.join(', ') : undefined,
  }
}

function determineTargetState(event: { type: TodoEventType }): TodoStatus {
  switch (event.type) {
    case 'START':
    case 'RESTORE':
      return 'in progress'
    case 'COMPLETE':
      return 'completed'
    case 'DELETE':
      return 'deleted'
    case 'ARCHIVE':
      return 'archived'
    case 'RESET':
      return 'not started'
    default:
      throw new Error(`Unknown event type: ${event.type}`)
  }
}

// build validation context factory
export function createTodoValidationContext(
  currentState: TodoState,
  event: TodoEvent,
  config: TodoValidationConfig
): TodoValidationContext {
  return {
    currentState,
    event,
    config,
  }
}

export function validationTodoTransition(context: TodoValidationContext): ValidationResult {
  // 1. validate event matches current state
  const stateValidation = todoTransitionValidator(
    context.currentState,
    context.event,
    context.config.status
  )
  if (!stateValidation.isValid) return stateValidation

  // 2. validate todo text if present in state
  if ('todoText' in context.currentState) {
    const textValidation = todoTextValidator(context.currentState.todoText, context.config.text)
    if (!textValidation) return textValidation
  }

  // 3. Validate todo list if present in state
  if ('list' in context.currentState) {
    const listValidation = todoListValidator(context.currentState.list, context.config.list)
    if (!listValidation.isValid) return listValidation
  }

  return { isValid: true }
}
