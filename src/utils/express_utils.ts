import { ApiLogs, OperationType, ApiLogMessages } from "@/types"

// System-specific log messages
export const SYSTEM_LOG_MESSAGES: ApiLogMessages = {
  request: 'Processing system operation...',
  success: 'System operation completed successfully',
  error: 'System operation failed',
  info: 'System information'
}

export const defaultApiLogs: ApiLogs = {
  post: {
    request: 'Adding new todo...',
    success: 'Successfully added todo',
    error: 'Failed to add todo',
    info: 'Todo add operation'
  },
  patch: {
    request: 'Updating todo...',
    success: 'Successfully updated todo',
    error: 'Failed to update todo',
    info: 'Todo update operation'
  },
  get: {
    request: 'Fetching todos...',
    success: 'Successfully fetched todos',
    error: 'Failed to fetch todos',
    info: 'Todo fetch operation'
  },
  delete: {
    request: 'Deleting todo...',
    success: 'Successfully deleted todo',
    error: 'Failed to delete todo',
    info: 'Todo delete operation'
  },
  system: SYSTEM_LOG_MESSAGES
}

// Helper function to log API and system operations
export const logApiOperation = (
  method: OperationType,
  stage: keyof ApiLogMessages,
  customMessage?: string
) => {
  const message = customMessage || defaultApiLogs[method][stage]
  const prefix = method === 'system' ? '[SYSTEM]' : `[${method.toUpperCase()}]`
  console.log(`${prefix} ${message}`)
}
