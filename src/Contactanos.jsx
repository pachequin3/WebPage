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
     <div className="contact-container">
      <div className="contact-info">
        <h2>Datos de Contacto</h2>
        <h3>Oficina en LA PAZ</h3>
        <p><strong>Dirección:</strong> San Miguel calle 21 #68 alado del edificio Monroy y Velez</p>
        <p><strong>Teléfono:</strong> +1 (238) 456 7894</p>
        <p><strong>Correo Electrónico:</strong></p>
        <p>Autoasistebolivia@gmail.com</p>
        <p>soporte@autoasistelapaz.com</p>
        <button className="appointment-btn">Obtener Cita</button>
      </div>
      <div className="map-container">
        <h3>Ubicación</h3>
        <div className="iframe-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.85165794732!2d-68.07846030413181!3d-16.542614485302348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f21131fdcbe63%3A0x7efd00803d883f20!2sEdif.%20Monroy%20y%20V%C3%A9lez!5e0!3m2!1ses-419!2sbo!4v1731470270841!5m2!1ses-419!2sbo"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
            
           <Fotter/>
        </div>
    );
}

export default Contactanos;
