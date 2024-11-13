import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../context/ServiceContext';
import ServiceCard from '../components/ui/checkbox';

const ServicesList = () => {
  const { services } = useContext(ServiceContext);

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <Link to="/service/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar Servicio
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;