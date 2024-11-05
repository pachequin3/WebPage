import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CambiarContrasena.css';

function CambiarContrasena() {
  const navigate = useNavigate();
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de cambio de contraseña:', passwordData);
    // Aquí iría la lógica para cambiar la contraseña
    alert('Contraseña actualizada correctamente');
    navigate('/');
  };

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="cambiar-contrasena">
      <div className="form-container">
        <h2>Actualizar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="currentPassword">Contraseña Actual</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">Nueva Contraseña</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-enviar">
              Enviar
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
    </div>
  );
}

export default CambiarContrasena;