import Button from '@/components/Button'
import Counter from '@/components/Counter'
import TodoList from '@/components/TodoList'
import { useTodos } from '@/hooks/todos'
import AddTodo from '@/components/AddTodo'
import { useEffect } from 'react'

function App() {
  const { todos, error, addTodo, updateTodo, deleteTodo, getTodos } = useTodos()

  useEffect(() => {
    console.log('App todos value has changed')
  }, [todos])

  useEffect(() => {
    void getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="min-h-screen bg-neon-codGray">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-neon-aqua">
          React TypeScript Interview Practice
        </h1>

        <div className="space-y-8">
          <section className="rounded-lg border border-neon-electricBlue bg-neon-ebony p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-neon-persianRose">Buttons</h2>
            <div className="space-x-4">
              <Button
                variant="danger"
                size="large"
                disabled={false}
                label="Danger Large"
                onClick={() => console.log('Danger Large clicked')}
              />
              <Button
                disabled={true}
                label="Primary Medium"
                onClick={() => console.log('Primary Medium clicked')}
              />
              <Button
                variant="secondary"
                size="small"
                disabled={false}
                label="Secondary Small"
                onClick={() => console.log('Secondary Small clicked')}
              />
              <Button
                variant="primary"
                size="large"
                disabled={false}
                label="Primary Large"
                className="anotherClass"
                onClick={() => console.log('Primary Large clicked')}
              >
                Child Button Primary Large
              </Button>
            </div>
          </section>

          <section className="rounded-lg border border-neon-electricBlue bg-neon-ebony p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-neon-springGreen">Counter</h2>
            <Counter initialCount={0} />
          </section>

          <section className="rounded-lg border border-neon-electricBlue bg-neon-ebony p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-neon-orangePeel">To Dos</h2>
            <div className="space-y-4">
              <AddTodo onAdd={addTodo} text="" />
              <TodoList
                todos={todos}
                error={error ? error : null}
                onUpdate={updateTodo}
                onDelete={deleteTodo}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
