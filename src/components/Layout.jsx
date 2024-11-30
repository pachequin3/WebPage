import React from 'react';
import { Outlet } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../credenciales';
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Layout.css';

const auth = getAuth(appFirebase); // Instancia de autenticación de Firebase

// Componente principal Layout con Navbar
function Layout() {
  return (
    <div className="layout">
      <Sidebar /> {/* Sidebar dinámico basado en roles */}
      <div className="main-content">
        <Header /> {/* Header o encabezado */}
        <main>
          <Outlet /> {/* Renderizado del componente según la ruta */}
        </main>
        <footer>
          <p>© 2024 AutoAsiste Bolivia. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
