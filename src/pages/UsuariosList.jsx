import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus } from 'react-icons/fa'; // Iconos importados
import '../styles/ProveedoresList.css'; // Reutilizamos estilos
import { db } from '../services/proveedorService'; // Cambia proveedorService si tienes otro archivo
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el texto de búsqueda
  const [filteredUsuarios, setFilteredUsuarios] = useState([]); // Usuarios filtrados

  // Función para cargar usuarios desde Firestore
  const loadUsuarios = async () => {
    try {
      const usuariosRef = collection(db, 'Usuario');
      const querySnapshot = await getDocs(usuariosRef);
      const usuariosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsuarios(usuariosData);
      setFilteredUsuarios(usuariosData); // Mostrar todos los usuarios sin importar su estado
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  };

  // Función para cambiar el estado del usuario
  const handleToggleEstado = async (id, estadoActual) => {
    try {
      const nuevoEstado = estadoActual === 'activo' ? 'baja' : 'activo'; // Alternar estado
      const usuarioRef = doc(db, 'Usuario', id);
      await updateDoc(usuarioRef, { estado: nuevoEstado });

      // Actualizamos la lista local
      const actualizados = usuarios.map((usuario) =>
        usuario.id === id ? { ...usuario, estado: nuevoEstado } : usuario
      );
      setUsuarios(actualizados);
      setFilteredUsuarios(actualizados); // Mostrar todos los usuarios después de actualizar

      alert(`El usuario fue marcado como ${nuevoEstado}.`);
    } catch (error) {
      console.error('Error al cambiar estado del usuario:', error);
      alert('Hubo un error al actualizar el estado del usuario.');
    }
  };

  // Función para filtrar usuarios
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = usuarios.filter(
      (usuario) =>
        usuario.nombre.toLowerCase().includes(value) ||
        usuario.apellido.toLowerCase().includes(value) ||
        usuario.email.toLowerCase().includes(value) ||
        usuario.celular.toLowerCase().includes(value) ||
        usuario.estado.toLowerCase().includes(value) // Permitir búsqueda por estado
    );

    setFilteredUsuarios(filtered);
  };

  // Cargar usuarios cuando el componente se monta
  useEffect(() => {
    loadUsuarios();
  }, []);

  return (
    <div className="proveedores-list"> {/* Reutilizamos clase para estilos */}
      <h2>Lista de Usuarios</h2>

      <div className="actions-container">
        <div className="search-bar">
          <FaSearch className="icon-search" /> {/* Icono de búsqueda */}
          <input
            type="text"
            placeholder="Buscar usuario"
            value={searchTerm} // Vincular el valor del input al estado
            onChange={handleSearch} // Llamar a la función handleSearch al cambiar el input
          />
        </div>
        <Link to="registrar-usuario" className="btn-agregar-proveedor"> {/* Reutilizamos clase */}
          <FaPlus className="icon-add" /> Agregar Usuario {/* Icono de agregar */}
        </Link>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Celular</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.email}</td>
                <td>{usuario.celular}</td>
                <td>{usuario.estado}</td>
                <td className="acciones-column">
                  <div className="acciones-container">
                    <Link
                      to={`editar-usuario/${usuario.id}`}
                      state={{ usuario }}
                      className="btn-editar"
                    >
                      Editar
                    </Link>
                    <button
                      className={`btn-estado ${
                        usuario.estado === 'activo' ? 'btn-baja' : 'btn-activo'
                      }`}
                      onClick={() => handleToggleEstado(usuario.id, usuario.estado)}
                    >
                      {usuario.estado === 'activo' ? 'Baja' : 'Activo'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsuariosList;

