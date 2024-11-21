import express from 'express'
import cors from 'cors'
import { logApiOperation } from '@/utils/express_utils'
import { CONFIG } from '@/config'
import toDosRouter from '@/routes/todos'

const app = express()

// middleware
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)
app.use(express.json())

// routes
app.use(CONFIG.API.BASE_PATH + CONFIG.API.VERSION + CONFIG.API.TODOS_PATH, toDosRouter)

app.listen(CONFIG.SERVER.PORT, () => {
  logApiOperation(
    'system',
    'info',
    `server running in ${CONFIG.SERVER.NODE_ENV} on port ${CONFIG.SERVER.HOST}:${CONFIG.SERVER.PORT}`
  )
})
console.log(`API endpoint: ${CONFIG.API.BASE_PATH}${CONFIG.API.VERSION}${CONFIG.API.TODOS_PATH}`)
console.log(`config.file.path: ${CONFIG.FILE.PATH}`)
export default app
