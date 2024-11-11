import React from 'react';
import { Calendar, Tag, Users } from 'lucide-react';

export function ReportFilters() {
  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#FFD700]" />
            Rango de Fechas
          </div>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            className="rounded-lg border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50"
          />
          <input
            type="date"
            className="rounded-lg border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#FFD700]" />
            Categorías
          </div>
        </label>
        <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50">
          <option value="">Todas las categorías</option>
          <option value="mecanica">Mecánica</option>
          <option value="electricidad">Electricidad</option>
          <option value="carroceria">Carrocería</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#FFD700]" />
            Proveedores
          </div>
        </label>
        <select className="w-full rounded-lg border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50">
          <option value="">Todos los proveedores</option>
          <option value="activos">Proveedores Activos</option>
          <option value="inactivos">Proveedores Inactivos</option>
        </select>
      </div>
    </div>
  );
}