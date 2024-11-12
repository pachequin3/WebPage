// Layout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../credenciales';
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Layout.css';

const auth = getAuth(appFirebase); // Instancia de autenticación de Firebase

// Componente Navbar con cierre de sesión
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      {/* Botón del menú hamburguesa para dispositivos móviles */}
      <div className="hamburger-menu" onClick={() => setIsMobile(!isMobile)}>
        {/* Icono de menú o cualquier otro icono si se desea */}
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li>
          <button className='btn btn-primary' onClick={() => signOut(auth)}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

// Componente principal Layout con Navbar
function Layout() {
  return (
    
    <div className="layout">
      
      <Sidebar /> {/* Sidebar de navegación */}
      
      <div className="main-content">
        <Header /> {/* Header o encabezado */}
         {/* Navbar con cierre de sesión */}
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

