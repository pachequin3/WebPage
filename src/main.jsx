import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fotter from './Fotter.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Fotter/>
  
  </StrictMode>,
)
