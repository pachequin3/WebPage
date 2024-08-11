import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='headerContenedor'>
      <div className='logoHeader'>
        <img src="/src/assets/imagenes/logo.jpg" alt="Logo de la empresa" />
      </div>

      <div className='TextoHeader'>
        <div className='letra1'><Link to='/Inicio'><h1>Inicio</h1></Link></div>
        <div className='letra2'><Link to='/Nosotros'><h1>Nosotros</h1></Link></div>
        <div className='letra3'><Link to='/Servicios'><h1>Servicios</h1></Link></div>
        <div className='letra4'><Link to='/Contactanos'><h1>Contáctanos</h1></Link></div>
      </div>
    </div>

  );
}

export default Header;
