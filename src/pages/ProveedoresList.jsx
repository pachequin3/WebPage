import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProveedoresList.css';
import Dashboard from './Dashboard';

function ProveedoresList() {
 
  const [proveedores] = useState([
    {
      id: 1,
      nombreEmpresa: 'Empresa A',
      tipoServicio: 'mecanico',
      descripcionServicio: 'Servicio mecánico general',
      direccion: 'Calle Principal 123',
      horarioAtencion: '9:00 - 18:00',
      nombreProveedor: 'Juan Pérez',
      celular: '12345678',
      email: 'juan@empresa.com'
    },
    {
      id: 2,
      nombreEmpresa: 'Empresa B',
      tipoServicio: 'electricista',
      descripcionServicio: 'Servicios eléctricos',
      direccion: 'Avenida Central 456',
      horarioAtencion: '8:00 - 17:00',
      nombreProveedor: 'María López',
      celular: '98765432',
      email: 'maria@empresab.com'
    }
  ]);

  return (
    
    <div className="proveedores-list">
       
      <h2>Lista de Proveedores</h2>
      
      <div className="search-bar">
        <input type="text" placeholder="Buscar proveedor" />
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
                    state={{ proveedor }} 
                    className="btn-editar"
                  >
                    Editar
                  </Link>
                  <button className="btn-eliminar">Eliminar</button>
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