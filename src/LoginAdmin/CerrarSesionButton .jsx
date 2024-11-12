import React from 'react';
import { signOut } from 'firebase/auth';
import './CerrarSesionButton.css';
const CerrarSesionButton = ({ auth }) => {
  return (
    <button className="btn btn-primary" onClick={() => signOut(auth)}>
      Cerrar Sesión
    </button>
  );
};

export default CerrarSesionButton;