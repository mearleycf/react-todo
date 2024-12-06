import { TodoEvent, TodoState, TodoStatus } from '@/types'

/**
 * Core validation result type
 */
export type ValidationResult = {
  isValid: boolean
  error?: string
}

/**
 * Extended validation type for Todos
 */
export type TodoValidation = {
  validate: () => ValidationResult
  errors: string[]
}

/**
 * Configuration for Todo validation rules
 */
export type TodoValidationConfig = {
  text: {
    minTextLength: number
    maxTextLength: number
  }
  list: {
    minListItems: number
    maxListItems: number
  }
  status: {
    allowedStatuses: TodoStatus[]
    transitions: Record<TodoStatus, TodoStatus[]>
  }
}

/**
 * Validation context for state transitions
 */
export type TodoValidationContext = {
  currentState: TodoState
  event: TodoEvent
  config: TodoValidationConfig
}
