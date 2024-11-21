import { useState, useCallback } from 'react'
import { Todo } from '@/types'
import { createApiError } from '@/constants/http'
import type { ApiError } from '@/types/index'
import { logApiOperation } from '@/utils/express_utils'
import { BASE_API_PATH } from '@/config/apis'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState<ApiError | null>(null)
  const [loading, setLoading] = useState(false)

  const getTodos = useCallback(async () => {
    console.log('getTodos called')
    setLoading(true)
    try {
      const response = await fetch(BASE_API_PATH, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        logApiOperation('get', 'error', `Failed to load todos; ${response.status}`)
        const serverError = createApiError('get', response.status)
        setError(serverError)
        return
      }
      const data: Todo[] = await response.json()
      console.log('getTodos received:', data)
      setTodos(data)
    } catch (err) {
      const statusCode = err instanceof TypeError ? 503 : 500
      logApiOperation('get', 'error', `Failed to get todos; ${err}`)
      const serverError = createApiError('get', statusCode)
      setError(serverError)
    } finally {
      setLoading(false)
    }
  }, [])

  const addTodo = async (text: string) => {
    console.log('addTodo called with: ', text)
    try {
      setLoading(true)
      const response = await fetch(BASE_API_PATH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        logApiOperation('post', 'error', `Failed to add new todo; ${response.status}`)
        const serverError = createApiError('post', response.status)
        setError(serverError)
      }
      const newTodo: Todo = await response.json()
      console.log('addTodo received:', newTodo)
      await getTodos()
      setTodos([...todos, newTodo])
    } catch (err) {
      const statusCode = err instanceof TypeError ? 503 : 500
      logApiOperation('post', 'error', `Failed to add new todo; ${err}`)
      const serverError = createApiError('post', statusCode)
      setError(serverError)
    } finally {
      setLoading(false)
    }
  }

  const updateTodo = async (id: number, text?: string, completed?: boolean) => {
    setLoading(true)
    try {
      const response = await fetch(`${BASE_API_PATH}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, text, completed }),
      })

      if (!response.ok) {
        logApiOperation('patch', 'error', `Failed to update todo; ${response.status}`)
        const serverError = createApiError('patch', response.status)
        setError(serverError)
        return
      }
      const updatedTodo: Todo = await response.json()
      const newTodosArray = todos.map((todo: Todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo
        }
        return todo
      })
      setTodos(newTodosArray)
    } catch (err) {
      const statusCode = err instanceof TypeError ? 503 : 500
      logApiOperation('patch', 'error', `Failed to update todo; ${err}`)
      const serverError = createApiError('patch', statusCode)
      setError(serverError)
    } finally {
      setLoading(false)
    }
  }

  const deleteTodo = async (id: number) => {
    setLoading(true)
    const previousItems: Todo[] = [...todos]
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
    try {
      const response = await fetch(`${BASE_API_PATH}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        logApiOperation('delete', 'error', `Failed to delete todo; ${response.status}`)
        const serverError = createApiError('delete', response.status)
        setError(serverError)
        return
      }
      const todoWasDeleted: boolean = await response.json()
      if (!todoWasDeleted) {
        logApiOperation('delete', 'error', `Todo not found; ${response.status}`)
        const serverError = createApiError('delete', response.status)
        setError(serverError)
        return
      }
      const newTodosArray = todos.filter((todo) => {
        return todo.id !== id
      })
      setTodos(newTodosArray)
    } catch (err) {
      const statusCode = err instanceof TypeError ? 503 : 500
      logApiOperation('delete', 'error', `Failed to delete todo; ${err}`)
      const serverError = createApiError('delete', statusCode)
      setError(serverError)
      setTodos(previousItems)
    } finally {
      setLoading(false)
    }
  }

  return { todos, error, loading, addTodo, updateTodo, deleteTodo, getTodos }
}
