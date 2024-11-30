import React, { useState } from 'react';
import '../styles/RegistrarProveedor.css';
import { db } from '../services/proveedorService'; // Configuración de Firestore
import { collection, addDoc } from 'firebase/firestore';
import emailjs from 'emailjs-com'; // Para enviar correos electrónicos
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
      // Generar un ID único (opcional) y agregarlo a los datos
      const proveedorData = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9), // Generar un ID único
      };

      // Guardar los datos del proveedor en Firestore
      const proveedorRef = collection(db, 'proveedores');
      await addDoc(proveedorRef, proveedorData);

      // Enviar correo electrónico con las credenciales al proveedor
      enviarCorreo(proveedorData);

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

      alert('Proveedor registrado con éxito. Se ha enviado un correo con las credenciales.');
      navigate('/admin/proveedores'); // Redirigir a la lista de proveedores
    } catch (error) {
      console.error('Error al registrar proveedor:', error);
      alert('Error al registrar proveedor, por favor intente nuevamente');
    }
  };

  const enviarCorreo = (datosProveedor) => {
    const { email, nombreProveedor, password } = datosProveedor;

    // Configuración de parámetros para EmailJS
    const templateParams = {
      to_email: email, // Correo del proveedor
      to_name: nombreProveedor, // Nombre del proveedor
      message: `Hola ${nombreProveedor}, tu cuenta ha sido creada con éxito. Tus credenciales son:
                Email: ${email}
                Contraseña: ${password}
                Por favor, cambia tu contraseña después de iniciar sesión.`,
    };

    emailjs
      .send(
        'service_s84dwco', // SERVICE_ID obtenido de EmailJS
        'template_npsxkeo', // TEMPLATE_ID de tu plantilla
        templateParams,    // Parámetros dinámicos para la plantilla
        'uEXmVs0Eg5Oyely83' // PUBLIC_KEY obtenido de EmailJS
      )
      .then(
        (response) => {
          console.log('Correo enviado exitosamente:', response.status, response.text);
        },
        (error) => {
          console.error('Error al enviar el correo:', error);
        }
      );
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
            onClick={() => navigate('/admin/proveedores')} // Redirige a la página de lista de proveedores
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrarProveedor;
