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
function PageServices() {
    const handleClick = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=jaimefloresfernandez60@gmail.com', '_blank');
    };

  return (
    <div className='Container'> 
        <Header/>
        <div className='textcontainer'>
            <h1>Qué podemos ofrecer a tu negocio.</h1>
            <p>Primeramente mencionamos que la empresa AutoSiste Bolicia trabaja o abarca con la implementacion de tecnologia, tanto en el area de servicios mecanicos y otros</p>
        </div>
        <div className='Containercenter'>
            <div className='subcontainer'>
                <div className='textsubcontainer'>
                    <h1>Nuestros Servicios </h1>
                    <p>En AutoSisteBolivia, somos expertos en el desarrollo de soluciones informáticas, enfocados especialmente en servicios mecánicos. Contamos con un equipo multidisciplinario con la experiencia necesaria para ayudar a nuestros clientes a alcanzar sus objetivos, integrando tecnología de vanguardia en el área de servicios mecánicos y más.</p>

                </div>
                <div className='containerservices'>
                    <div className='services'>
                     <img src={imagen} alt=""/>
                     <h2>Diagnóstico Computarizado Avanzado</h2>
                     <p>
                     Utilizamos herramientas tecnológicas avanzadas para realizar diagnósticos precisos en vehículos. Nuestro sistema de diagnóstico computarizado permite identificar problemas mecánicos y electrónicos con alta precisión, proporcionando informes detallados
                     <span class="more-text">que facilitan la reparación y el mantenimiento. Esto asegura que cualquier fallo potencial sea detectado antes de que cause mayores inconvenientes, optimizando el rendimiento y la durabilidad de los vehículos.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>
                     


                    </div>

                    <div className='services'>
                     <img src={imagen1} alt=""/>
                     <h2>Mantenimiento Preventivo Inteligente</h2>
                     <p>
                     Nuestro servicio de mantenimiento preventivo inteligente emplea tecnologías automatizadas para monitorear el estado de los vehículos en tiempo real. A través de sensores y análisis predictivos, programamos y ejecutamos mantenimientos 
                     <span class="more-text">regulares que previenen fallos inesperados y maximizan la vida útil de los vehículos. Este enfoque proactivo no solo mejora la fiabilidad, sino que también reduce los costos asociados con reparaciones emergentes.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>
                     


                    </div>

                    <div className='services'>
                     <img src={imagen2} alt=""/>
                     <h2>Asistencia Técnica y Reparación en Línea</h2>
                     <p>
                     Ofrecemos soporte técnico remoto para resolver problemas mecánicos y electrónicos sin que el vehículo tenga que ser trasladado a un taller. Nuestro equipo de técnicos altamente capacitados utiliza herramientas de diagnóstico en línea para analizar
                     <span class="more-text">y solucionar problemas en tiempo real, brindando asesoramiento y soluciones inmediatas. Esta modalidad permite una respuesta rápida y eficiente, minimizando el tiempo de inactividad y los costos para los propietarios de vehículos.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>
                     
                    </div>
                </div>
                <div className='containerservices'>
                    <div className='services'>
                     <img src={imagen3} alt=""/>
                     <h2>Desarrollo de Videojuegos</h2>
                     <p>
                     Creamos videojuegos personalizados desde la concepción del concepto hasta el lanzamiento final. Nuestro equipo de desarrollo se especializa en la creación de experiencias interactivas únicas, utilizando tecnologías de vanguardia y gráficos de alta calidad. 
                     <span class="more-text">Nos encargamos de cada etapa del proceso, incluyendo diseño, programación, pruebas y publicación, para asegurar que el producto final cumpla con las expectativas y ofrezca una experiencia envolvente y entretenida.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>

                    </div>
                    <div className='services'>
                     <img src={imagen4} alt=""/>
                     <h2>Desarrollo de Aplicaciones Móviles</h2>
                     <p>
                     Diseñamos y desarrollamos aplicaciones móviles innovadoras adaptadas a las necesidades específicas de diferentes industrias. Nuestro enfoque se centra en la usabilidad, el rendimiento y la integración con servicios existentes. 
                     <span class="more-text">Desde aplicaciones para mejorar la eficiencia operativa hasta soluciones para la interacción con clientes, nuestro objetivo es ofrecer aplicaciones móviles que se destaquen en funcionalidad y experiencia de usuario, impulsando el crecimiento y la competitividad de los negocios.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>
                    </div>
                    <div className='services'>
                     <img src={imagen5} alt=""/>
                     <h2>Desarrollo de Software a Medida</h2>
                     <p>
                     Ofrecemos soluciones de software personalizadas que se ajustan a las necesidades específicas de cada negocio. Ya sea que necesites un sistema para automatizar procesos internos, gestionar recursos o mejorar la comunicación, nuestro equipo 
                     <span class="more-text">desarrolla software a medida que optimiza tus operaciones y mejora la eficiencia. Trabajamos estrechamente contigo para entender tus requisitos y crear una solución que se adapte perfectamente a tus objetivos empresariales.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>
                    </div>
                </div>
                <div className='containerservices'>
                    <div className='services'>
                     <img src={imagen6} alt=""/>
                     <h2>Desarrollo de Plataformas de E-commerce</h2>
                     <p>
                     Construimos plataformas de comercio electrónico seguras y escalables que facilitan la venta de productos y servicios en línea. Desde la creación de tiendas virtuales hasta la integración de sistemas de pago y gestión de inventario, nuestras soluciones
                     <span class="more-text">están diseñadas para ofrecer una experiencia de compra fluida y segura. Implementamos características avanzadas que optimizan la conversión y mejoran la satisfacción del cliente, ayudando a los negocios a expandir su alcance y aumentar sus ventas.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>

                    </div>
                    <div className='services'>
                     <img src={imagen7} alt=""/>
                     <h2>Consultoría en Transformación Digital</h2>
                     <p>
                     Asesoramos a las empresas en su proceso de transformación digital, integrando tecnología avanzada para mejorar sus operaciones
                     <span class="more-text">Nuestro enfoque integral asegura que cada aspecto de la transformación se alinee con tus objetivos empresariales y genere un impacto positivo en tu organización.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>
                    </div>
                    <div className='services'>
                     <img src={imagen8} alt=""/>
                     <h2>Desarrollo de Soluciones IoT</h2>
                     <p>
                     Implementamos soluciones de Internet de las Cosas (IoT) para conectar y monitorear dispositivos, proporcionando datos en tiempo real que optimizan la toma de decisiones. Desde sistemas de gestión de activos hasta plataformas de monitoreo 
                     <span class="more-text">nuestras soluciones IoT permiten a las empresas obtener información valiosa sobre sus operaciones y dispositivos. Esto facilita la automatización de procesos, mejora la eficiencia y ayuda a prevenir problemas antes de que ocurran.</span>
                     <button class="read-more-btn">Leer más <span class="icon">▼</span></button>
                     </p>
                    </div>
                </div>



            </div>

        </div>
        <div className='containerwork'>
            <div className='textwork'>
                <h1>¿Interesado en trabajar con nosotros?</h1>
                <p>Envíe una su solicitud de proyecto, este al pendiente.</p>
                <div className='botoncontainer'>
                <button className="email-button" onClick={handleClick}>Envíame un Correo</button>
                </div>

            </div>

        </div>

        <Fotter/>
    
    </div>
    
     
    
  )
}

export default PageServices
