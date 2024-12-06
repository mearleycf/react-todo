import TodoList from '@/components/TodoList'
import { useTodos } from '@/hooks/todos'
import AddTodo from '@/components/AddTodo'
import { useEffect } from 'react'

function App() {
  const { todos, error, addTodo, updateTodo, deleteTodo, getTodos } = useTodos()

  useEffect(() => {
    void getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-neon-codGray">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-neon-aqua">Todo App</h1>

        <div className="rounded-lg border border-neon-electricBlue bg-neon-ebony p-6 shadow-lg">
          <div className="space-y-4">
            <AddTodo onAdd={addTodo} text="" />
            <TodoList
              todos={todos}
              error={error ? error : null}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
