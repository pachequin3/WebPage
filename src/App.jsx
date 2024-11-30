import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Style.css';
import Layout from './components/Layout'; // Importa el Layout principal

// Importa las páginas o componentes específicos
import PageServices from './PageServices';
import Home from './Home';
import Contactanos from './Contactanos';
import Nosotros from './Nosotros';
import Login from './LoginAdmin/Login';
import Dashboard from './pages/Dashboard';
import ProveedoresList from './pages/ProveedoresList';
import RegistrarProveedor from './pages/RegistrarProveedor';
import EditarProveedor from './pages/EditarProveedor';
import ServiciosAdmin from './ModuloContratacionServicios/ServiciosAdmin';
import AdminView from './ModuloContratacionServicios/AdminView';
import { ReportsModule } from './Reportes/ReportsModule';
import Services from './Services';
import UsuariosList from './pages/UsuariosList';
import EditarUsuario from './pages/EditarUsuario';

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
        <Route path="/LoginAdmin" element={<Login />} />

        {/* Rutas protegidas bajo Layout */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="proveedores" element={<ProveedoresList />} />
          <Route path="usuarios" element={<UsuariosList />} />
          <Route path="proveedores/registrar-proveedor" element={<RegistrarProveedor />} />
          <Route path="proveedores/editar-proveedor/:id" element={<EditarProveedor />} />
          <Route path="usuarios/editar-usuario/:id" element={<EditarUsuario />} />
          <Route path="servicios" element={<Services />} />
          <Route path="contratacion_servicios" element={<AdminView />} />
          <Route path="aceptacion_servicios" element={<ServiciosAdmin />} />
          <Route path="informes" element={<ReportsModule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
