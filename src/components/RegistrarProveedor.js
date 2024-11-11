// src/components/RegistrarProveedor.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProveedor } from '../proveedorService'; // Importa la función desde proveedorService.js
import '../styles/RegistrarProveedor.css';

function RegistrarProveedor() {
  const navigate = useNavigate();
  
  // Estado inicial para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    "nombre-empresa": '',
    "tipo-servicio": '',
    "descripcion-servicio": '',
    "Direccion": '',
    "horario-atencion": '',
    "Nombre": '',
    "Telefono": '',
    "Email": '',
    "contraseña": '',
    "confirmacion-contraseña": ''
  });

  // Estado para manejar errores de validación
  const [error, setError] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.contraseña !== formData["confirmacion-contraseña"]) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Opcional: Validar otros campos según tus necesidades

    try {
      // Preparar los datos para Firestore
      const proveedorData = {
        "nombre-empresa": formData["nombre-empresa"],
        "tipo-servicio": formData["tipo-servicio"],
        "descripcion-servicio": formData["descripcion-servicio"],
        "Direccion": formData["Direccion"],
        "horario-atencion": formData["horario-atencion"],
        "Nombre": formData["Nombre"],
        "Telefono": formData["Telefono"],
        "Email": formData["Email"],
        "contraseña": formData["contraseña"] // **Nota de Seguridad:**
        // Considera encriptar la contraseña antes de almacenarla o utilizar Firebase Authentication.
      };

      // Llamar a la función para agregar el proveedor
      const id = await addProveedor(proveedorData);
      console.log('Proveedor registrado con ID:', id);
      
      // Redirige a la lista de proveedores
      navigate('/proveedores');
    } catch (error) {
      console.error('Error al registrar proveedor:', error);
      setError('Hubo un error al registrar el proveedor. Por favor, intenta nuevamente.');
    }
  };

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Maneja la cancelación y redirige a otra página
  const handleCancel = () => {
    navigate('/proveedores'); // Redirige a la página de lista de proveedores
  };

  return (
    <div className="registrar-proveedor">
      <h2>Registrar Nuevo Proveedor</h2>
      
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          
          <div className="form-group">
            <label>Nombre de la Empresa</label>
            <input
              type="text"
              name="nombre-empresa"
              value={formData["nombre-empresa"]}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Tipo de Servicio</label>
            <select
              name="tipo-servicio"
              value={formData["tipo-servicio"]}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un tipo de servicio</option>
              <option value="mecanico">Mecánico</option>
              <option value="electricista">Electricista</option>
              <option value="llantera">Llantera</option>
              <option value="grua">Grúa</option>
            </select>
          </div>

          <div className="form-group">
            <label>Descripción del Servicio</label>
            <input
              type="text"
              name="descripcion-servicio"
              value={formData["descripcion-servicio"]}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Dirección</label>
            <input
              type="text"
              name="Direccion"
              value={formData.Direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Horario de Atención</label>
            <input
              type="text"
              name="horario-atencion"
              value={formData["horario-atencion"]}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Información de Contacto</h3>
          
          <div className="form-group">
            <label>Nombre del Proveedor</label>
            <input
              type="text"
              name="Nombre"
              value={formData.Nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="Telefono"
              value={formData.Telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmacion-contraseña"
              value={formData["confirmacion-contraseña"]}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-registrar">
            Registrar Proveedor
          </button>
          <button type="button" className="btn-cancelar" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrarProveedor;
