import React, { useState, useEffect } from 'react';
import { obtenerPagos } from './pagosService';

const PagosAdmin = () => {
  const [pagos, setPagos] = useState([]);
  const [estadoFiltro, setEstadoFiltro] = useState(''); // Estado seleccionado para filtrar

  useEffect(() => {
    const cargarPagos = async () => {
      try {
        const pagosData = await obtenerPagos(); // Llama al servicio que combina Pago y Petición
        setPagos(pagosData);
      } catch (error) {
        console.error('Error al cargar los pagos:', error);
      }
    };

    cargarPagos();
  }, []);

  // Función para convertir un Timestamp de Firebase a una fecha legible
  const formatearFecha = (fecha) => {
    if (!fecha) return 'Fecha no disponible'; // Si la fecha no existe
    if (fecha.seconds) {
      // Si es un Timestamp (objeto con seconds y nanoseconds)
      return new Date(fecha.seconds * 1000).toLocaleString();
    }
    return fecha; // Si ya es un string, lo retorna directamente
  };

  // Filtrar los pagos según el estado seleccionado
  const pagosFiltrados = pagos.filter((pago) =>
    estadoFiltro ? pago.estado === estadoFiltro : true
  );

  return (
    <div>
      <h1>Pagos Recibidos</h1>
      {/* Selector para filtrar por estado */}
      <div>
        <label htmlFor="estado">Filtrar por estado:</label>
        <select
          id="estado"
          value={estadoFiltro}
          onChange={(e) => setEstadoFiltro(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="Pendiente">Pendiente</option>
          <option value="En proceso">En proceso</option>
          <option value="Pagado">Pagado</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID Solicitud</th>
            <th>Usuario</th>
            <th>Proveedor</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Correo Proveedor</th>
            <th>Servicio</th>
          </tr>
        </thead>
        <tbody>
          {pagosFiltrados.map((pago) => (
            <tr key={pago.id}>
              <td>{pago.idSolicitud}</td>
              <td>{pago.usuario}</td>
              <td>{pago.proveedor}</td>
              <td>Bs{pago.precio}</td>
              <td>{formatearFecha(pago.fecha)}</td>
              <td>{pago.estado}</td> {/* Mostrar el estado de Petición */}
              <td>{pago.correoProveedor}</td> {/* Mostrar correo del proveedor */}
              <td>{pago.servicio}</td> {/* Mostrar el servicio */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PagosAdmin;
