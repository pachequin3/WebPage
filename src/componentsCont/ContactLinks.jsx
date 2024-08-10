import React from 'react';
import './ContactLinks.css';

// Datos de contactos
const contacts = [
  { name: 'Jaime Flores', role: 'Gerente de Ventas', email: 'jaimefloresfernandez60@gmail.com', phone: '+591 123 456 789' }, // Nacional
  { name: 'Tatiana Suxo', role: 'Directora de Marketing', email: 'tsuxo24@gmail.com', phone: '+591 987 654 321' }, // Internacional
  { name: 'Carlos Pacheco', role: 'Desarrollador Web', email: 'cpacheco@gmail.com', phone: '+591 111 222 333' },
  { name: 'Julio Huanco', role: 'Asistente Administrativo', email: 'juliocesarhuancos@gmail.com', phone: '+591 444 555 666' }
];

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <div className="emails">
        <h3>Correos Electrónicos</h3>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <div className="contact-info">
                <div className="contact-details">
                  <p className="contact-name">{contact.name}</p>
                  <p className="contact-role">{contact.role}</p>
                </div>
                <a href={'mailto:${contact.email}'}>
                  <img src="/images/iconoEmail.png" alt="Email Icon" className="icon" /> {contact.email}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="phones">
        <h3>Números de Celular</h3>
        <ul>
          <li className="phone-item">
            <a href={`tel:+591123456789`}>
              <img src="/images/iconoTelefono.png" alt="Phone Icon" className="icon" /> +591 123 456 789 (Nacional)
            </a>
          </li>
          <li className="phone-item">
            <a href={`tel:+591987654321`}>
              <img src="/images/iconoTelefono.png" alt="Phone Icon" className="icon" /> +591 987 654 321 (Internacional)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactLinks;