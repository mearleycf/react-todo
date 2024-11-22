import type { Request, Response, NextFunction } from 'express'
import { createApiError } from '@/constants/http'
import { logApiOperation } from '@/utils/express_utils'

type ValidatorFunction = (req: Request, res: Response, next: NextFunction) => void

export const validateTodoText: ValidatorFunction = (req, res, next) => {
  const httpMethod = req.method.toLowerCase() as 'post' | 'patch'

  if (!req.body.text || typeof req.body.text !== 'string') {
    logApiOperation(httpMethod, 'error', 'Invalid request body: missing or invalid text field')
    const error = createApiError(httpMethod, 400)
    return res.status(error.status).json(error)
  }

  next()
}

export const validateTodoId: ValidatorFunction = (req, res, next) => {
  const httpMethod = req.method.toLowerCase() as 'patch' | 'delete'
  const id = parseInt(req.params.id)

  if (isNaN(id) || id < 0) {
    logApiOperation(httpMethod, 'error', `Invalid todo ID: ${req.params.id}`)
    const error = createApiError(httpMethod, 400)
    return res.status(error.status).json(error)
  }

  next()
}

export const validateTodoUpdate = (req: Request, res: Response, next: NextFunction) => {
  const { text, completed } = req.body

  if (text !== undefined && typeof text !== 'string') {
    res.status(400).json({ error: 'Text must be a string' })
    return
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    res.status(400).json({ error: 'Completed must be a boolean' })
    return
  }

  if (text === undefined && completed === undefined) {
    res.status(400).json({ error: 'At least one field (text or completed) must be provided' })
    return
  }

  next()
}
