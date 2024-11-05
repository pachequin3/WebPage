import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../styles/EditarProveedor.css';

function EditarProveedor() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const proveedorData = location.state?.proveedor;

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

  useEffect(() => {
    if (proveedorData) {
      setFormData(proveedorData);
    } else {
      // Si no hay datos, redirigir a la lista
      navigate('/');
    }
  }, [proveedorData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos actualizados:', formData);
    // Aquí iría la lógica para actualizar los datos del proveedor
    // Por ahora solo simulamos la actualización
    alert('Proveedor actualizado correctamente');
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
        </div>

        <div className="button-group">
          <button type="submit" className="btn-actualizar">
            Actualizar
          </button>
          <button 
            type="button" 
            className="btn-cancelar"
            onClick={() => navigate('/')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarProveedor;