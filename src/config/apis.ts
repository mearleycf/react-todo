const API_PATHS = {
  BASE_PATH: '/api',
  VERSION: '/v1',
  TODOS: '/todos',
} as const

export const BASE_URL = 'http://localhost:3001'

export const BASE_API_PATH = `${BASE_URL}${API_PATHS.BASE_PATH}${API_PATHS.VERSION}${API_PATHS.TODOS}`
