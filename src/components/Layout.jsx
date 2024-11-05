import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Layout.css';

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>
          <Outlet />
        </main>
        <footer>
          <p>© 2024 AutoAsiste Bolivia. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;