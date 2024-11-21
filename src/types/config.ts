export type ServerConfig = {
  PORT: number | string
  HOST: string
  NODE_ENV: 'development' | 'production' | 'test'
}

export type ApiConfig = {
  BASE_PATH: string
  TODOS_PATH: string
  VERSION: string
}

export type FileConfig = {
  NAME: string
  ENCODING: 'utf-8'
  PATH: string
}

export type AppConfig = {
  SERVER: ServerConfig
  API: ApiConfig
  FILE: FileConfig
}