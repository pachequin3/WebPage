import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../services/proveedorService';

function Header() {
  const [role, setRole] = useState(''); // Estado para almacenar el rol del usuario
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const fetchRole = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          // Verificar en la colección de Administradores
          const adminQuery = query(
            collection(db, 'Administrador'),
            where('Email', '==', user.email)
          );
          const adminSnapshot = await getDocs(adminQuery);

          if (!adminSnapshot.empty) {
            setRole('Administrador');
            return;
          }

          // Si no es administrador, verificar en la colección de Proveedores
          const proveedorQuery = query(
            collection(db, 'proveedores'),
            where('email', '==', user.email)
          );
          const proveedorSnapshot = await getDocs(proveedorQuery);

          if (!proveedorSnapshot.empty) {
            setRole('Proveedor');
            return;
          }

          setRole(''); // Si no se encuentra rol, dejarlo vacío
        } catch (error) {
          console.error('Error al obtener el rol del usuario:', error);
        }
      } else {
        setRole('');
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchRole();
      } else {
        setRole('');
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    // Lógica para cerrar sesión
    localStorage.clear(); // Limpia cualquier dato en localStorage
    sessionStorage.clear(); // Limpia cualquier dato en sessionStorage
    auth.signOut(); // Cierra sesión en Firebase Authentication
    console.log('Cerrando sesión...');
    navigate('/LoginAdmin'); // Redirige al login
  };

  return (
    <header className="header">
      <div className="logo">AutoAsiste Bolivia</div>
      <div className="admin-info">
        {/* Mostrar el rol dinámicamente */}
        <span>{role ? role : 'Cargando...'}</span>
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

