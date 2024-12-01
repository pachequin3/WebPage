import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Icono de búsqueda
import '../styles/ProveedoresList.css'; // Reutilizamos estilos
import { db } from '../services/proveedorService';
import { collection, getDocs } from 'firebase/firestore';

function ProveedorListP() {
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
      setFilteredProveedores(proveedoresData); // Mostrar todos los proveedores
    } catch (error) {
      console.error('Error al cargar proveedores:', error);
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
        proveedor.email.toLowerCase().includes(value)
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
              <th>Acciones</th> {/* Nueva columna para el botón de Editar */}
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
                  <Link
                    to={`editar-proveedor/${proveedor.id}`}
                    state={{ proveedor }}
                    className="btn-editar"
                  >
                    Editar {/* Botón para editar */}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProveedorListP;
