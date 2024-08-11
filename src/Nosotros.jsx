import imagen from './assets/images/1.jpeg'
import image from './assets/images/2.jpeg'
import React from 'react';
import './Nosotros.css';

function Nosotros() {
  return (
    <div>
     

      <section id="inicio" className="hero-section">
        <h1 className="hero-title">Auto asiste Bolivia</h1>
        <p className="hero-subtitle">Tu solución confiable en el mercado.</p>
      </section>

      <section id="nosotros" className="content-section">
        <h2>Nosotros</h2>
        <p>En AutoAsiste Bolivia, somos apasionados por la tecnología y el desarrollo de soluciones
           digitales que marcan la diferencia, nos especializamos en la creación de aplicaciones y software innovador que impulsa la eficiencia y mejora la experiencia del usuario, nuestro equipo, conformado por desarrolladores y creativos talentosos, se dedica a diseñar productos que se adaptan a las necesidades del mercado actual, ya sean aplicaciones móviles, juegos interactivos o sistemas personalizados.</p>
      </section>

      <div className="mission-vision-container">
        <section id="mision" className="content-section mission-section">
          <div className="text-container">
            <h2>Nuestra Misión</h2>
            <p>Desarrollar soluciones tecnológicas innovadoras que respondan a las necesidades
               de nuestros clientes, tanto en el área de servicios mecánicos como en otras áreas 
               de software, incluyendo el desarrollo de juegos y aplicaciones especializadas.
                Nos comprometemos a ofrecer productos de alta calidad que mejoren la eficiencia,
                 la experiencia del usuario y el éxito comercial de nuestros clientes.</p>
          </div>
          <div className="image-placeholder">[<img src={imagen} alt=""/>]</div>
        </section>

        <section id="vision" className="content-section vision-section">
          <div className="image-placeholder">[<img src={image} alt=""/>]</div>
          <div className="text-container">
            <h2>Nuestra Visión</h2>
            <p>Convertirnos en una empresa líder en desarrollo de software en Bolivia,
               reconocida por nuestra capacidad de innovación y calidad en la creación
                de soluciones tecnológicas integrales para diversas industrias, 
                con un enfoque especial en la transformación digital de servicios 
                mecánicos y el desarrollo de entretenimiento digital.</p>
          </div>
        </section>
      </div>

      <section id="Valores" className="content-section">
      <div>
      <h2>Valores</h2>
      <div className="valores-container">
      <div className="valor">Innovación</div>
      <div className="valor">Calidad</div>
      <div className="valor">Flexibilidad</div>
      <div className="valor">Integridad</div>
      <div className="valor">Etica</div>
      <div className="valor">Compromiso con el Cliente</div>
      <div className="valor">Responsabilidad Social</div>
      <div className="valor">Moral</div>
      <div className="valor">Lealtad</div>
    </div>
    </div>
      </section>

    </div>
  );
}

export default Nosotros;
