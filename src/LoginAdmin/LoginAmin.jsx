import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Imagen from '../assets/imagenes/1.jpg';
import ImagenProfile from '../assets/images/logo3.jpg';
import './LoginAdmin.css';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import Header from '../Header';

const auth = getAuth(appFirebase);

const Login = () => {
  
  const navigate = useNavigate(); // Inicializa useNavigate
  const [captchaValido, cambiarCaptchaValido] = useState(false);
  const [registrando, setRegistrando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(''); // Estado para mostrar mensajes
  const [error, setError] = useState(''); // Estado para mostrar errores
  const recaptha = useRef(null);

  const onChange = () => {
    if (recaptha.current.getValue()) {
      cambiarCaptchaValido(true);
      console.log("Captcha validado");
    } else {
      cambiarCaptchaValido(false);
    }
  };

  const functAutenticacion = async (e) => {
    e.preventDefault();
    setMensajeExito(''); // Limpiar mensajes anteriores
    setError(''); // Limpiar errores anteriores
    const correo = e.target.email.value;
    const constraseña = e.target.password.value;

    // Verificar que el captcha sea válido antes de proceder
    if (!captchaValido) {
      setError("Por favor, completa el captcha antes de continuar.");
      return;
    }

    if (registrando) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, correo, constraseña);
        // Enviar correo de verificación, pero NO autenticamos automáticamente al usuario
        await sendEmailVerification(userCredential.user);
        
        // Cerrar sesión del usuario tras el registro para evitar que Firebase lo inicie automáticamente
        await signOut(auth);
        
        // Mostrar un mensaje de éxito sin redirigir o recargar la página
        setMensajeExito("Registro exitoso. Se ha enviado un correo de verificación.");

        // Limpiar los campos del formulario
        e.target.email.value = '';
        e.target.password.value = '';

      } catch (error) {
        setError("Asegúrate de que la contraseña tenga más de 8 caracteres o revisa el correo.");
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, correo, constraseña);
        
        // Recargar la información del usuario sin redirigir
        await userCredential.user.reload();

        // Verificar si el correo electrónico está verificado
        if (userCredential.user.emailVerified) {
          setMensajeExito("Inicio de sesión exitoso");
        } else {
          // Cerrar sesión si el correo no está verificado
          await signOut(auth);
          setError("Por favor, verifica tu correo electrónico antes de iniciar sesión.");
        }
      } catch (error) {
        setError("El correo o la contraseña son incorrectas.");
      }
    }
  };

  return (
    <div className='Login-Admin-container'>  
      <div className="col-md-4">
        <div className="padre">
          <div className="card card-body shadow-lg">
            
            {/* Botón para regresar a la página principal, ubicado en la esquina superior izquierda */}
            <button 
              className='btn-back' 
              onClick={() => navigate('/')}
            >
              ← Inicio
            </button>

            <img src={ImagenProfile} alt="" className='estilo-profile'/>
            <form onSubmit={functAutenticacion}>
              <input type="text" placeholder='Ingresar Email' className='cajatexto' id='email'/>
              <input type="password" placeholder='Ingresar Contraseña' className='cajatexto' id='password'/>
              <div className='recaptha'> 
                <ReCAPTCHA
                  ref={recaptha}
                  sitekey="6LeLNVUqAAAAAMBwBqSou7UclqdGe925Pd5mW_91"
                  onChange={onChange}
                />
              </div>
              <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
            </form>
            
            {mensajeExito && <p style={{ color: 'green' }}>{mensajeExito}</p>} {/* Mostrar mensaje de éxito */}
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mostrar mensaje de error */}

            <h4 className='texto'>{registrando ? " Si ya tienes cuenta " : " No tienes cuenta "}
              <button className='btnswich' onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia Sesion" : "Registrate"}</button>
            </h4>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
