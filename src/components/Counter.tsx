import { useState, useEffect } from 'react'

interface CounterProps {
  initialCount: number
  incrementStepSize?: number
}

export default function Counter(props: CounterProps) {
  const { initialCount, incrementStepSize = 1 } = props
  const [count, setCount] = useState(initialCount)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + incrementStepSize)
  }
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - incrementStepSize)
  }
  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div className="flex items-center space-x-4">
      <p className="text-2xl font-bold text-neon-springGreen">{count}</p>
      <div className="space-x-2">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-neon-blue hover:bg-neon-electricBlue text-neon-white rounded-lg border-2 border-neon-munsellBlue transition-colors duration-200"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-neon-purple hover:bg-neon-darkOrchid text-neon-white rounded-lg border-2 border-neon-mediumOrchid transition-colors duration-200"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
