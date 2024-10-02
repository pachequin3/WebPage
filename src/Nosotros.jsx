import imagen from './assets/images/1.jpeg'
import image from './assets/images/2.jpeg'
import React from 'react';
import './Nosotros.css';
import Header from './Header';
import Fotter from './Fotter';
function Nosotros() {
  return (
    
    <div className='contenedor_p'>
     <Header/>
     <div className="container">
        {/* Contenido principal */}
        <section className="intro">
          <h1>AutoAsiste Bolivia</h1>
          <p>En AutoAsiste Bolivia, nos apasiona la tecnología y desarrollamos soluciones digitales innovadoras, nuestro equipo de desarrolladores crean aplicaciones que mejoran la eficiencia y la experiencia del usuario, adaptándose a las necesidades del mercado actual.</p>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <h2>Nuestra Misión</h2>
            <p>
            Desarrollar soluciones tecnológicas innovadoras que aborden las necesidades de los clientes en servicios mecánicos y software, incluyendo juegos y aplicaciones especializadas, con un compromiso a la calidad y el éxito comercial.
            </p>
          </div>
          <div className="vision">
            <h2>Nuestra Visión</h2>
            <p>
            Ser líderes en desarrollo de software en Bolivia, destacados por nuestra innovación y calidad en soluciones tecnológicas integrales, centrándonos en la transformación digital de servicios mecánicos y el entretenimiento digital.
            </p>
          </div>
        </section>

        <section className="quienes-somos">
          <h2>Quiénes Somos</h2>
          <div className="steps">
            <div className="step">
              <i className="fas fa-lightbulb"></i>
              <h3>Tu Idea</h3>
              <p>Para que en AutoAsiste sepamos que somos una buena opción para su proyecto, siempre comenzamos con preguntas de selección para asegurarnos de que somos una buena opción para su empresa.</p>
            </div>
            <div className="step">
              <i className="fas fa-users"></i>
              <h3>Reunión de Estrategia</h3>
              <p>Esta reunión será una reunión en la que juntos repasaremos nuestra estrategia propuesta sobre cómo podemos alcanzar los objetivos de su sitio web. Aquí estableceremos un sistema de actualización del proyecto donde podrás seguir todo el proceso de principio a fin.</p>
            </div>
            <div className="step">
              <i className="fas fa-sitemap"></i>
              <h3>Marco ágil y Scrum</h3>
              <p>En este paso tendremos una reunión de equipo con el director del proyecto y el desarrollador y diseñador principal. Luego trabajaremos utilizando un marco ágil y scrum para aseguramos de entregar su proyecto a tiempo y dentro del presupuesto.</p>
            </div>
            <div className="step">
              <i className="fas fa-desktop"></i>
              <h3>Su sitio web se activa</h3>
              <p>Se realizarán las comprobaciones finales del sitio web, nos aseguraremos de que todos los píxeles de seguimiento, los enlaces y la interfaz de usuario sean compatibles con todos los diferentes dispositivos. </p>
            </div>
          </div>
        </section>

        <section className="experts">
          <h2>Nuestros Expertos</h2>
          <div className="expert-list">
            <div className="expert">
              <img src="/src/assets/images/Pacheco.jpeg" alt="Carlos Miguel" />
              <h3>Carlos Miguel Pacheco Sanchez</h3>
              <p>Analista</p>
            </div>
            <div className="expert">
              <img src="/src/assets/images/Cesarin.jpeg" alt="Julio Cesar" />
              <h3>Julio Cesar Huanco Yujra</h3>
              <p>Diseñador</p>
            </div>
            <div className="expert">
              <img src="/src/assets/images/jaime.jpeg" alt="Jaime Antonio" />
              <h3>Jaime Antonio Flores Fernandez</h3>
              <p>Programador</p>
            </div>
            <div className="expert">
              <img src="/src/assets/images/tati.png" alt="Tatiana Karina" />
              <h3>Tatiana Karina Suxo Suxo</h3>
              <p>Programadora</p>
            </div>
          </div>
        </section>
      </div>
    <Fotter/>
    </div>
  );
}

export default Nosotros;
