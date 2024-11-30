import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [role, setRole] = useState(''); // Estado para almacenar el rol del usuario
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar el rol del usuario desde localStorage o sessionStorage
    const storedRole = localStorage.getItem('role') || 'Administrador'; // Rol por defecto: Administrador
    setRole(storedRole);
  }, []);

  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.clear(); // Limpia cualquier dato en localStorage
    sessionStorage.clear(); // Limpia cualquier dato en sessionStorage
    console.log('Cerrando sesión...');
    navigate('/LoginAdmin'); // Redirige al login
  };

  return (
    <header className="header">
      <div className="logo">AutoAsiste Bolivia</div>
      <div className="admin-info">
        {/* Mostrar el rol dinámicamente */}
        <span>{role}</span>
        <button 
          className="user-button"
          onClick={handleLogout} // Al hacer clic, cierra sesión y redirige
        >
          <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
