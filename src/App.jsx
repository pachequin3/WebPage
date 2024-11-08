import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';

import PageServices from './PageServices';

import AppLogin from './LoginAdmin/AppLogin';  // <-- Mantenemos una sola importación

import Home from './Home';
import Contactanos from './Contactanos';
import Nosotros from './Nosotros';
import HomeLogin from './LoginAdmin/HomeLogin';  // Mantén esta importación si lo usas en algún otro lugar
import Dashboard from './pages/Dashboard';
import ProveedoresList from './pages/ProveedoresList';
import RegistrarProveedor from './pages/RegistrarProveedor';
import EditarProveedor from './pages/EditarProveedor';
import CambiarContrasena from './components/CambiarContrasena';
import ServiciosAdmin from './ModuloContratacionServicios/ServiciosAdmin';
import AdminView from './ModuloContratacionServicios/AdminView';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Inicio' element={<Home />} />
      <Route path='/Nosotros' element={<Nosotros />} />
      <Route path='/Servicios' element={<PageServices />} />
      <Route path='/Contactanos' element={<Contactanos />} />
      <Route path='/LoginAdmin/AppLogin' element={<AppLogin />} />
      <Route path="proveedores" element={<ProveedoresList />} />
      <Route path="editar-proveedor/:id" element={<EditarProveedor />} />
      <Route path="registrar-proveedor" element={<RegistrarProveedor />} />
      <Route path="contratacion_Servicios" element={<AdminView/>} />
      <Route path="aceptacion_servicios" element={<ServiciosAdmin/>} />
     

      
      </Routes>
    </Router>  // <-- Cierre correcto
  );
}

export default App;