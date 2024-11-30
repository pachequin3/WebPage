import React, { useState } from "react";
import { FaTools, FaCar, FaBolt, FaTruckPickup } from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const [autenticado, setAutenticado] = useState(true); // Por defecto, se asume autenticado
  const [esAdministrador, setEsAdministrador] = useState(true); // Por defecto, es administrador
  const [servicios, setServicios] = useState([
    {
      id: "llanteria",
      titulo: "Servicios de Llantería",
      descripcion: "Cambio de llantas, reparación de pinchazos, balanceo.",
      icono: <FaTools />,
      tipos: [],
    },
    {
      id: "mecanico",
      titulo: "Servicios de Mecánica",
      descripcion: "Reparación de motor, cambio de aceite, revisiones.",
      icono: <FaCar />,
      tipos: [],
    },
    {
      id: "electricista",
      titulo: "Servicios Electricistas",
      descripcion: "Reparación de sistemas eléctricos, cambio de baterías.",
      icono: <FaBolt />,
      tipos: [],
    },
    {
      id: "grua",
      titulo: "Servicios de Grúas",
      descripcion: "Remolque a taller, asistencia en carretera.",
      icono: <FaTruckPickup />,
      tipos: [],
    },
  ]);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(null);

  const cerrarSesion = () => {
    setAutenticado(false);
    setEsAdministrador(false);
  };

  const editarServicio = (index) => {
    const servicioActual = servicioSeleccionado.tipos[index];
    const nuevoNegocio = prompt("Nuevo nombre del negocio:", servicioActual.negocio);
    const nuevoPropietario = prompt("Nuevo propietario:", servicioActual.propietario);
    const nuevoEstado = prompt("Nuevo estado (Libre / Ocupado):", servicioActual.estado);

    if (nuevoNegocio && nuevoPropietario && nuevoEstado) {
      const actualizado = { ...servicioSeleccionado };
      actualizado.tipos[index] = {
        ...actualizado.tipos[index],
        negocio: nuevoNegocio,
        propietario: nuevoPropietario,
        estado: nuevoEstado,
      };

      setServicios((prev) =>
        prev.map((servicio) =>
          servicio.id === actualizado.id ? actualizado : servicio
        )
      );

      alert("¡Servicio actualizado con éxito!");
      setMenuAbierto(null);
    }
  };

  const eliminarServicio = (index) => {
    const actualizado = { ...servicioSeleccionado };
    actualizado.tipos.splice(index, 1);

    setServicios((prev) =>
      prev.map((servicio) =>
        servicio.id === actualizado.id ? actualizado : servicio
      )
    );

    setMenuAbierto(null);
  };

  return (
    <div className="contenedor-servicios">
      {autenticado && esAdministrador && (
        <>
          <h1>Panel de Administrador</h1>
          <div className="botones-servicios">
            {servicios.map((servicio) => (
              <button
                key={servicio.id}
                className="btn-servicio-admin"
                onClick={() => setServicioSeleccionado(servicio)}
              >
                {servicio.titulo}
              </button>
            ))}
          </div>
          <div className="servicios-grid">
            {servicioSeleccionado?.tipos.map((tipo, index) => (
              <div key={index} className="tarjeta-servicio-admin">
                <h3>{tipo.negocio}</h3>
                {tipo.imagen && (
                  <img src={tipo.imagen} alt={tipo.negocio} className="imagen-servicio" />
                )}
                <p>Propietario: {tipo.propietario}</p>
                <ul>
                  {tipo.servicios.map((servicio, idx) => (
                    <li key={idx}>
                      {servicio.nombre} - ${servicio.precio}
                    </li>
                  ))}
                </ul>
                <p>Estado: {tipo.estado}</p>
              </div>
            ))}
          </div>
          <button className="btn-cerrar-sesion" onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </>
      )}
    </div>
  );
}
