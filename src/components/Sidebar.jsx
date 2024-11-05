import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaCogs, FaFileAlt, FaCaretDown } from 'react-icons/fa';
import '../styles/Sidebar.css';

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
                  <NavLink to="/proveedores">Inicio</NavLink>
                </li>
                <li>
                  <NavLink to="/registrar-proveedor">Registrar Proveedor</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/servicios">
              <FaCogs /> SERVICIOS
            </NavLink>
          </li>
          <li>
            <NavLink to="/informes">
              <FaFileAlt /> INFORMES Y REPORTES
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;