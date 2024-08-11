import React from 'react'
import './Home.css'
import Header from './Header';
import Fotter from './Fotter';
export default function Home() {
  return (
    
    <div className='ContainerMain'>
        <Header/>
        <div className='containerHomeMain'>
            <div>
            <h1>Transformamos Ideas en Soluciones Tecnológicas</h1>
            <p>En AutoAsiste ofrecemos una gama completa de servicios de desarrollo de software para ayudarte a alcanzar tus objetivos tecnológicos. Desde aplicaciones móviles hasta soluciones web, nuestro equipo está listo para transformar tus ideas en realidad.</p>
            </div>
        <img src="src/assets/imagenes/home.jpg" alt="" />

        </div>
        <div className='tituloValores'>
        <h1>Quiénes Somos</h1>
            <p>En Autosiste somos un equipo de apasionados desarrolladores y consultores tecnológicos comprometidos con la innovación y la excelencia. Nuestra misión es ofrecer soluciones que transformen y mejoren la forma en que las empresas operan</p>

        </div>
        <div className='ContainerValores'>
            <div className='numero1'><h2>1</h2></div>
            <div className='TextoContainerValores'>
            <h3>Tu Idea</h3>
            <p>Para que en AutoAsiste sepamos que somos una buena opción para su proyecto, siempre comenzamos con preguntas de selección para asegurarnos de que somos una buena opción para su empresa.</p>
            </div>
        </div>
        <div className='ContainerValores'>
            <div className='numero2'><h2>2</h2></div>
            <div className='TextoContainerValores'>
            <h3>Reunión de Estrategia</h3>
            <p>Esta reunión será una reunión en la que juntos repasaremos nuestra estrategia propuesta sobre cómo podemos alcanzar los objetivos de su sitio web. Aquí estableceremos un sistema de actualización del proyecto donde podrás seguir todo el proceso de principio a fin.</p>
            </div>
        </div>
        <div className='ContainerValores'>
            <div className='numero3'><h2>3</h2></div>
            <div className='TextoContainerValores'>
            <h3>Marco ágil y Scrum</h3>
            <p>En este paso tendremos una reunión de equipo con el director del proyecto y el desarrollador y diseñador principal. Luego trabajaremos utilizando un marco ágil y scrum para asegurarnos de entregar su proyecto a tiempo y dentro del presupuesto.</p>
            </div>
        </div>
        <div className='ContainerValores'>
            <div className='numero4'><h2>4</h2></div>
            <div className='TextoContainerValores'>
            <h3>Su sitio web se activa</h3>
            <p>Se realizarán las comprobaciones finales del sitio web, nos aseguraremos de que todos los píxeles de seguimiento, los enlaces y la interfaz de usuario sean compatibles con todos los diferentes dispositivos. También realizaremos algunas pruebas diferentes para asegurarnos de que el sitio web esté optimizado para la experiencia del usuario.</p>
            </div>
        </div>
        <div className='ContaneirTeam'>
            <div className='TextoTeam'>
                <h1>The Team</h1>
                <p>Los miembros de nuestro equipo tienen más de 15 años de experiencia en desarrollo web, SEO, contenido y diseño. Contamos con un amplio portafolio de trabajo con diferentes empresas y proyectos de varias partes del mundo.</p>
            </div>
            <div className='teamFotos'>
                <div className='fotoMiembro'>
                <img src="src/assets/imagenes/palta.jpg" alt="" />
                <h1>Carlos Pacheco</h1>
                <h2>Project Manager</h2>
                </div>
                <div className='fotoMiembro'>
                <img src="src/assets/imagenes/palta4.jpg" alt="" />
                <h1>Tatiana Suxo</h1>
                <h2>Project Manager</h2>
                </div>
                <div className='fotoMiembro'>
                <img src="src/assets/imagenes/palta33.jpg" alt="" />
                <h1>Jaime Flores</h1>
                <h2>Project Manager</h2>
                </div>
                <div className='fotoMiembro'>
                <img src="src/assets/imagenes/palta2.jpg" alt="" />
                <h1>Julio Huanco</h1>
                <h2>Project Manager</h2>
                </div>

            </div>

        </div>
        <Fotter/>
    </div>
  )
}
