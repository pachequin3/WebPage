import React, { useState } from 'react'
import appFirebase from '../credenciales'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
const auth=getAuth(appFirebase)
import Login from './Login'
import HomeLogin from './HomeLogin'
const AppLogin = () => {
    const[usuario,setUsuario]=useState(null)
    onAuthStateChanged(auth,(usuarioFirebase)=>{
        if(usuarioFirebase){
            setUsuario(usuarioFirebase)
        }
        else
        {
            setUsuario(null)
        }
    })
  return (
    <div>
        {usuario ? <HomeLogin  correoUsuario ={usuario.email}/>:<Login/>}
    </div>
  )
}

export default AppLogin