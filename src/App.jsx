import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='kalkulatorContainer'>
        <h1>
          Aplikasi Penghitung Pahala Jariyah
        </h1>
        <span>{count}</span>
        <div className='clickContainer'>
          <button onClick={() => setCount((count) => count + 1)}>
            +
          </button>
          <button onClick=
            {() => setCount(0)}>
            Reset
          </button>
          <button onClick=
            {() => setCount((count) => count - 1)}>
            -
          </button>
        </div>
      </div>
    </>
  )
}

export default App
