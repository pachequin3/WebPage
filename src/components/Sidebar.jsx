import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaCogs, FaFileAlt, FaCaretDown } from 'react-icons/fa';
import '../styles/Sidebar.css';
import CerrarSesionButton from '../LoginAdmin/CerrarSesionButton ';
import { getAuth } from 'firebase/auth';

function Sidebar() {
  const [isProveedoresOpen, setProveedoresOpen] = useState(false);
  const auth = getAuth();
  return (
    
    <aside className="sidebar">
      <div className="logo">
        <h1>Navegación Principal</h1>
      </div>
      <nav>
        <ul>
          <li className="menu-item">
          <NavLink to="proveedores" className="menu-header">
      <div className="menu-title">
        <FaUsers /> PROVEEDORES
      </div>
    </NavLink>
          </li>
          <li>
            <NavLink to="/admin/servicios">
              <FaCogs /> SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/contratacion_Servicios">
              <FaCogs /> CONTRATACIÓN DE SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/aceptacion_servicios">
              <FaCogs /> ACEPTACIÓN DE SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/informes">
              <FaFileAlt /> INFORMES Y REPORTES
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;


