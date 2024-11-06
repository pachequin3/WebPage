import React from 'react'
import appFirebase from '../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import './Navbar2.css';
const auth = getAuth(appFirebase); // Obtienes la instancia de autenticación
function NavBar2() {
  
    const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      

      {/* Botón del menú hamburguesa para dispositivos móviles */}
      <div className="hamburger-menu" onClick={() => setIsMobile(!isMobile)}>
       
      </div>

      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
       
        <li>
          <button className='btn btn-primary' onClick={() => signOut(auth)}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
  
}

export default NavBar2