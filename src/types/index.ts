/**
 * Represents a todo item in the application
 * @property id - Unique identifier for the todo
 * @property text - The content/description of the todo
 * @property completed - Whether the todo has been completed
 */
export type Todo = {
  id: number
  text: string
  completed: boolean
}

/** HTTP methods supported by the API */
export type HttpMethod = 'get' | 'post' | 'patch' | 'delete'

/**
 * Represents all possible operation types in the system
 * Includes both HTTP methods and system-level operations
 */
export type OperationType = HttpMethod | 'system'

/**
 * API log message structure for different operation states
 * @property request - Message logged when request is initiated
 * @property success - Message logged on successful operation
 * @property error - Message logged on operation failure
 * @property info - Additional information about the operation
 */
export type ApiLogMessages = {
  request: string
  success: string
  error: string
  info: string
}

/** Collection of API logs indexed by operation type */
export type ApiLogs = Record<OperationType, ApiLogMessages>

/**
 * HTTP status codes used for error handling
 * @remarks
 * Includes client errors (4xx), server errors (5xx), and network-related errors
 */
export type ErrorStatus = 400 | 401 | 403 | 404 | 408 | 429 | 500 | 502 | 503 | 504

/**
 * Categorizes and provides metadata about different types of errors
 * @property canRetry - Indicates if the operation can be retried
 * @property category - The broad category of the error
 * @property message - Human-readable error description
 */
export type ErrorCategory = {
  canRetry: boolean
  category: 'client' | 'server' | 'network'
  message: string
  methodMessages?: Record<HttpMethod, string>
}

/**
 * Mapping of HTTP status codes to their corresponding error categories and metadata
 * @remarks
 * Uses 'as const' to ensure type safety and immutability of the error definitions
 */
export const HTTP_ERROR_CATEGORIES: Record<ErrorStatus, ErrorCategory> = {
  400: {
    canRetry: false,
    category: 'client',
    message: 'Invalid request data',
    methodMessages: {
      get: 'Invalid request parameters',
      post: 'Invalid request body',
      patch: 'Invalid update data',
      delete: 'Invalid request parameters',
    },
  },
  401: { canRetry: false, category: 'client', message: 'Authentication required' },
  403: { canRetry: false, category: 'client', message: 'Operation not permitted' },
  404: {
    canRetry: false,
    category: 'client',
    message: 'Resource not found',
    methodMessages: {
      get: 'Requested resource not found',
      post: 'Requested resource not found',
      patch: 'Resource to update not found',
      delete: 'Resource to delete not found',
    },
  },
  408: { canRetry: true, category: 'network', message: 'Request timeout' },
  429: { canRetry: true, category: 'client', message: 'Too many requests' },
  500: {
    canRetry: true,
    category: 'server',
    message: 'Internal server error',
    methodMessages: {
      get: 'Error retrieving resource',
      post: 'Error creating resource',
      patch: 'Error updating resource',
      delete: 'Error deleting resource',
    },
  },
  502: { canRetry: true, category: 'network', message: 'Bad gateway' },
  503: { canRetry: true, category: 'server', message: 'Service unavailable' },
  504: { canRetry: true, category: 'network', message: 'Gateway timeout' },
} as const

/**
 * Represents an API error with its associated metadata
 * @property status - HTTP status code of the error
 * @property method - HTTP method that triggered the error
 * @property message - Descriptive error message
 */
export type ApiError = {
  status: number
  method: HttpMethod
  message: string
}

/**
 * Represents a standardized error response
 * @property method - The operation type that caused the error
 * @property status - HTTP status code
 * @property message - Error description
 */
export type ErrorResponse = {
  method: OperationType
  status: ErrorStatus
  message: string
}
