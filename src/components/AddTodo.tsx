import { useState } from 'react'

interface AddTodoProps {
  text: string
  onAdd: (text: string) => void
}

export default function AddTodo({ text, onAdd }: AddTodoProps) {
  const [inputText, setInputText] = useState(text || '')

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputText.trim()) {
      onAdd(inputText)
      setInputText('')
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className="space-y-3">
      <label htmlFor="todoText" className="block font-medium text-neon-aqua">
        Add a Todo
      </label>
      <div className="flex space-x-2">
        <input
          type="text"
          name="todoText"
          id="todoText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="flex-1 rounded-lg border-2 border-neon-electricBlue bg-neon-codGray px-4 py-2 text-neon-white placeholder-neon-mountainMist focus:outline-none focus:ring-2 focus:ring-neon-blue"
          placeholder="What needs to be done?"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="rounded-lg border-2 border-neon-munsellBlue bg-neon-blue px-4 py-2 text-neon-white transition-colors duration-200 hover:bg-neon-electricBlue disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add
        </button>
      </div>
    </form>
  )
}
