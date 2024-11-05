import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ProveedoresList from './pages/ProveedoresList';
import RegistrarProveedor from './pages/RegistrarProveedor';
import EditarProveedor from './pages/EditarProveedor';
import CambiarContrasena from './components/CambiarContrasena';
import LoginAdmin from './LoginAdmin/LoginAmin';

function App() {
  // Comentamos la autenticación de Firebase
  // const [usuario, setUsuario] = useState(null);
 //  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user && user.emailVerified) {
  //       setUsuario(user);
  //     } else {
  //       setUsuario(null);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (loading) {
  //   return <div>Cargando...</div>;
  // }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginAdmin />} />
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

export default App;
