import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaCogs, FaFileAlt, FaCaretDown } from 'react-icons/fa';
import '../styles/Sidebar.css';
import CerrarSesionButton from '../LoginAdmin/CerrarSesionButton ';


function Sidebar() {
  const [isProveedoresOpen, setProveedoresOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="logo">
        <h1>Navegación Principal</h1>
      </div>
      <nav>
        <ul>
          <li className="menu-item">
            <div 
              className="menu-header"
              onClick={() => setProveedoresOpen(!isProveedoresOpen)}
            >
              <div className="menu-title">
                <FaUsers /> PROVEEDORES
              </div>
              <FaCaretDown className={`caret ${isProveedoresOpen ? 'open' : ''}`} />
            </div>
            {isProveedoresOpen && (
              <ul className="submenu">
                <li>
                  <NavLink to="/admin/proveedores">Inicio</NavLink> {/* Ajuste de ruta */}
                </li>
                <li>
                  <NavLink to="/admin/registrar-proveedor">Registrar Proveedor</NavLink> {/* Ajuste de ruta */}
                </li>
              </ul>
            )}
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
          <CerrarSesionButton/>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
