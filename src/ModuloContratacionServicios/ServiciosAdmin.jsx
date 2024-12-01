import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore'; // Firestore
import { getAuth } from 'firebase/auth'; // Firebase Auth
import { db } from './firebaseFirestoreConfig'; // Configuración de Firestore
import './ServiciosAdmin.css';

const ServiciosAdmin = () => {
  const [solicitudes, setSolicitudes] = useState([]); // Estado para almacenar solicitudes
  const auth = getAuth(); // Obtenemos la instancia de autenticación
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para obtener solicitudes filtradas por correoProveedor
  const obtenerSolicitudes = async () => {
    try {
      setLoading(true); // Activar loading
      const user = auth.currentUser; // Usuario actualmente logueado
      if (!user) {
        throw new Error('No hay un usuario logueado.');
      }

      // Consulta para filtrar solicitudes basadas en el campo 'correoProveedor'
      const peticionesRef = collection(db, 'Peticion'); // Colección 'Peticion'
      const consulta = query(peticionesRef, where('correoProveedor', '==', user.email)); // Filtrar por correoProveedor
      const querySnapshot = await getDocs(consulta);

      // Transformar datos a un arreglo
      const solicitudesFiltradas = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSolicitudes(solicitudesFiltradas); // Actualizar el estado
      setLoading(false); // Desactivar loading
    } catch (error) {
      console.error('Error al obtener las solicitudes: ', error);
      setError(error.message);
      setLoading(false); // Desactivar loading
    }
  };

  // Función para actualizar el estado de una solicitud
  const actualizarEstado = async (id, nuevoEstado) => {
    try {
      const solicitudRef = doc(db, 'Peticion', id); // Referencia al documento en Firestore
      await updateDoc(solicitudRef, { estado: nuevoEstado }); // Actualizar el campo estado
      setSolicitudes((prevSolicitudes) =>
        prevSolicitudes.map((solicitud) =>
          solicitud.id === id ? { ...solicitud, estado: nuevoEstado } : solicitud
        )
      );
      alert(`El estado de la solicitud se ha cambiado a "${nuevoEstado}".`);
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
      alert('Hubo un error al cambiar el estado de la solicitud.');
    }
  };

  // Cargar solicitudes al montar el componente
  useEffect(() => {
    obtenerSolicitudes();
  }, []);

  const generarEnlaceMaps = (latitud, longitud) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${latitud},${longitud}`;
  };

  if (loading) {
    return <p>Cargando solicitudes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Solicitudes de Servicio</h1>
      {solicitudes.length === 0 ? (
        <p>No hay solicitudes para este proveedor.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Servicio</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Ubicación</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((solicitud) => (
              <tr key={solicitud.id}>
                <td>{solicitud.usuario}</td>
                <td>{solicitud.servicio}</td>
                <td>{solicitud.cantidad}</td>
                <td>{solicitud.precio ? `Bs${solicitud.precio}` : 'Sin precio'}</td>
                <td>
                  {solicitud.ubicacion && solicitud.ubicacion.latitud && solicitud.ubicacion.longitud ? (
                    <a
                      href={generarEnlaceMaps(solicitud.ubicacion.latitud, solicitud.ubicacion.longitud)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Google Maps
                    </a>
                  ) : (
                    'Sin ubicación'
                  )}
                </td>
                <td>{solicitud.estado}</td>
                <td>
                  {/* Botones para cambiar el estado */}
                  {solicitud.estado === 'Pendiente' && (
                    <>
                      <button onClick={() => actualizarEstado(solicitud.id, 'En progreso')}>
                        Aceptar
                      </button>
                      <button onClick={() => actualizarEstado(solicitud.id, 'Cancelado')}>
                        Cancelar
                      </button>
                    </>
                  )}
                  {solicitud.estado === 'En progreso' && (
                    <button onClick={() => actualizarEstado(solicitud.id, 'Completado')}>
                      Marcar como Completado
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServiciosAdmin;
