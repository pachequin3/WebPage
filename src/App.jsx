import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contactanos from './Contactanos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Contactanos />
    </div>
  )
}

export default App
