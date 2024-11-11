import React from 'react';
import { Outlet } from 'react-router-dom'; // Para renderizar el componente dinámico
import Sidebar from './Sidebar'; // Importa el Sidebar
import Header from './Header'; // Importa el Header
import '../styles/Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Sidebar /> {/* Sidebar de navegación */}
      <div className="main-content">
        <Header /> {/* Header o encabezado */}
        <main>
          <Outlet /> {/* Renderizado del componente según la ruta */}
        </main>
        <footer>
          <p>© 2024 AutoAsiste Bolivia. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
