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
import ProveedorListP from './pages/ProveedorListP';
import RegistrarProveedor from './pages/RegistrarProveedor';
import EditarProveedor from './pages/EditarProveedor';
import UsuariosList from './pages/UsuariosList';
import UsuariosListP from './pages/UsuarioListP';
import EditarUsuario from './pages/EditarUsuario';
import VerificationComplete from './pages/VerificationComplete';
import ServiciosAdmin from './ModuloContratacionServicios/ServiciosAdmin';
import AdminView from './ModuloContratacionServicios/AdminView';
import { ReportsModule } from './Reportes/ReportsModule';
import Services from './Services';
import PagosAdmin from './ModuloContratacionServicios/PagosAdmin';

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
        <Route path="/verification-complete" element={<VerificationComplete />} />

        {/* Rutas protegidas bajo Layout */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          {/* Rutas de Proveedores */}
          <Route path="proveedores" element={<ProveedoresList />} />
          <Route path="proveedores/registrar-proveedor" element={<RegistrarProveedor />} />
          <Route path="proveedores/editar-proveedor/:id" element={<EditarProveedor />} />

          {/* Rutas de ProveedoresP */}
          <Route path="proveedoresp" element={<ProveedorListP />} />
          <Route path="proveedoresp/editar-proveedor/:id" element={<EditarProveedor />} />

          {/* Rutas de Usuarios */}
          <Route path="usuarios" element={<UsuariosList />} />
          <Route path="usuarios/editar-usuario/:id" element={<EditarUsuario />} />

          {/* Rutas de UsuariosP */}
          <Route path="usuariosp" element={<UsuariosListP />} />

          {/* Otros módulos */}
          <Route path="servicios" element={<Services />} />
          <Route path="contratacion_servicios" element={<AdminView />} />
          <Route path="pagos_admin" element={<PagosAdmin/>} />
          <Route path="aceptacion_servicios" element={<ServiciosAdmin />} />
          <Route path="informes" element={<ReportsModule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
