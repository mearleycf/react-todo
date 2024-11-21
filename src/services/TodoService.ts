import fs from 'node:fs'
import type { Todo } from '@/types'
import { logApiOperation } from '@/utils/express_utils'

export class TodoService {
  private filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
  }

  readTodos(): Todo[] {
    try {
      if (!fs.existsSync(this.filePath)) {
        logApiOperation('system', 'request', 'Creating new todos file')
        return []
      }

      const rawData = fs.readFileSync(this.filePath, 'utf-8')
      if (!rawData.trim()) {
        logApiOperation('system', 'request', 'Todos file is empty; returning empty array')
        return []
      }

      logApiOperation('system', 'request', `Existing todos raw data: ${rawData}`)
      return JSON.parse(rawData)
    } catch (error) {
      logApiOperation('system', 'error', `Error parsing todos: ${error}`)
      return []
    }
  }

  writeTodos(todos: Todo[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(todos, null, 2))
  }

  getAllTodos(): Todo[] {
    return this.readTodos()
  }

  createTodo(text: string): Todo {
    const todos = this.readTodos()
    const newTodo: Todo = {
      id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 0,
      text,
      completed: false
    }
    
    todos.push(newTodo)
    this.writeTodos(todos)
    return newTodo
  }

  updateTodo(id: number, text?: string, completed?: boolean): Todo | null {
    const todos = this.readTodos()
    const todoIndex = todos.findIndex(todo => todo.id === id)
    
    if (todoIndex === -1) return null
    
    const updates: Partial<Todo> = {}
    if (text !== undefined) updates.text = text
    if (completed !== undefined) updates.completed = completed

    todos[todoIndex] = {...todos[todoIndex], ...updates }
    this.writeTodos(todos)
    return todos[todoIndex]
  }

  deleteTodo(id: number): boolean {
    const todos = this.readTodos()
    const todoIndex = todos.findIndex(todo => todo.id === id)
    
    if (todoIndex === -1) return false
    
    todos.splice(todoIndex, 1)
    this.writeTodos(todos)
    return true
  }
}