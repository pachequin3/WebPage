import React, { useState } from 'react';
import '../styles/RegistrarProveedor.css';
import { db, auth } from '../services/proveedorService'; // Configuración de Firestore y Auth
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

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
    email: '',
    password: '', // Contraseña ingresada
    confirmPassword: '', // Confirmar Contraseña
    estado: 'activo', // Estado por defecto
    rol: 'Proveedores', // Rol fijo
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }

    try {
      // Paso 1: Guardar los datos en Firestore
      const proveedorData = {
        ...formData,
        estado: 'activo',
        rol: 'Proveedores',
      };

      const proveedorRef = collection(db, 'proveedores');
      const docRef = await addDoc(proveedorRef, proveedorData);

      // Paso 2: Crear el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Paso 3: Enviar el correo de verificación
      await sendEmailVerification(user, {
        url: `http://localhost:5173/verification-complete?email=${encodeURIComponent(formData.email)}&password=${encodeURIComponent(formData.password)}`, // URL personalizada
        handleCodeInApp: true,
      });

      alert('Proveedor registrado con éxito. Se ha enviado un correo de verificación.');

      // Resetear el formulario después de registrar
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
        confirmPassword: '',
        estado: 'activo',
        rol: 'Proveedores',
      });

      // Redirigir a la lista de proveedores
      navigate('/admin/proveedores');
    } catch (error) {
      console.error('Error al registrar proveedor:', error);
      alert('Error al registrar proveedor, por favor intente nuevamente');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="registrar-proveedor">
      <h2>Registrar Nuevo Proveedor</h2>

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
          <button type="submit" className="btn-registrar">
            Registrar Proveedor
          </button>
          <button
            type="button"
            className="btn-cancelar"
            onClick={() => navigate('/admin/proveedores')} // Redirige a la lista de proveedores
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrarProveedor;
