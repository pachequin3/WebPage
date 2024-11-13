import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react'
import './Home.css'
import Header from './Header';
import Fotter from './Fotter';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  return (
    
    <div className='ContainerMain'>
        <Header/>
        <div className='containerHomeMain'>
          
             <div className="overlay">
        <h1 className="title">MECASOFT</h1>
        <p className="subtitle">Ideamos, diseñamos y desarrollamos productos que generan valor colectivo.</p>
        <div className="buttons">
          {/* <button className="btn services-btn">NUESTROS SERVICIOS</button>
          <button className="btn contact-btn">CONTACTENOS</button> */}
        </div>
      </div>

      <div className="services-section">
                <div className="service-item">
                    <h2>Desarrollo Web</h2>
                    <ul>
                    <li><i className="fas fa-file-alt"></i> Páginas web</li>
                        <li><i className="fas fa-shopping-cart"></i> E-commerce</li>
                        <li><i className="fas fa-newspaper"></i> Blogs y revistas digitales</li>
                    </ul>
                </div>
                <div className="service-item innovation">
                    <h2>Innovación como servicio</h2>
                    <ul>
                    <li><i className="fas fa-cogs"></i> Ideación de Productos</li>
                        <li><i className="fas fa-magic"></i> Prototipos con Design Sprint</li>
                        <li><i className="fas fa-rocket"></i> Desarrollo del MVP</li>
                    </ul>
                </div>
            </div>
            
           </div> 
        <Fotter/>
    </div>
  )
}
