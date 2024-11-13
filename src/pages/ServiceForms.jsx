import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ServiceContext } from '../context/ServiceContext';
//import Button from '../components/Button';
//import Input from '../components/Input';
//import Label from '../components/Label';
import Checkbox from '../components/ui/checkbox';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre del servicio es requerido'),
  description: Yup.string().required('La descripción es requerida'),
  price: Yup.number().required('El precio es requerido').positive('El precio debe ser un número positivo'),
  phone: Yup.string().required('El teléfono es requerido'),
  servicesOffered: Yup.array().of(Yup.string()).required('Debe seleccionar al menos un servicio ofrecido'),
  images: Yup.array().of(Yup.mixed()).required('Debe subir al menos una imagen'),
});

const ServiceForm = () => {
  const { addService, updateService, currentService } = useContext(ServiceContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: currentService || {},
  });

  const onSubmit = (data) => {
    if (currentService) {
      updateService(data);
    } else {
      addService(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
      {/* Campos del formulario */}
      <div>
        <Label htmlFor="servicesOffered">Servicios ofrecidos</Label>
        {serviciosPredefinidos.map((servicio) => (
          <div key={servicio.id} className="flex items-center space-x-2">
            <Checkbox
              id={servicio.id}
              {...register(servicesOffered.${servicio.id})}
            />
            <Label htmlFor={servicio.id}>{servicio.nombre}</Label>
          </div>
        ))}
        {errors.servicesOffered?.message && (
          <p className="text-red-500">{errors.servicesOffered.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="images">Imágenes del negocio</Label>
        <Input
          id="images"
          type="file"
          multiple
          {...register('images')}
          className="cursor-pointer bg-[#2A3A5A] text-white border-[#3A4A6A]"
        />
        {errors.images?.message && (
          <p className="text-red-500">{errors.images.message}</p>
        )}
      </div>
      <Button type="submit" className="bg-yellow-400 text-[#202D43] hover:bg-yellow-500">
        {currentService ? 'Actualizar Servicio' : 'Agregar Servicio'}
      </Button>
    </form>
  );
};

export default ServiceForm;
