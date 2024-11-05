import React, { useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import ImagenProfile from '../assets/images/logo.png';
import './LoginAdmin.css';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(appFirebase);

const LoginAmin = () => {
  const [captchaValido, cambiarCaptchaValido] = useState(false);
  const [registrando, setRegistrando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [error, setError] = useState('');
  const recaptha = useRef(null);
  const navigate = useNavigate();

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
    const constraseña = e.target.password.value;

    if (!captchaValido) {
      setError("Por favor, completa el captcha antes de continuar.");
      return;
    }

    if (registrando) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, correo, constraseña);
        await sendEmailVerification(userCredential.user);
        await signOut(auth);
        setMensajeExito("Registro exitoso. Se ha enviado un correo de verificación.");
        e.target.reset();
      } catch (error) {
        setError("Asegúrate de que la contraseña tenga más de 8 caracteres o revisa el correo.");
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, correo, constraseña);
        await userCredential.user.reload();

        if (userCredential.user.emailVerified) {
          setMensajeExito("Inicio de sesión exitoso");
          navigate('/'); // Redirige al dashboard después del login exitoso
        } else {
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
            
            {mensajeExito && <p style={{ color: 'green' }}>{mensajeExito}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
              <button className='btnswich' onClick={() => setRegistrando(!registrando)}>
                {registrando ? "Inicia Sesion" : "Registrate"}
              </button>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAmin;