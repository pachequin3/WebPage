import React from 'react'
import './PageServices.css'
import './readmore'
import imagen from './assets/images/imagen1.png'
import imagen1 from './assets/images/imagen2.png'
import imagen2 from './assets/images/imagen3.png'
import imagen3 from './assets/images/imagen4.png'
import imagen4 from './assets/images/imagen5.png'
import imagen5 from './assets/images/imagen6.png'
import imagen6 from './assets/images/imagen7.png'
import imagen7 from './assets/images/imagen8.png'
import imagen8 from './assets/images/imagen9.png'
import Header from './Header';
import Fotter from './Fotter';
const proyectosData = [
    {
      id: 1,
      nombre: 'Sistema de Gestión de Talleres Mecánicos (SGTM)',
      imagen: '/src/assets/images/proyecto1.jpg',
      enlace: 'https://proyecto1.com',
    },
    {
      id: 2,
      nombre: 'Plataforma de Comercio Electrónico para Partes y Servicios Mecánicos',
      imagen: '/src/assets/images/proyecto2.jpg',
      enlace: 'https://proyecto2.com',
    },
    {
      id: 3,
      nombre: 'Aplicación Móvil AutoSiste La Paz para la Coordinación en Tiempo Real de Servicios Mecánicos con Geolocalización Avanzada',
      imagen: '/src/assets/images/proyecto3.png',
      enlace: 'https://proyecto3.com',
    },
    // Añadir más proyectos
  ];
  
function PageServices() {
    const handleClick = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jaimefloresfernandez60@gmail.com', '_blank');
    };

  return (
    <div className='Container'> 
        <Header/>
        <section className="proyectos-section">
      {/* Texto adicional antes de los proyectos */}
      <div className="introduccion-servicios">
        <h2 className="subtitulo">¿Qué podemos ofrecer a tu negocio?</h2>
        <p className="descripcion">
          Primeramente mencionamos que la empresa Autoasiste Bolivia trabaja o abarca con la implementación de tecnología, 
          tanto en el área de servicios mecánicos y otros.
        </p>
        <h3 className="subtitulo">Nuestros Servicios</h3>
        <p className="descripcion">
          En AutoSisteBolivia, somos expertos en el desarrollo de soluciones informáticas, enfocados especialmente en servicios mecánicos. 
          Contamos con un equipo multidisciplinario con la experiencia necesaria para ayudar a nuestros clientes a alcanzar sus objetivos, 
          integrando tecnología de vanguardia en el área de servicios mecánicos y más.
        </p>
      </div>

      {/* Sección de Proyectos */}
      <h2 className="proyectos-title">Nuestros Proyectos</h2>
      <div className="proyectos-container">
        {proyectosData.map((proyecto) => (
          <div key={proyecto.id} className="proyecto-item">
            <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="proyecto-imagen" />
              <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
            </a>
          </div>
        ))}
      </div>
    </section>
        <Fotter/>
    
    </div>
    
     
    
  )
}

export default PageServices
