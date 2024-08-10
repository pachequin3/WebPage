import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='headerContenedor'>
        <div className='logoHeader'>
            <img src="src/assets/imagenes/logo.jpg" alt="" />
        </div>

        <div className='TextoHeader'>
            <div className='letra1'><h1>Inicio</h1></div>
            <div className='letra2'><h1 >Nosotros</h1></div>
            <div className='letra3'><h1>Servicios</h1></div>
            <div className='letra4'><h1>Contactanos</h1></div>
            
        </div>

    </div>
  )
}

export default Header