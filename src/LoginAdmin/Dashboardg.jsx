import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ProveedoresList from '../pages/ProveedoresList';
import RegistrarProveedor from '../pages/RegistrarProveedor';
import EditarProveedor from '../pages/EditarProveedor';
import CambiarContrasena from '../components/CambiarContrasena';
import Layout from '../components/Layout';
function Dashboardg() {
  return (
   
  <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="proveedores" element={<ProveedoresList />} />
          <Route path="editar-proveedor/:id" element={<EditarProveedor />} />
          <Route path="registrar-proveedor" element={<RegistrarProveedor />} />
          <Route path="cambiar-contrasena" element={<CambiarContrasena />} />
        </Route>
      </Routes>
  </Router>
  );
}

export default Dashboardg;
