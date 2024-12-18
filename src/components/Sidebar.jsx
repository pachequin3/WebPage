import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaCogs, FaFileAlt } from 'react-icons/fa';
import '../styles/Sidebar.css';
import logo from '../assets/images/logov.png'; // Ruta de tu logo
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../services/proveedorService';

function Sidebar() {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Verificar en la colección de Administradores
          const adminQuery = query(
            collection(db, 'Administrador'),
            where('Email', '==', user.email)
          );
          const adminSnapshot = await getDocs(adminQuery);

          if (!adminSnapshot.empty) {
            const adminData = adminSnapshot.docs[0].data();
            setUserRole(adminData.rol);
            setLoading(false);
            return;
          }

          // Si no es administrador, verificar en la colección de Proveedores
          const proveedorQuery = query(
            collection(db, 'proveedores'),
            where('email', '==', user.email)
          );
          const proveedorSnapshot = await getDocs(proveedorQuery);

          if (!proveedorSnapshot.empty) {
            const proveedorData = proveedorSnapshot.docs[0].data();
            setUserRole(proveedorData.rol);
          } else {
            console.error('No se encontró un rol para este usuario.');
          }
        } catch (error) {
          console.error('Error al obtener el rol del usuario:', error);
        }
      } else {
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <aside className="sidebar">
      <div className="logo">
        {/* Imagen del logo */}
        <img src={logo} alt="Logo AutoAsiste Bolivia" className="logo-image" />
      </div>
      <nav>
        <ul>
          {userRole === 'Administrador' && (
            <>
              {/* Menú para Administradores */}
              <li className="menu-item">
                <NavLink to="/admin/proveedores" className="menu-header">
                  <div className="menu-title">
                    <FaUsers /> PROVEEDORES
                  </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/admin/usuarios" className="menu-header">
                  <div className="menu-title">
                    <FaUsers /> USUARIOS
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contratacion_servicios">
                  <FaCogs /> CONTRATACIÓN DE SERVICIOS
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/pagos_admin">
                  <FaFileAlt /> Pagos 
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/informes">
                  <FaFileAlt /> INFORMES Y REPORTES
                </NavLink>
              </li>
            </>
          )}

          {userRole === 'Proveedores' && (
            <>
              {/* Menú para Proveedores */}
              <li className="menu-item">
                <NavLink to="/admin/usuariosp" className="menu-header">
                  <div className="menu-title">
                    <FaUsers /> USUARIOS
                  </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/admin/proveedoresp" className="menu-header">
                  <div className="menu-title">
                    <FaUsers /> PROVEEDORES
                  </div>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/admin/servicios" className="menu-header">
                  <div className="menu-title">
                    <FaCogs /> SERVICIOS
                  </div>
                </NavLink>
              </li>
           
              <li>
                <NavLink to="/admin/aceptacion_servicios">
                  <FaCogs /> ACEPTACIÓN DE SERVICIOS
                </NavLink>
              </li>
              
             
              
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
