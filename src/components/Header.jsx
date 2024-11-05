import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCambiarContrasena = () => {
    setIsOpen(false);
    navigate('/cambiar-contrasena');
  };

  const handleCerrarSesion = () => {
    setIsOpen(false);
    // Aquí iría la lógica para cerrar sesión
    console.log('Cerrar sesión');
  };

  return (
    <header className="header">
      <div className="logo">AutoAsiste Bolivia</div>
      <div className="admin-info" ref={dropdownRef}>
        <span>ADMINISTRADOR</span>
        <button 
          className="user-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <svg className={`dropdown-icon ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <button onClick={handleCambiarContrasena}>
              Cambiar Contraseña
            </button>
            <button onClick={handleCerrarSesion}>
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;