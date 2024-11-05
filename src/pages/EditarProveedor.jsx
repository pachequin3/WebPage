import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProveedorById, updateProveedor } from '../services/proveedorService';
import '../styles/EditarProveedor.css';

function EditarProveedor() {
  const navigate = useNavigate();
  const { id } = useParams();
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
    const fetchProveedor = async () => {
      try {
        const proveedor = await getProveedorById(id);
        setFormData(proveedor);
      } catch (error) {
        console.error("Error fetching proveedor:", error);
        alert("Error al cargar los datos del proveedor");
        navigate('/proveedores');
      }
    };

    fetchProveedor();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProveedor(id, formData);
      alert('Proveedor actualizado correctamente');
      navigate('/proveedores');
    } catch (error) {
      console.error('Error:', error);
      alert('Error al actualizar proveedor');
    }
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

        <div className="button-group">
          <button type="submit" className="btn-actualizar">
            Actualizar
          </button>
          <button 
            type="button" 
            className="btn-cancelar"
            onClick={() => navigate('/proveedores')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarProveedor;