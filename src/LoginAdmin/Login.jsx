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
  const [captchaValido, setCaptchaValido] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [error, setError] = useState('');
  const recaptha = useRef(null);

  // Captura el valor del CAPTCHA
  const onChange = () => {
    if (recaptha.current.getValue()) {
      setCaptchaValido(true);
    } else {
      setCaptchaValido(false);
    }
  };

  // Función de autenticación
  const functAutenticacion = async (e) => {
    e.preventDefault();
    setMensajeExito('');
    setError('');
    
    const correo = e.target.email.value.trim();
    const contraseña = e.target.password.value.trim();

    // Validar CAPTCHA
    if (!captchaValido) {
      setError("Por favor, completa el CAPTCHA antes de continuar.");
      return;
    }

    // Validar campos vacíos
    if (!correo || !contraseña) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      // Autenticar al usuario con Firebase
      const userCredential = await signInWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;

      // Verificar si el usuario está activo (opcional)
      if (!user.emailVerified) {
        setError("Por favor, verifica tu correo electrónico antes de iniciar sesión.");
        return;
      }

      // Redirigir al usuario según su rol (puedes implementar roles en Firestore)
      setMensajeExito("Inicio de sesión exitoso.");
      navigate('/admin'); // Redirige al dashboard o página correspondiente
    } catch (error) {
      console.error("Error en la autenticación:", error);
      // Manejo detallado de errores
      switch (error.code) {
        case 'auth/user-not-found':
          setError("El correo no está registrado.");
          break;
        case 'auth/wrong-password':
          setError("Contraseña incorrecta.");
          break;
        case 'auth/too-many-requests':
          setError("Demasiados intentos fallidos. Intenta de nuevo más tarde.");
          break;
        default:
          setError("Error al iniciar sesión. Intenta de nuevo.");
          break;
      }
    }
  };

  return (
    <div className="Login-Admin-container">
      <Header />
      
      <div className="col-md-4">
        <div className="padre">
          <div className="card card-body shadow-lg">
            <img src={ImagenProfile} alt="Logo de perfil" className="estilo-profile" />
            <h2 className="mensaje-bienvenida">Hola, bienvenido</h2>
            <form onSubmit={functAutenticacion}>
              <input 
                type="text" 
                placeholder="Ingresar Email" 
                className="cajatexto" 
                id="email" 
                name="email" // Asegúrate de incluir el atributo `name`
              />
              <input 
                type="password" 
                placeholder="Ingresar Contraseña" 
                className="cajatexto" 
                id="password" 
                name="password" // Asegúrate de incluir el atributo `name`
              />
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
      
      <Fotter />
    </div>
  );
};

export default Login;
