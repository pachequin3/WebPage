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
                <li>Lunes - Sábado 8:00 - 17:00,</li>
                <li>Domingo - CERRADO</li>
            </ul>
        </div>
        <div className="footer-column">
            <h4>Oficina en La Paz</h4>
            <p>San Miguel calle 21, alado del edificio Monroy y Velez</p>
            <p>2-7348650</p>
            <p>2-2 723729</p>
            <p>Autoasistelapaz@gmail.com</p>
            <p>soporteautoasiste@gmail.com</p>
        </div>
        <div className="footer-column">
            <h4>Oficina en Santa Cruz</h4>
            <p>Segundo anillo, cerca de la av. la Guardia</p>
            <p>2-2756323</p>
            <p>2-2 723729</p>
            <p>Autoasistelapaz@gmail.com</p>
            <p>soporteautoasiste@gmail.com</p>
        </div>
        <div className="footer-column">
            <h4>Nuestras ubicaciones</h4>
            <ul>
                <li>United States</li>
                <li>Australia</li>
                <li>Canada</li>
                <li>Europe</li>
            </ul>
        </div>
    </div>
    <div className="footer-bottom">
        <p>Copyright © 2024 Autoasiste</p>
        <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
    </div>
</footer>
  )
}
