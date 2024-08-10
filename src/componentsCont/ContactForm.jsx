import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado');
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: '',
      message: '',
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Formulario de contacto</h2>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Celular:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="reason">Motivo:</label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar motivo</option>
          <option value="consulta">Consulta</option>
          <option value="soporte">Soporte</option>
          <option value="sugerencia">Sugerencia</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Detalle del Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="buttons">
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default ContactForm;