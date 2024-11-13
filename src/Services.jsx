import React, { useState } from 'react';
import './Services.css';

const serviciosPredefinidos = [
  { id: 'llanteria', nombre: 'Servicio de Llantería', propietario: 'Juan Pérez', telefono: '123456789', tarifa: '50', imagen: null },
  { id: 'electricista', nombre: 'Servicio Eléctrico', propietario: 'Ana Gómez', telefono: '987654321', tarifa: '70', imagen: null },
];

export default function Services() {
  const [servicios, setServicios] = useState(serviciosPredefinidos);
  const [mostrarLista, setMostrarLista] = useState(true);
  const [nuevoServicio, setNuevoServicio] = useState({ nombre: '', propietario: '', telefono: '', tarifa: '', imagen: null });
  const [mensajeExito, setMensajeExito] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [servicioEditadoId, setServicioEditadoId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoServicio((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNuevoServicio((prev) => ({ ...prev, imagen: file }));
  };

  const agregarServicio = () => {
    if (!nuevoServicio.nombre || !nuevoServicio.propietario || !nuevoServicio.telefono || !nuevoServicio.tarifa) {
      alert('Por favor, complete todos los campos antes de guardar.');
      return;
    }

    if (modoEdicion) {
      const serviciosActualizados = servicios.map((servicio) =>
        servicio.id === servicioEditadoId ? { ...nuevoServicio, id: servicioEditadoId } : servicio
      );
      setServicios(serviciosActualizados);
      setModoEdicion(false);
      setServicioEditadoId(null);
    } else {
      setServicios([...servicios, { ...nuevoServicio, id: Date.now().toString() }]);
    }

    setMensajeExito('Su servicio se guardó satisfactoriamente');
    setNuevoServicio({ nombre: '', propietario: '', telefono: '', tarifa: '', imagen: null });

    setTimeout(() => setMensajeExito(''), 3000);
  };

  const eliminarServicio = (id) => {
    setServicios(servicios.filter((servicio) => servicio.id !== id));
  };

  const editarServicio = (servicio) => {
    setModoEdicion(true);
    setServicioEditadoId(servicio.id);
    setNuevoServicio(servicio);
    setMostrarLista(false);
  };

  return (
    <div className="page-services">
       <h2>Lista de Servicios</h2>
      <div className="navigation-buttons">
        <button onClick={() => setMostrarLista(true)}>Lista de Servicios</button>
        <button onClick={() => {
          setMostrarLista(false);
          setModoEdicion(false);
          setNuevoServicio({ nombre: '', propietario: '', telefono: '', tarifa: '', imagen: null });
        }}>Agregar Servicio</button>
      </div>

      {mostrarLista ? (
        <div className="service-list">
          {/* <h2>Lista de Servicios</h2> */}
          <div className="service-grid">
            {servicios.map((servicio) => (
              <div key={servicio.id} className="service-card animated-card">
                <h3>{servicio.nombre}</h3>
                <p><strong>Propietario:</strong> {servicio.propietario}</p>
                <p><strong>Teléfono:</strong> {servicio.telefono}</p>
                <p><strong>Tarifa:</strong> ${servicio.tarifa}</p>
                {servicio.imagen && <img src={URL.createObjectURL(servicio.imagen)} alt="Servicio" className="service-image" />}
                <button className="edit-button" onClick={() => editarServicio(servicio)}>Editar</button>
                <button className="delete-button" onClick={() => eliminarServicio(servicio.id)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="add-service-form">
          <h3>{modoEdicion ? 'Editar Servicio' : 'Agregar Nuevo Servicio'}</h3>
          <div className="form-group">
            <label>Nombre del Servicio</label>
            <input type="text" name="nombre" value={nuevoServicio.nombre} onChange={handleInputChange} placeholder="Nombre del servicio" />
          </div>
          <div className="form-group">
            <label>Propietario del Servicio</label>
            <input type="text" name="propietario" value={nuevoServicio.propietario} onChange={handleInputChange} placeholder="Nombre del propietario" />
          </div>
          <div className="form-group">
            <label>Teléfono de Contacto</label>
            <input type="text" name="telefono" value={nuevoServicio.telefono} onChange={handleInputChange} placeholder="Teléfono de contacto" />
          </div>
          <div className="form-group">
            <label>Tarifa del Servicio</label>
            <input type="text" name="tarifa" value={nuevoServicio.tarifa} onChange={handleInputChange} placeholder="Tarifa en $" />
          </div>
          <div className="form-group">
            <label>Imagen del Servicio (opcional)</label>
            <input type="file" onChange={handleImageChange} />
          </div>
          <button className="save-button" onClick={agregarServicio}>
            {modoEdicion ? 'Guardar Cambios' : 'Guardar Servicio'}
          </button>
          {mensajeExito && <p className="success-message">{mensajeExito}</p>}
        </div>
      )}
    </div>
  );
}
