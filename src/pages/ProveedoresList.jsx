import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProveedores, deleteProveedor, searchProveedores } from '../services/proveedorService';
import '../styles/ProveedoresList.css';

function ProveedoresList() {
  const [proveedores, setProveedores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProveedores();
  }, []);

  const fetchProveedores = async () => {
    try {
      const data = await getProveedores();
      setProveedores(data);
    } catch (error) {
      console.error("Error fetching proveedores:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este proveedor?')) {
      try {
        await deleteProveedor(id);
        fetchProveedores(); // Recargar la lista después de eliminar
      } catch (error) {
        console.error("Error deleting proveedor:", error);
      }
    }
  };

  const handleSearch = async () => {
    if (searchTerm) {
      try {
        const results = await searchProveedores(searchTerm);
        setProveedores(results);
      } catch (error) {
        console.error("Error searching proveedores:", error);
      }
    } else {
      fetchProveedores();
    }
  };

  return (
    <div className="proveedores-list">
      <h2>Lista de Proveedores</h2>
      
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Buscar proveedor" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
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
            {proveedores.map((proveedor) => (
              <tr key={proveedor.id}>
                <td>{proveedor.nombreEmpresa}</td>
                <td>{proveedor.tipoServicio}</td>
                <td>{proveedor.nombreProveedor}</td>
                <td>{proveedor.celular}</td>
                <td>{proveedor.email}</td>
                <td>
                  <Link 
                    to={`/editar-proveedor/${proveedor.id}`} 
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