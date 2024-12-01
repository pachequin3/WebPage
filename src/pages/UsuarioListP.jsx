import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Icono de búsqueda
import '../styles/ProveedoresList.css'; // Reutilizamos estilos
import { db } from '../services/proveedorService'; // Cambia proveedorService si tienes otro archivo
import { collection, getDocs } from 'firebase/firestore';

function UsuariosListP() {
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsuariosListP;
