import { useState, memo, FC, useCallback, useMemo } from 'react'
import './App.css'

type CounterType = {
  globalHandler: () => void
}

const Counter: FC<CounterType> = memo(
  ({ globalHandler }) => {
    const [count, setCount] = useState(0)
    console.log('render second component')
    return (
      <div className="card">
        <h1>Second Counter</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={globalHandler}>
          Global counter
        </button>
      </div>
    )
  }
)


function App() {
  const [count, setCount] = useState(0)

  const [isBlue, setColorSwitcher] = useState(false)

  const resultOfHardCalculations = useMemo(() => {
    return hardCalculation(count)
  }, [count])

  console.log('render first component')

  const globalHandler = useCallback(() => setCount((count) => count + 1), [])

  return (
    <>
      <h1 style={{ padding: '1em', backgroundColor: isBlue ? 'lightblue' : 'purple' }}>memo useMemo useCallback</h1>
      <button onClick={() => setColorSwitcher(prev => !prev)}>
        Color switcher
      </button>
      <div className="card">
        <h3>Result of hard calculations</h3>
        {resultOfHardCalculations}
      </div>
      <div className="card">
        <button onClick={globalHandler}>
          count is {count}
        </button>
      </div>

      <Counter globalHandler={globalHandler} />
    </>
  )
}


const hardCalculation = (count: number) => {
  console.log('Hard calculations')
  for (let i = 0; i < 1000000000; i++) {
    return count
  }

}

export default App