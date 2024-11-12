import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import HeaderAdmin from './HeaderAdmin';
import './HomeLogin.css';
import Banner from './Banner';
import Servicios from './Servicios';
import Dashboardg from './Dashboardg';
import Dashboard from '../pages/Dashboard';
import ProveedoresList from '../pages/ProveedoresList';
import EditarProveedor from '../pages/EditarProveedor';
import CambiarContrasena from '../components/CambiarContrasena';
import RegistrarProveedor from '../pages/RegistrarProveedor';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Header from '../Header';

const auth = getAuth(appFirebase); // Obtienes la instancia de autenticación

// Componente Navbar
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      

      {/* Botón del menú hamburguesa para dispositivos móviles */}
      <div className="hamburger-menu" onClick={() => setIsMobile(!isMobile)}>
       
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
       
        <li>
          <button className='btn btn-primary' onClick={() => signOut(auth)}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}


// Componente principal HomeLogin
function HomeLogin() {
  return (
    <div className='El_todo'>
      
      <Layout />
      <Navbar/>


    </div>
  );
}

export default HomeLogin;
