import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fotter from './Fotter.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'
import PageServices from './PageServices.jsx'
import Contactanos from './Contactanos.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
