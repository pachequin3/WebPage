import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../styles/EditarProveedor.css';
import { db } from '../services/proveedorService';
import { doc, updateDoc } from 'firebase/firestore';

function EditarProveedor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); // Obtenemos el ID desde la URL
  const proveedorData = location.state?.proveedor; // Datos pasados desde la página anterior

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
    confirmPassword: '', // Campo para confirmar contraseña
    estado: 'activo', // Estado por defecto
    rol: 'Proveedores', // Rol fijo
  });

  useEffect(() => {
    if (proveedorData) {
      setFormData(proveedorData); // Si existen datos, los cargamos en el formulario
    } else {
      navigate('/admin/proveedores'); // Si no hay datos, redirigir a la lista de proveedores
    }
  }, [proveedorData, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }

    try {
      const proveedorRef = doc(db, 'proveedores', id);

      // Actualizar el documento en Firestore con los datos editados
      await updateDoc(proveedorRef, formData);

      // Mensaje de éxito
      alert('Proveedor actualizado correctamente.');
      navigate('/admin/proveedores'); // Redirigir a la lista de proveedores
    } catch (error) {
      console.error('Error al actualizar proveedor:', error);
      alert('Hubo un error al actualizar el proveedor.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="editar-proveedor">
      <h2>Editar Proveedor</h2>
      <p>ID del Proveedor: {id}</p>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información General</h3>
          <div className="form-group">
            <label htmlFor="nombreEmpresa">Nombre de la Empresa</label>
            <input
              type="text"
              id="nombreEmpresa"
              name="nombreEmpresa"
              value={formData.nombreEmpresa}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipoServicio">Tipo de Servicio</label>
            <select
              id="tipoServicio"
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
            <label htmlFor="descripcionServicio">Descripción del Servicio</label>
            <input
              type="text"
              id="descripcionServicio"
              name="descripcionServicio"
              value={formData.descripcionServicio}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="horarioAtencion">Horario de Atención</label>
            <input
              type="text"
              id="horarioAtencion"
              name="horarioAtencion"
              value={formData.horarioAtencion}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Información de Contacto</h3>
          <div className="form-group">
            <label htmlFor="nombreProveedor">Nombre del Proveedor</label>
            <input
              type="text"
              id="nombreProveedor"
              name="nombreProveedor"
              value={formData.nombreProveedor}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="celular">Celular</label>
            <input
              type="tel"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="btn-actualizar">
            Guardar Cambios
          </button>
          <button
            type="button"
            className="btn-cancelar"
            onClick={() => navigate('/admin/proveedores')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarProveedor;
