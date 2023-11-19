import { useState } from 'react'

type CounterProps = {
  initialCount: number
}

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter