import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore'; // Importar Firestore
import { db } from './firebaseFirestoreConfig'; // Importamos la configuración de Firestore
import './ServiciosAdmin.css';

const ServiciosAdmin = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  const obtenerSolicitudes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Peticion')); 
      const serviciosData = querySnapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data() 
      }));

      
      const eliminadas = JSON.parse(localStorage.getItem('solicitudesEliminadas')) || [];

      
      const solicitudesFiltradas = serviciosData.filter(solicitud => !eliminadas.includes(solicitud.id));

      setSolicitudes(solicitudesFiltradas); 
    } catch (error) {
      console.error('Error al obtener las peticiones: ', error);
    }
  };

  
  useEffect(() => {
    obtenerSolicitudes();
  }, []);

  
  const actualizarEstado = async (id, nuevoEstado) => {
    try {
      const docRef = doc(db, 'Peticion', id); 
      await updateDoc(docRef, { estado: nuevoEstado }); 
      
      setSolicitudes(solicitudes.map(solicitud =>
        solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
      ));
    } catch (error) {
      console.error('Error al actualizar el estado: ', error);
    }
  };

  
  const eliminarSolicitud = async (id) => {
    try {
      await actualizarEstado(id, 'Cancelado'); 

    
      let eliminadas = JSON.parse(localStorage.getItem('solicitudesEliminadas')) || [];
      eliminadas.push(id);
      localStorage.setItem('solicitudesEliminadas', JSON.stringify(eliminadas));

      
      setSolicitudes(solicitudes.filter(solicitud => solicitud.id !== id));
    } catch (error) {
      console.error('Error al eliminar la solicitud: ', error);
    }
  };

  const generarEnlaceMaps = (latitud, longitud) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${latitud},${longitud}`;
  };

  return (
    <div>
      <h1>Gestión de Solicitudes de Servicio</h1>
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Proveedor</th>
            <th>Servicio</th>
            <th>Cantidad</th>
            <th>Precio</th> {/* Nueva columna para Precio */}
            <th>Ubicación</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.id}>
              <td>{solicitud.usuario}</td>
              <td>{solicitud.proveedor}</td>
              <td>{solicitud.servicio}</td>
              <td>{solicitud.cantidad}</td>
              <td>{solicitud.precio ? `Bs${solicitud.precio}` : 'Sin precio'}</td> {/* Mostrar el precio o "Sin precio" */}
              <td>
                {/* Verificamos si existen las coordenadas antes de generar el enlace */}
                {solicitud.ubicacion && solicitud.ubicacion.latitud && solicitud.ubicacion.longitud ? (
                  <a
                    href={generarEnlaceMaps(solicitud.ubicacion.latitud, solicitud.ubicacion.longitud)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button" // Aplicamos la clase button
                  >
                    Ver en Google Maps
                  </a>
                ) : (
                  "Sin ubicación"
                )}
              </td>
              <td>{solicitud.estado}</td>
              <td>
                {/* Mostrar las acciones basadas en el estado de la solicitud */}
                {solicitud.estado === 'Pendiente' ? (
                  <>
                    <button onClick={() => actualizarEstado(solicitud.id, 'En progreso')}>Aceptar</button>
                    <button onClick={() => eliminarSolicitud(solicitud.id)}>Eliminar</button>
                  </>
                ) : solicitud.estado === 'En progreso' ? (
                  <>
                    <button onClick={() => actualizarEstado(solicitud.id, 'Completado')}>Completado</button>
                  </>
                ) : solicitud.estado === 'Cancelado' || solicitud.estado === 'Completado' ? (
                  <>
                    {/* No se realizan acciones si está Cancelado o Completado */}
                  </>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Botón opcional para restaurar las solicitudes eliminadas */}
      <button onClick={() => {
        localStorage.removeItem('solicitudesEliminadas');
        obtenerSolicitudes(); // Recargar las solicitudes desde Firestore
      }}>
        Restaurar solicitudes eliminadas
      </button>
    </div>
  );
};

export default ServiciosAdmin;
