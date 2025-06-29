import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <h1 className="mb-4 text-4xl font-bold">Vite + React + Tailwind 🎉</h1>
      <div className="rounded bg-white p-6 text-black shadow">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          count is {count}
        </button>
        <p className="mt-2 bg-[red] text-sm">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4 text-sm italic">Click on the logos to learn more</p>
      <p className="bg-[blue] text-xl">내 이름은 김석진이야</p>
    </div>
  );
}

export default App;
