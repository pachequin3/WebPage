import React from 'react';
import ContactLinks from './componentsCont/ContactLinks';
import ContactInfo from './componentsCont/ContactInfo';
import ContactForm from './componentsCont/ContactForm';
import './Contactanos.css';
import Header from './Header';
import Fotter from './Fotter';
function Contactanos() {
    return (
        <div className='Contactanos'>
            <Header/>
           <div className='Titulot'> 
              <h1>CONÉCTATE CON NOSOTROS PARA SOLUCIONES INNOVADORAS</h1>
            </div> 
            <div className='contenedorContacto'>
                <div className='contenedorInformacion'>
                    <ContactLinks/>
                </div>
                <div className='contenedorFormulario'>
                    <ContactForm/>
                    <ContactInfo />
                </div>
                
            </div>
            
           <Fotter/>
        </div>
    );
}

export default Contactanos;