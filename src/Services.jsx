import React, { useState } from "react";
import { FaTools, FaCar, FaBolt, FaTruckPickup } from "react-icons/fa"; // Iconos
import "./Services.css";

export default function Services() {
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

  const [vistaActual, setVistaActual] = useState("principal");
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(null);
  const [nuevoServicio, setNuevoServicio] = useState({
    negocio: "",
    propietario: "",
    imagen: null,
    servicios: [],
    estado: "Libre",
  });
  const [nuevoServicioTemp, setNuevoServicioTemp] = useState({ nombre: "", precio: "" });

  const seleccionarFamilia = (familia) => {
    setServicioSeleccionado(familia);
    setVistaActual("detalle");
  };

  const agregarServicioTemp = () => {
    if (nuevoServicioTemp.nombre && nuevoServicioTemp.precio) {
      setNuevoServicio({
        ...nuevoServicio,
        servicios: [...nuevoServicio.servicios, nuevoServicioTemp],
      });
      setNuevoServicioTemp({ nombre: "", precio: "" });
    } else {
      alert("Por favor completa el nombre y precio del servicio.");
    }
  };

  const guardarServicio = () => {
    if (!nuevoServicio.negocio || !nuevoServicio.propietario) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const actualizado = { ...servicioSeleccionado };
    actualizado.tipos.push(nuevoServicio);

    setServicios((prev) =>
      prev.map((servicio) =>
        servicio.id === actualizado.id ? actualizado : servicio
      )
    );

    alert("¡Servicio registrado exitosamente!");
    setNuevoServicio({
      negocio: "",
      propietario: "",
      imagen: null,
      servicios: [],
      estado: "Libre",
    });
    setVistaActual("detalle");
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

  const eliminarFormulario = () => {
    setNuevoServicio({
      negocio: "",
      propietario: "",
      imagen: null,
      servicios: [],
      estado: "Libre",
    });
    setVistaActual("detalle");
  };

  return (
    <div className="contenedor-servicios">
      <h1>Nuestros Servicios</h1>
      <p>Asistencia vehicular especializada en llantería, mecánica, electricista y grúas.</p>

      {vistaActual === "principal" && (
        <div className="tarjetas-servicios">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="tarjeta-servicio">
              <div className="icono-servicio">{servicio.icono}</div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
              <button
                className="btn-solicitar"
                onClick={() => seleccionarFamilia(servicio)}
              >
                Solicitar Servicio
              </button>
            </div>
          ))}
        </div>
      )}

      {vistaActual === "detalle" && (
        <div className="vista-detalle">
          <h2>{servicioSeleccionado.titulo}</h2>
          <button
            className="btn-agregar"
            onClick={() => setVistaActual("registro")}
          >
            Agregar Servicio
          </button>
          <div className="tarjetas-listar">
            {servicioSeleccionado.tipos.map((tipo, index) => (
              <div key={index} className="tarjeta-lista">
                <div
                  className={`estado-indicador ${
                    tipo.estado === "Libre" ? "verde" : "rojo"
                  }`}
                ></div>
                <div className="menu-opciones">
                  <span
                    className="menu-icono"
                    onClick={() =>
                      menuAbierto === index
                        ? setMenuAbierto(null)
                        : setMenuAbierto(index)
                    }
                  >
                    ⋮
                  </span>
                  {menuAbierto === index && (
                    <div className="menu-secundario">
                      <button onClick={() => editarServicio(index)}>✏ Editar</button>
                      <button onClick={() => eliminarServicio(index)}>🗑 Eliminar</button>
                    </div>
                  )}
                </div>
                <h3>{tipo.negocio}</h3>
                {tipo.imagen && (
                  <img src={tipo.imagen} alt={tipo.negocio} className="imagen-lista" />
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
          <button
            className="btn-volver"
            onClick={() => setVistaActual("principal")}
          >
            Volver
          </button>
        </div>
      )}

      {vistaActual === "registro" && (
        <div className="formulario-registro">
          <h2>Registrar Servicio</h2>
          <input
            type="text"
            placeholder="Nombre del negocio"
            value={nuevoServicio.negocio}
            onChange={(e) =>
              setNuevoServicio({ ...nuevoServicio, negocio: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Nombre del propietario"
            value={nuevoServicio.propietario}
            onChange={(e) =>
              setNuevoServicio({
                ...nuevoServicio,
                propietario: e.target.value,
              })
            }
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setNuevoServicio({
                ...nuevoServicio,
                imagen: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
          <div className="agregar-servicio">
            <input
              type="text"
              placeholder="Nombre del servicio"
              value={nuevoServicioTemp.nombre}
              onChange={(e) =>
                setNuevoServicioTemp({ ...nuevoServicioTemp, nombre: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Precio"
              value={nuevoServicioTemp.precio}
              onChange={(e) =>
                setNuevoServicioTemp({ ...nuevoServicioTemp, precio: e.target.value })
              }
            />
            <button onClick={agregarServicioTemp}>Agregar</button>
          </div>
          <ul>
            {nuevoServicio.servicios.map((servicio, index) => (
              <li key={index}>
                {servicio.nombre} - ${servicio.precio}
              </li>
            ))}
          </ul>
          <button className="btn-guardar" onClick={() => guardarServicio()}>
            Agregar Servicio
          </button>
          <button className="btn-cancelar" onClick={() => eliminarFormulario()}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
