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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6553182959336!2d-79.38534968467091!3d43.65348107912162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d55d364145%3A0x4c1c74a7a44eebf8!2sToronto%20City%20Hall!5e0!3m2!1sen!2sca!4v1609459250135!5m2!1sen!2sca"
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

export default Contactanos;