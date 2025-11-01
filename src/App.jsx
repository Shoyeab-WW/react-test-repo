import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <h1>vite</h1>
    <Home/>
   </main>
  )
}

export default App
