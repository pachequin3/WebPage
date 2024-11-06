import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Importar Firestore
import { db } from './firebaseFirestoreConfig'; // Importamos la configuración de Firestore
import './ServiciosAdmin.css';

const AdminView = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [busqueda, setBusqueda] = useState(""); // Estado para la búsqueda
  const [solicitudesFiltradas, setSolicitudesFiltradas] = useState([]);

  // Función para obtener los datos desde Firestore
  const obtenerSolicitudes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Peticion')); // Colección "Peticion"
      const serviciosData = querySnapshot.docs.map(doc => ({
        id: doc.id, // ID del documento en Firestore
        ...doc.data() // Obtenemos los datos del documento
      }));

      // Filtrar las solicitudes que tienen estado "En progreso", "Completado" o "Cancelado"
      const solicitudesAsignadas = serviciosData.filter(
        solicitud => solicitud.estado === 'En progreso' || 
                     solicitud.estado === 'Completado' || 
                     solicitud.estado === 'Cancelado'
      );

      setSolicitudes(solicitudesAsignadas); // Guardamos los datos en el estado local
      setSolicitudesFiltradas(solicitudesAsignadas); // Inicialmente, las filtradas son todas
    } catch (error) {
      console.error('Error al obtener las peticiones: ', error);
    }
  };

  // Cargar las solicitudes desde Firestore cuando el componente se monta
  useEffect(() => {
    obtenerSolicitudes();
  }, []);

  // Función para manejar la búsqueda por nombre de usuario o proveedor
  const manejarBusqueda = (evento) => {
    const valorBusqueda = evento.target.value.toLowerCase();
    setBusqueda(valorBusqueda);

    // Filtrar solicitudes por nombre de usuario o proveedor
    const solicitudesFiltradas = solicitudes.filter(solicitud =>
      solicitud.usuario.toLowerCase().includes(valorBusqueda) || 
      solicitud.proveedor.toLowerCase().includes(valorBusqueda)
    );
    setSolicitudesFiltradas(solicitudesFiltradas);
  };

  return (
    <div>
      <h1>Vista del Administrador - Solicitudes </h1>

      {/* Input para buscar por nombre de usuario o proveedor */}
      <input
        type="text"
        placeholder="Buscar por usuario o proveedor"
        value={busqueda}
        onChange={manejarBusqueda}
        className="input-busqueda"
      />

      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Proveedor</th>
            <th>Servicio</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Ubicación</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {solicitudesFiltradas.map((solicitud) => (
            <tr key={solicitud.id}>
              <td>{solicitud.usuario}</td>
              <td>{solicitud.proveedor}</td>
              <td>{solicitud.servicio}</td>
              <td>{solicitud.cantidad}</td>
              <td>{solicitud.precio ? `Bs${solicitud.precio}` : 'Sin precio'}</td>
              <td>
                {/* Verificamos si existen las coordenadas antes de generar el enlace */}
                {solicitud.ubicacion && solicitud.ubicacion.latitud && solicitud.ubicacion.longitud ? (
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${solicitud.ubicacion.latitud},${solicitud.ubicacion.longitud}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Ver en Google Maps
                  </a>
                ) : (
                  "Sin ubicación"
                )}
              </td>
              <td>{solicitud.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminView;
