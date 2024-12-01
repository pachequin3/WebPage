import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function VerificationComplete() {
  const query = new URLSearchParams(useLocation().search);
  const email = query.get('email');
  const password = query.get('password');
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/LoginAdmin'); // Redirige al componente de login
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>¡Correo Verificado!</h1>
      <p>Gracias por verificar tu correo.</p>
      <p>Tu usuario es: <strong>{email}</strong></p>
      <p>Tu contraseña es: <strong>{password}</strong></p>
      <p>Ahora puedes iniciar sesión en la aplicación.</p>
      <button 
        onClick={handleLoginRedirect} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Ir al Login
      </button>
    </div>
   
  );
}

export default VerificationComplete;
