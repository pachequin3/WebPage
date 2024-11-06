import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fotter from './Fotter.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'
import PageServices from './PageServices.jsx'
import Contactanos from './Contactanos.jsx'
import App from './App.jsx'
import HomeLogin from './LoginAdmin/HomeLogin.jsx'
import Nosotros from './Nosotros.jsx'
import ServiciosAdmin from './ModuloContratacionServicios/ServiciosAdmin.jsx'
import AdminView from './ModuloContratacionServicios/AdminView.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ServiciosAdmin/>
  </StrictMode>
)
