import React, { useState } from 'react';
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import HeaderAdmin from './HeaderAdmin';
import './HomeLogin.css';
import Banner from './Banner';
import Servicios from './Servicios';

const auth = getAuth(appFirebase); // Obtienes la instancia de autenticación

// Componente Navbar
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Autoasiste</h2>
      </div>

      {/* Botón del menú hamburguesa para dispositivos móviles */}
      <div className="hamburger-menu" onClick={() => setIsMobile(!isMobile)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#dashboards">Perfil</a></li>
        <li><a href="#segments">Servicio</a></li>
        <li><a href="#account">Calificaciones</a></li>
        <li><a href="#settings">Soporte</a></li>
        <li>
          <button className='btn btn-primary' onClick={() => signOut(auth)}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

// Componente principal HomeLogin
const HomeLogin = () => {
  return (
    <div className='El_todo'>
      <Navbar />
      <HeaderAdmin />
      <Banner />
      <Servicios />
    </div>
  );
}

export default HomeLogin;
