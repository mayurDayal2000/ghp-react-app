import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{import.meta.env.VITE_GREET}</h1>
      
      <img src={reactLogo} className="logo react" alt="React logo" />
      <img src={viteLogo} className="logo vite" alt="Vite logo"/>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
