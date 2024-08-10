import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PageServices from './PageServices'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PageServices />
  )
}

export default App
