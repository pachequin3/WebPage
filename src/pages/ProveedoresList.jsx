import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus } from 'react-icons/fa'; // Iconos importados
import '../styles/ProveedoresList.css';
import { db } from '../services/proveedorService';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

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
      setFilteredProveedores(proveedoresData); // Al cargar, también mostramos todos los proveedores
    } catch (error) {
      console.error('Error al cargar proveedores:', error);
    }
  };

  // Función para eliminar un proveedor
  const handleDelete = async (id) => {
    try {
      const proveedorRef = doc(db, 'proveedores', id);
      await deleteDoc(proveedorRef);
      // Actualizamos la lista después de eliminar
      setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
      setFilteredProveedores(filteredProveedores.filter((proveedor) => proveedor.id !== id));
      alert('Proveedor eliminado');
    } catch (error) {
      console.error('Error al eliminar proveedor:', error);
      alert('Error al eliminar proveedor');
    }
  };

  // Función para filtrar proveedores
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filtrar proveedores por nombre de empresa, nombre del proveedor o tipo de servicio
    const filtered = proveedores.filter((proveedor) =>
      proveedor.nombreEmpresa.toLowerCase().includes(value) ||
      proveedor.tipoServicio.toLowerCase().includes(value) ||
      proveedor.nombreProveedor.toLowerCase().includes(value)
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
                <td>
                  <Link 
                    to={`editar-proveedor/${proveedor.id}`} 
                    state={{ proveedor }} 
                    className="btn-editar"
                  >
                    Editar
                  </Link>
                  <button 
                    className="btn-eliminar" 
                    onClick={() => handleDelete(proveedor.id)}
                  >
                    Eliminar
                  </button>
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
