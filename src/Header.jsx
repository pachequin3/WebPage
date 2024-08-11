import React from 'react';
import './Header.css';
import logo from './logo.png'; // Aquí pondrás tu logo más tarde

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#eventos">Eventos</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
