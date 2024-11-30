import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus } from 'react-icons/fa'; // Iconos importados
import '../styles/ProveedoresList.css';
import { db } from '../services/proveedorService';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function ProveedoresList() {
  const [proveedores, setProveedores] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el texto de búsqueda
  const [filteredProveedores, setFilteredProveedores] = useState([]); // Proveedores filtrados

  // Función para cargar proveedores desde Firestore
  const loadProveedores = async () => {
    try {
      const proveedoresRef = collection(db, 'proveedores');
      const querySnapshot = await getDocs(proveedoresRef);
      const proveedoresData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProveedores(proveedoresData);
      setFilteredProveedores(proveedoresData); // Mostrar todos los proveedores sin importar su estado
    } catch (error) {
      console.error('Error al cargar proveedores:', error);
    }
  };

  // Función para cambiar el estado del proveedor
  const handleToggleEstado = async (id, estadoActual) => {
    try {
      const nuevoEstado = estadoActual === 'activo' ? 'baja' : 'activo'; // Alternar estado
      const proveedorRef = doc(db, 'proveedores', id);
      await updateDoc(proveedorRef, { estado: nuevoEstado });

      // Actualizamos la lista local
      const actualizados = proveedores.map((proveedor) =>
        proveedor.id === id ? { ...proveedor, estado: nuevoEstado } : proveedor
      );
      setProveedores(actualizados);
      setFilteredProveedores(actualizados); // Mostrar todos los proveedores después de actualizar

      alert(`El proveedor fue marcado como ${nuevoEstado}.`);
    } catch (error) {
      console.error('Error al cambiar estado del proveedor:', error);
      alert('Hubo un error al actualizar el estado del proveedor.');
    }
  };

  // Función para filtrar proveedores
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = proveedores.filter(
      (proveedor) =>
        proveedor.nombreEmpresa.toLowerCase().includes(value) ||
        proveedor.tipoServicio.toLowerCase().includes(value) ||
        proveedor.nombreProveedor.toLowerCase().includes(value) ||
        proveedor.estado.toLowerCase().includes(value) // Permitir búsqueda por estado
    );

    setFilteredProveedores(filtered);
  };

  // Cargar proveedores cuando el componente se monta
  useEffect(() => {
    loadProveedores();
  }, []);

  return (
    <div className="proveedores-list">
      <h2>Lista de Proveedores</h2>

      <div className="actions-container">
        <div className="search-bar">
          <FaSearch className="icon-search" /> {/* Icono de búsqueda */}
          <input
            type="text"
            placeholder="Buscar proveedor"
            value={searchTerm} // Vincular el valor del input al estado
            onChange={handleSearch} // Llamar a la función handleSearch al cambiar el input
          />
        </div>
        <Link to="registrar-proveedor" className="btn-agregar-proveedor">
          <FaPlus className="icon-add" /> Agregar Proveedor {/* Icono de agregar */}
        </Link>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Tipo de Servicio</th>
              <th>Contacto</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProveedores.map((proveedor) => (
              <tr key={proveedor.id}>
                <td>{proveedor.nombreEmpresa}</td>
                <td>{proveedor.tipoServicio}</td>
                <td>{proveedor.nombreProveedor}</td>
                <td>{proveedor.celular}</td>
                <td>{proveedor.email}</td>
                <td>{proveedor.estado}</td>
                <td className="acciones-column">
                  <div className="acciones-container">
                    <Link
                      to={`editar-proveedor/${proveedor.id}`}
                      state={{ proveedor }}
                      className="btn-editar"
                    >
                      Editar
                    </Link>
                    <button
                      className={`btn-estado ${
                        proveedor.estado === 'activo' ? 'btn-baja' : 'btn-activo'
                      }`}
                      onClick={() => handleToggleEstado(proveedor.id, proveedor.estado)}
                    >
                      {proveedor.estado === 'activo' ? 'Baja' : 'Activo'}
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

export default ProveedoresList;
