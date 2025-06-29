import { useState } from 'react'
import reactLogo from '../public/vite.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16 hover:scale-110 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React + Tailwind 🎉</h1>
      <div className="bg-white text-black rounded shadow p-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-2 text-sm bg-[red]">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4 text-sm italic">Click on the logos to learn more</p>
    </div>
  )
}

export default App
