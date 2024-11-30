import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';
import ImagenProfile from '../assets/images/logo.png'; // Asegúrate de que esta ruta sea correcta
import './LoginAdmin.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Header from '../Header';
import Fotter from '../Fotter';
const auth = getAuth();

const Login = () => {
  const navigate = useNavigate();
  const [captchaValido, cambiarCaptchaValido] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [error, setError] = useState('');
  const recaptha = useRef(null);

  const onChange = () => {
    if (recaptha.current.getValue()) {
      cambiarCaptchaValido(true);
    } else {
      cambiarCaptchaValido(false);
    }
  };

  const functAutenticacion = async (e) => {
    e.preventDefault();
    setMensajeExito('');
    setError('');
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (!captchaValido) {
      setError("Por favor, completa el captcha antes de continuar.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
      await userCredential.user.reload();

      setMensajeExito("Inicio de sesión exitoso");
      navigate('/admin'); // Redirige al dashboard correspondiente
    } catch (error) {
      setError("El correo o la contraseña son incorrectos.");
    }
  };

  return (
    <div className="Login-Admin-container">
      
      <Header/>
      
      <div className="col-md-4">
        <div className="padre">
          <div className="card card-body shadow-lg">
            <img src={ImagenProfile} alt="Logo de perfil" className="estilo-profile" />
            <h2 className="mensaje-bienvenida">Hola, bienvenido</h2>
            <form onSubmit={functAutenticacion}>
              <input type="text" placeholder="Ingresar Email" className="cajatexto" id="email" />
              <input type="password" placeholder="Ingresar Contraseña" className="cajatexto" id="password" />
              <div className="recaptcha-container"> 
                <ReCAPTCHA
                  ref={recaptha}
                  sitekey="6LeLNVUqAAAAAMBwBqSou7UclqdGe925Pd5mW_91"
                  onChange={onChange}
                />
              </div>
              <button className="btnform">Inicia Sesión</button>
            </form>
            {mensajeExito && <p style={{ color: 'green' }}>{mensajeExito}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
      </div>
      
      <Fotter/>
      
    </div>
  );
};

export default Login;
