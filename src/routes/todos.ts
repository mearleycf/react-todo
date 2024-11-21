import { Router, type Request, type Response } from 'express'
import { TodoService } from '@/services/TodoService'
import { validateTodoText, validateTodoId, validateTodoUpdate } from '@/middleware/validateTodo'
import { createApiError } from '@/constants/http'
import { logApiOperation } from '@/utils/express_utils'
import { CONFIG } from '@/config'
import fs from 'node:fs'

const router = Router()
const todoService = new TodoService(CONFIG.FILE.PATH)

// GET /todos
router.get('/', (_: Request, res: Response) => {
  const httpMethod = 'get'
  console.log('GET /todos route hit') // Add this at the very start
  try {
    console.log('File path:', CONFIG.FILE.PATH) // Add this
    console.log('Does file exist?', fs.existsSync(CONFIG.FILE.PATH))

    logApiOperation(httpMethod, 'request')
    const todos = todoService.getAllTodos()
    console.log('Todos retrieved:', todos) // Add this

    logApiOperation(httpMethod, 'success')
    res.json(todos)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Detailed error:', {
      message: err.message,
      stack: err.stack,
      name: err.name,
    })
    logApiOperation(httpMethod, 'error', `${err}`)
    const serverError = createApiError(httpMethod, 500)
    res.status(serverError.status).json(serverError)
  }
})

// POST /todos
router.post('/', validateTodoText, (req: Request, res: Response) => {
  const httpMethod = 'post'
  try {
    logApiOperation(httpMethod, 'request')
    const newTodo = todoService.createTodo(req.body.text)
    logApiOperation(httpMethod, 'success', `New todo data: ${JSON.stringify(newTodo)}`)
    res.status(201).json(newTodo)
  } catch (error) {
    logApiOperation(httpMethod, 'error', `${error}`)
    const serverError = createApiError(httpMethod, 500)
    res.status(serverError.status).json(serverError)
  }
})

// PATCH /todos/:id
router.patch('/:id', validateTodoUpdate, (req: Request, res: Response) => {
  const httpMethod = 'patch'
  try {
    logApiOperation(httpMethod, 'request')
    const updatedTodo = todoService.updateTodo(
      parseInt(req.params.id),
      req.body.text,
      req.body.completed
    )

    if (!updatedTodo) {
      const error = createApiError(httpMethod, 404)
      res.status(error.status).json(error)
      return
    }
    logApiOperation(httpMethod, 'success', `Updated todo data: ${JSON.stringify(updatedTodo)}`)
    res.json(updatedTodo)
  } catch (error) {
    logApiOperation(httpMethod, 'error', `Error: ${error}`)
    const serverError = createApiError('patch', 500)
    res.status(serverError.status).json(serverError)
  }
})

// DELETE /todos/:id
router.delete('/:id', validateTodoId, (req: Request, res: Response) => {
  const httpMethod = 'delete'
  try {
    logApiOperation(httpMethod, 'request')
    const success = todoService.deleteTodo(parseInt(req.params.id))

    if (!success) {
      const error = createApiError(httpMethod, 404)
      res.status(error.status).json(error)
      return
    }

    logApiOperation(httpMethod, 'success', 'Todo successfully deleted')
    res.json({ success: true })
  } catch (error) {
    logApiOperation(httpMethod, 'error', `${error}`)
    const serverError = createApiError(httpMethod, 500)
    res.status(serverError.status).json(serverError)
  }
})

const toDosRouter = router

export default toDosRouter
