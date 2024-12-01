import React, { useState, useEffect } from "react";
import { FaCar } from "react-icons/fa"; // Iconos
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"; // Autenticación
import { db, auth } from "./credenciales"; // Configuración de Firebase
import "./Services.css";

export default function Services() {
  const [serviciosRegistrados, setServiciosRegistrados] = useState([]);
  const [usuario, setUsuario] = useState(null); // Usuario autenticado
  const [vistaActual, setVistaActual] = useState("principal"); // Vista actual
  const [nuevoServicio, setNuevoServicio] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    tipoServicio: "mecanico", // Tipo de servicio predeterminado
  });
  const [editarServicio, setEditarServicio] = useState(null); // Servicio que se está editando

  useEffect(() => {
    // Obtenemos el usuario autenticado
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user);
        cargarServicios(user.email);
      } else {
        setUsuario(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const cargarServicios = async (email) => {
    try {
      const querySnapshot = await getDocs(collection(db, "Servicios"));
      const servicios = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((servicio) => servicio.email === email); // Filtrar servicios por el email del usuario
      setServiciosRegistrados(servicios);
    } catch (error) {
      console.error("Error al cargar servicios:", error);
    }
  };

  const agregarServicio = async () => {
    if (!nuevoServicio.nombre || !nuevoServicio.descripcion || !nuevoServicio.precio) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const servicio = {
      ...nuevoServicio,
      email: usuario.email, // Asocia el servicio al email del usuario
    };

    try {
      await addDoc(collection(db, "Servicios"), servicio);
      alert("¡Servicio agregado exitosamente!");
      cargarServicios(usuario.email);
      setNuevoServicio({ nombre: "", descripcion: "", precio: "", tipoServicio: "mecanico" });
      setVistaActual("gestionar");
    } catch (error) {
      console.error("Error al agregar servicio:", error);
    }
  };

  const guardarEdicion = async () => {
    if (!editarServicio.nombre || !editarServicio.descripcion || !editarServicio.precio) {
      alert("Por favor completa todos los campos.");
      return;
    }

    try {
      const servicioRef = doc(db, "Servicios", editarServicio.id);
      await updateDoc(servicioRef, editarServicio);
      alert("¡Servicio actualizado exitosamente!");
      cargarServicios(usuario.email);
      setEditarServicio(null);
      setVistaActual("gestionar");
    } catch (error) {
      console.error("Error al actualizar servicio:", error);
    }
  };

  const cancelarEdicion = () => {
    setEditarServicio(null);
    setVistaActual("gestionar");
  };

  return (
    <div className="contenedor-servicios">
      <h1>Servicios Disponibles</h1>
      {usuario && (
        <p>
          Bienvenido, <b>{usuario.displayName || usuario.email}</b>. Solo puedes agregar servicios relacionados con tu especialidad:{" "}
          <b>mecánico</b>.
        </p>
      )}

      {/* Vista principal */}
      {vistaActual === "principal" && (
        <div className="tarjetas-servicios">
          <div className="tarjeta-servicio">
            <div className="icono-servicio">
              <FaCar />
            </div>
            <h3>Servicios de Mecánica</h3>
            <p>Reparación de motor, cambio de aceite, revisiones.</p>
            <button className="btn-solicitar" onClick={() => setVistaActual("registro")}>
              Agregar Servicio
            </button>
            <button className="btn-gestionar" onClick={() => setVistaActual("gestionar")}>
              Gestionar Mis Servicios
            </button>
          </div>
        </div>
      )}

      {/* Vista de registro de un nuevo servicio */}
      {vistaActual === "registro" && (
        <div className="formulario-registro">
          <h2>Registrar Servicio</h2>
          <input
            type="text"
            placeholder="Nombre del servicio"
            value={nuevoServicio.nombre}
            onChange={(e) => setNuevoServicio({ ...nuevoServicio, nombre: e.target.value })}
          />
          <textarea
            placeholder="Descripción del servicio"
            value={nuevoServicio.descripcion}
            onChange={(e) => setNuevoServicio({ ...nuevoServicio, descripcion: e.target.value })}
          ></textarea>
          <input
            type="number"
            placeholder="Precio del servicio"
            value={nuevoServicio.precio}
            onChange={(e) => setNuevoServicio({ ...nuevoServicio, precio: e.target.value })}
          />
          <button className="btn-guardar" onClick={agregarServicio}>
            Guardar
          </button>
          <button className="btn-cancelar" onClick={() => setVistaActual("principal")}>
            Cancelar
          </button>
        </div>
      )}

      {/* Vista para gestionar los servicios */}
      {vistaActual === "gestionar" && !editarServicio && (
        <div className="vista-detalle">
          <h2>Mis Servicios Registrados</h2>
          <div className="tarjetas-listar">
            {serviciosRegistrados.map((servicio) => (
              <div className="tarjeta-lista" key={servicio.id}>
                <h3>{servicio.nombre}</h3>
                <p>
                  <strong>Precio:</strong> ${servicio.precio}
                </p>
                <p>
                  <strong>Descripción:</strong> {servicio.descripcion}
                </p>
                <p>
                  <strong>Tipo de Servicio:</strong> {servicio.tipoServicio}
                </p>
                <button className="btn-editar" onClick={() => setEditarServicio(servicio)}>
                  Editar
                </button>
              </div>
            ))}
          </div>
          <button className="btn-volver" onClick={() => setVistaActual("principal")}>
            Volver
          </button>
        </div>
      )}

{editarServicio && (
  <div className="formulario-editar">
    <h2>Editar Servicio</h2>
    <div className="formulario-campos">
      <label>
        <strong>Nombre del Servicio:</strong>
        <input
          type="text"
          placeholder="Nombre del servicio"
          value={editarServicio.nombre}
          onChange={(e) => setEditarServicio({ ...editarServicio, nombre: e.target.value })}
        />
      </label>
      <label>
        <strong>Descripción:</strong>
        <textarea
          placeholder="Descripción del servicio"
          value={editarServicio.descripcion}
          onChange={(e) =>
            setEditarServicio({ ...editarServicio, descripcion: e.target.value })
          }
        ></textarea>
      </label>
      <label>
        <strong>Precio:</strong>
        <input
          type="number"
          placeholder="Precio del servicio"
          value={editarServicio.precio}
          onChange={(e) => setEditarServicio({ ...editarServicio, precio: e.target.value })}
        />
      </label>
    </div>
    <div className="formulario-botones">
      <button className="btn-guardar" onClick={guardarEdicion}>
        Guardar Cambios
      </button>
      <button className="btn-cancelar" onClick={cancelarEdicion}>
        Cancelar
      </button>
    </div>
  </div>
)}

    </div>
  );
}