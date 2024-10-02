import React from 'react';
import './HeaderAdmin.css';
import ImagenProfile from '../assets/imagenes/2.jpg';
function HeaderAdmin() {
  return (
    <header className="headerAdmin">
      <div className="headerAdmin-left">
      <img src={ImagenProfile} alt="" className='estilo-profile'/>
        
      </div>
      
    </header>
  );
}

export default HeaderAdmin;