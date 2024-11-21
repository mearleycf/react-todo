import { HttpMethod, ApiError, HTTP_ERROR_CATEGORIES } from '@/types'

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const

// Helper function to create HTTP error responses
export const createApiError = (method: HttpMethod, status: number): ApiError => {
  const errorCategory = HTTP_ERROR_CATEGORIES[status as keyof typeof HTTP_ERROR_CATEGORIES]

  // Use method-specific message if available, otherwise use default message
  const message =
    errorCategory?.methodMessages?.[method] || errorCategory?.message || 'An unknown error occurred'

  return {
    status,
    method,
    message,
  }
}
