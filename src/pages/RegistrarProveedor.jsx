import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProveedor } from '../services/proveedorService';
import '../styles/RegistrarProveedor.css';

function RegistrarProveedor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    tipoServicio: '',
    descripcionServicio: '',
    direccion: '',
    horarioAtencion: '',
    nombreProveedor: '',
    celular: '',
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProveedor(formData);
      alert('Proveedor registrado correctamente');
      navigate('/proveedores');
    } catch (error) {
      console.error('Error:', error);
      alert('Error al registrar proveedor');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="registrar-proveedor">
      <h2>Registrar Nuevo Proveedor</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="form-group">
            <label>Nombre de la Empresa</label>
            <input
              type="text"
              name="nombreEmpresa"
              value={formData.nombreEmpresa}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Tipo de Servicio</label>
            <select
              name="tipoServicio"
              value={formData.tipoServicio}
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
              name="descripcionServicio"
              value={formData.descripcionServicio}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Horario de Atención</label>
            <input
              type="text"
              name="horarioAtencion"
              value={formData.horarioAtencion}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Información de Contacto</h3>
          <div className="form-group">
            <label>Nombre del Proveedor</label>
            <input
              type="text"
              name="nombreProveedor"
              value={formData.nombreProveedor}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Celular</label>
            <input
              type="tel"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn-registrar">
          Registrar Proveedor
        </button>
      </form>
    </div>
  );
}

export default RegistrarProveedor;