import { ApiError } from '@/types/index'
import { Todo } from '@/types'
import { ErrorMessage } from './ErrorMessage'

interface TodoListProps {
  todos: Todo[]
  error: ApiError | null
  onUpdate: (id: number, text?: string, completed?: boolean) => void
  onDelete: (id: number) => void
}

export default function TodoList({ todos, error, onDelete, onUpdate }: TodoListProps) {
  const onToggleChange = (id: number) => {
    const updatedTodo = todos.find((todo) => todo.id === id)
    if (!updatedTodo) {
      return new Error(`todo with ${id} not found`)
    }
    const todoCompleted: boolean = !updatedTodo.completed
    onUpdate(id, undefined, todoCompleted)
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center space-x-3 rounded-lg border border-neon-electricBlue bg-neon-ebony p-3"
        >
          <div className="flex items-center space-x-2 text-neon-white">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleChange(todo.id)}
              className="form-checkbox h-5 w-5 rounded border-neon-munsellBlue text-neon-blue focus:ring-neon-electricBlue"
            />
            <div className={todo.completed ? 'line-through text-neon-mountainMist' : ''}>
              {todo.text}
            </div>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
          {error && <ErrorMessage open={true} error={error} />}
        </li>
      ))}
    </ul>
  )
}
