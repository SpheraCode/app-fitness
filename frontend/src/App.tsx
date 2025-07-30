import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData,setData] = useState('')

  useEffect(() => {
    async function fetchData() {
    const response = await fetch('/api/ping')
    const data = await response.json()
    setData(data.message)
    }
    fetchData()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-red-500 text-3xl font-bold'>
          Aplicação funcionando!!!
        </p>
      </div>
      <p className="text-green-400 text-3xl font-bold">
        {apiData}
      </p>
    </>
  )
}

export default App
