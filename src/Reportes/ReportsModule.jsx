import React, { useState } from 'react';
import { FileText, Download, Filter, PieChart } from 'lucide-react';

export function ReportsModule() {
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [showFilters, setShowFilters] = useState(false);
  const [filterDateFrom, setFilterDateFrom] = useState('');
  const [filterDateTo, setFilterDateTo] = useState('');
  const [filterProviderType, setFilterProviderType] = useState('');

  const handleGenerateReport = () => {
    console.log('Generating report...');
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#F5F7FA', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1B2333' }}>Gestión de Informes y Reportes</h1>
        <p style={{ color: '#6B7280' }}>Genera y administra reportes detallados de proveedores y servicios</p>
      </div>

      {/* Actions Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Generar Reporte Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '20px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1B2333',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FileText style={{ color: '#FFD700' }} />
            Generar Reporte
          </h2>
          
          <div style={{ marginTop: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#4A5568', marginBottom: '8px' }}>
              Formato de Exportación
            </label>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #CBD5E0',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                fontSize: '14px',
                color: '#1B2333',
                outlineColor: '#FFD700'
              }}
            >
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
            </select>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '15px',
              padding: '10px',
              backgroundColor: '#FFD700',
              color: '#4A5568',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#CBD5E0'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#E2E8F0'}
          >
            <Filter />
            {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
          </button>

          {showFilters && <ReportFilters />}

          <button
            onClick={handleGenerateReport}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '20px',
              padding: '10px',
              backgroundColor: '#1B2333',
              color: 'white',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2A3447'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1B2333'}
          >
            <Download />
            Generar y Descargar Reporte
          </button>
        </div>

        {/* Métricas de Servicios Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1B2333',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <PieChart style={{ color: '#FFD700' }} />
            Métricas de Servicios
          </h2>
          <div style={{ display: 'flex', gap: '20px', width: '100%', justifyContent: 'space-between' }}>
            <div style={{ width: '45%', textAlign: 'center', color: '#4A5568' }}>Gráfico Circular</div>
            <div style={{ width: '45%', textAlign: 'center', color: '#4A5568' }}>Gráfico de Barras</div>
          </div>
          <div style={{
            display: 'flex',
            gap: '20px',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: '10px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#6B7280' }}>Total Servicios</p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1B2333' }}>1,234</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#6B7280' }}>Proveedores Activos</p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1B2333' }}>89</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: '#6B7280' }}>Satisfacción</p>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1B2333' }}>4.8/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Filtros de Reporte Detallados
function ReportFilters() {
  return (
    <div style={{ padding: '10px', marginTop: '10px', backgroundColor: '#F7FAFC', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#4A5568' }}>Fecha Desde</label>
        <input
          type="date"
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #CBD5E0',
            fontSize: '14px',
            color: '	#FFFFFF',
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#4A5568' }}>Fecha Hasta</label>
        <input
          type="date"
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #CBD5E0',
            fontSize: '14px',
            color: '#FFFFFF',
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#4A5568' }}>Tipo de Proveedor</label>
        <select
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #CBD5E0',
            fontSize: '14px',
            color: '	#FFFFFF',
          }}
        >
          <option value="">Seleccionar...</option>
          <option value="mecanico">Mecánico</option>
          <option value="electrico">Eléctrico</option>
          <option value="pintura">Pintura</option>
        </select>
      </div>
    </div>
  );
}
