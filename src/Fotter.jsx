import React from 'react'
import './Fottter.css'
export default function Fotter() {
    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <h4>Quienes somos</h4>
              <ul>
                <li>Nuestros servicios</li>
                <li>Proyectos</li>
                <li>Lunes - Sábado 8:00 - 17:00</li>
                <li>Domingo - CERRADO</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Oficina en La Paz</h4>
              <p>San Miguel, calle 21, al lado del edificio Monroy y Velez</p>
              <p>Tel: 2-7348650 / 2-2 723729</p>
              <p>Email: Autoasistelapaz@gmail.com</p>
              <p>Email: soporteautoasiste@gmail.com</p>
            </div>
            <div className="footer-column">
              <h4>Oficina en Santa Cruz</h4>
              <p>Segundo anillo, cerca de la av. la Guardia</p>
              <p>Tel: 2-2756323 / 2-2 723729</p>
              <p>Email: Autoasistelapaz@gmail.com</p>
              <p>Email: soporteautoasiste@gmail.com</p>
            </div>
            <div className="footer-column">
              <h4>Nuestras ubicaciones</h4>
              <ul>
                <li>El Alto</li>
                <li>Miraflores</li>
                <li>Irpavi</li>
                <li>Achumani</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Autoasiste. Todos los derechos reservados.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </footer>
     );
 }