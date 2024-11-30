import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../styles/EditarProveedor.css';
import { db } from '../services/proveedorService'; // Cambia proveedorService si tienes otro archivo
import { doc, updateDoc } from 'firebase/firestore';

function EditarUsuario() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams(); // Obtenemos el ID desde la URL
  const usuarioData = location.state?.usuario; // Datos pasados desde la página anterior

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '', // Campo adicional para apellido
    celular: '',
    email: '',
  });

  useEffect(() => {
    if (usuarioData) {
      setFormData(usuarioData); // Cargamos los datos del usuario
    } else {
      // Si no hay datos, redirigir a la lista de usuarios
      navigate('/admin/usuarios');
    }
  }, [usuarioData, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Referencia al usuario en Firestore
      const usuarioRef = doc(db, 'Usuario', id);

      // Actualizamos el documento en Firestore
      await updateDoc(usuarioRef, formData);

      // Mensaje de éxito
      alert('Usuario actualizado correctamente');
      navigate('/admin/usuarios'); // Redirigimos a la lista de usuarios
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      alert('Hubo un error al actualizar el usuario');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="editar-proveedor"> {/* Usamos la clase de estilos de EditarProveedor */}
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h3>Información de Contacto</h3>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido</label> {/* Campo adicional */}
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
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
            onClick={() => navigate('/admin/usuarios')}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarUsuario;
