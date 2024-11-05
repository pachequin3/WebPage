import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../credenciales';
import { signOut } from 'firebase/auth';
import '../styles/Layout.css';

function Layout() {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || user.email);
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">AutoAsiste</div>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/proveedores">Proveedores</Link></li>
            <li><Link to="/registrar-proveedor">Registrar Proveedor</Link></li>
            <li><Link to="/cambiar-contrasena">Cambiar Contraseña</Link></li>
          </ul>
        </nav>
        <div className="user-info">
          <span>{userName}</span>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;