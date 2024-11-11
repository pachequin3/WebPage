import React, { useState } from 'react';
import '../styles/RegistrarProveedor.css';
import { db } from '../services/proveedorService'; // Asegúrate de que este archivo tenga la configuración correcta
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate, useLocation } from 'react-router-dom';

function RegistrarProveedor() {
  const navigate = useNavigate();
  const location = useLocation();
  const proveedorData = location.state?.proveedor;  // Datos pasados desde la página anterior

  const [formData, setFormData] = useState({
    nombreEmpresa: '',
    tipoServicio: '',
    descripcionServicio: '',
    direccion: '',
    horarioAtencion: '',
    nombreProveedor: '',
    celular: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si las contraseñas coinciden
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      // Aquí se agrega el nuevo proveedor a Firestore
      const proveedorRef = collection(db, 'proveedores');
      await addDoc(proveedorRef, {
        nombreEmpresa: formData.nombreEmpresa,
        tipoServicio: formData.tipoServicio,
        descripcionServicio: formData.descripcionServicio,
        direccion: formData.direccion,
        horarioAtencion: formData.horarioAtencion,
        nombreProveedor: formData.nombreProveedor,
        celular: formData.celular,
        email: formData.email,
        password: formData.password, // Es importante encriptar la contraseña antes de almacenarla en producción
      });

      // Resetea el formulario después de registrar el proveedor
      setFormData({
        nombreEmpresa: '',
        tipoServicio: '',
        descripcionServicio: '',
        direccion: '',
        horarioAtencion: '',
        nombreProveedor: '',
        celular: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      alert('Proveedor registrado con éxito');
    } catch (error) {
      console.error('Error al registrar proveedor:', error);
      alert('Error al registrar proveedor, por favor intente nuevamente');
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
            />
          </div>
          
          <div className="form-group">
            <label>Tipo de Servicio</label>
            <select
              name="tipoServicio"
              value={formData.tipoServicio}
              onChange={handleChange}
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
            />
          </div>

          <div className="form-group">
            <label>Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Horario de Atención</label>
            <input
              type="text"
              name="horarioAtencion"
              value={formData.horarioAtencion}
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
              name="nombreProveedor"
              value={formData.nombreProveedor}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Celular</label>
            <input
              type="tel"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="btn-registrar">
          Registrar Proveedor
        </button>
        <button 
            type="button" 
            className="btn-cancelar"
            onClick={() => navigate('/admin/proveedores')}  // Redirige a la página de lista de proveedores
          >
            Cancelar
          </button>
      </form>
    </div>
  );
}

export default RegistrarProveedor;
