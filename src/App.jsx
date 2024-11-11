import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';
import Layout from './components/Layout'; // Importa el Layout principal

// Importa las páginas o componentes específicos
import PageServices from './PageServices';
import AppLogin from './LoginAdmin/AppLogin';
import Home from './Home';
import Contactanos from './Contactanos';
import Nosotros from './Nosotros';
import Dashboard from './pages/Dashboard';
import ProveedoresList from './pages/ProveedoresList';
import RegistrarProveedor from './pages/RegistrarProveedor';
import EditarProveedor from './pages/EditarProveedor';
import ServiciosAdmin from './ModuloContratacionServicios/ServiciosAdmin';
import AdminView from './ModuloContratacionServicios/AdminView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/Inicio" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Servicios" element={<PageServices />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/LoginAdmin/AppLogin" element={<AppLogin />} />

        {/* Rutas protegidas en el Layout principal */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} /> {/* Ruta principal Dashboard */}
          <Route path="proveedores" element={<ProveedoresList />} />
          <Route path="registrar-proveedor" element={<RegistrarProveedor />} />
          <Route path="editar-proveedor/:id" element={<EditarProveedor />} />
          <Route path="contratacion_Servicios" element={<AdminView />} />
          <Route path="aceptacion_servicios" element={<ServiciosAdmin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
