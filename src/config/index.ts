import dotenv from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Initialize dotenv
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Add this type definition before CONFIG
type AppConfig = {
  SERVER: {
    PORT: string | number
    HOST: string
    NODE_ENV: 'development' | 'production' | 'test'
  }
  API: {
    BASE_PATH: string
    TODOS_PATH: string
    VERSION: string
  }
  FILE: {
    NAME: string
    ENCODING: 'utf-8'
    PATH: string
  }
}

export const CONFIG: AppConfig = {
  SERVER: {
    PORT: process.env.PORT || 3001,
    HOST: process.env.HOST || 'localhost',
    NODE_ENV: (process.env.NODE_ENV as AppConfig['SERVER']['NODE_ENV']) || 'development',
  },
  API: {
    BASE_PATH: '/api',
    TODOS_PATH: '/todos',
    VERSION: '/v1',
  },
  FILE: {
    NAME: 'todos.json',
    ENCODING: 'utf-8' as const,
    PATH: path.join(__dirname, '..', 'server', 'todos.json'),
  },
} as const

// Helper to construct full API paths
export const getApiPath = (endpoint: string = ''): string => {
  return `${CONFIG.API.BASE_PATH}${CONFIG.API.VERSION}${CONFIG.API.TODOS_PATH}${endpoint}`
}
