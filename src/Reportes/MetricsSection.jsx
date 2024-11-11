import React from 'react';
import { PieChart, BarChart2 } from 'lucide-react';

export function MetricsSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <h2 className="text-xl font-semibold text-[#1B2333] flex items-center gap-2">
        <PieChart className="w-5 h-5 text-[#FFD700]" />
        Métricas de Servicios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-700">Servicios por Categoría</h3>
            <PieChart className="w-4 h-4 text-gray-400" />
          </div>
          <div className="h-40 flex items-center justify-center text-gray-500">
            Gráfico Circular
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-gray-700">Servicios por Mes</h3>
            <BarChart2 className="w-4 h-4 text-gray-400" />
          </div>
          <div className="h-40 flex items-center justify-center text-gray-500">
            Gráfico de Barras
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Total Servicios</div>
          <div className="text-2xl font-bold text-[#1B2333]">1,234</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Proveedores Activos</div>
          <div className="text-2xl font-bold text-[#1B2333]">89</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600">Satisfacción</div>
          <div className="text-2xl font-bold text-[#1B2333]">4.8/5</div>
        </div>
      </div>
    </div>
  );
}