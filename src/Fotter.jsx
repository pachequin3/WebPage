import React from 'react'
import './Fottter.css'
export default function Fotter() {
  return (
    <div className='conteinerFotter'>
        <div className='logo'>
        <h1>Pongase en contacto con nosotros</h1>
        <img src="src/assets/imagenes/palta.jpg" alt="" />
        </div>
        <div className='textoFotther'>
            <div>
            <h2>Llamanos</h2>
            <h3>77707809</h3>
            </div>
            <div>
            <h1>Envianos un mensaje</h1>
            <h2>tecAmi@gmail.com</h2>
            

            </div>
            <div className='iconoss'>
            <p>Síguenos en:</p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
            </a>
            </div>

        </div>
        <div className='redesSociales'>

        </div>
    </div>
  )
}
