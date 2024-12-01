import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseReportes'; // Configuración de Firebase
import 'chart.js/auto'; // Asegúrate de que chart.js se cargue
import jsPDF from "jspdf";
import 'jspdf-autotable'; // Para trabajar con tablas en jsPDF

export function ReportsModule() {
  const [chartData, setChartData] = useState(null);
  const [totalProveedores, setTotalProveedores] = useState(0);
  const [proveedoresActivos, setProveedoresActivos] = useState(0);
  const [peticiones, setPeticiones] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Función para obtener datos desde Firebase
  const obtenerDatos = async () => {
    try {
      // Obtiene todos los proveedores
      const proveedoresSnapshot = await getDocs(collection(db, 'proveedores'));
      const proveedores = proveedoresSnapshot.docs.map(doc => doc.data());
      console.log(proveedores);  // Verifica los datos obtenidos

      // Filtrar proveedores activos
      const proveedoresActivos = proveedores.filter(proveedor => proveedor.estado === 'activo');
      const total = proveedores.length;

      setTotalProveedores(total);
      setProveedoresActivos(proveedoresActivos.length);

      // Contabiliza proveedores por tipo de servicio
      const proveedoresPorTipo = proveedores.reduce((acc, proveedor) => {
        if (proveedor.tipoServicio) {  // Accedemos al campo tipoServicio
          const tipo = proveedor.tipoServicio;
          acc[tipo] = (acc[tipo] || 0) + 1; // Incrementamos el contador de cada tipo
        }
        return acc;
      }, {});

      // Colores distintos para cada barra
      const coloresDistintos = [
        '#F9C74F', '#90BE6D', '#F94144', '#F3722C', '#277DA1', '#43AA8B', '#E9C46A', '#F4A261'
      ];

      // Prepara los datos para el gráfico de barras
      const barData = {
        labels: Object.keys(proveedoresPorTipo), // Tipos de servicios
        datasets: [
          {
            label: 'Cantidad de Proveedores por Tipo de Servicio',
            data: Object.values(proveedoresPorTipo), // Cantidad de proveedores por tipo de servicio
            backgroundColor: coloresDistintos.slice(0, Object.keys(proveedoresPorTipo).length), // Asigna un color distinto a cada barra
          },
        ],
      };

      console.log(barData);  // Verifica los datos del gráfico
      setChartData(barData);

      // Obtener datos de la colección 'Peticion'
      const peticionesSnapshot = await getDocs(collection(db, 'Peticion'));
      const peticionesData = peticionesSnapshot.docs.map(doc => doc.data());
      setPeticiones(peticionesData);

    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  // Función para generar y descargar el PDF con el filtro de fechas
  const generarReportePDF = () => {
    // Filtrar las peticiones según las fechas seleccionadas
    const peticionesFiltradas = peticiones.filter(peticion => {
      const fechaPeticion = new Date(peticion.fecha); // Convierte la fecha de la petición
      const fechaInicio = new Date(startDate);
      const fechaFin = new Date(endDate);

      // Comprobar si la fecha está dentro del rango
      return fechaPeticion >= fechaInicio && fechaPeticion <= fechaFin;
    });

    // Si no hay peticiones en el rango seleccionado, mostrar un mensaje
    if (peticionesFiltradas.length === 0) {
      alert('No hay peticiones en el rango de fechas seleccionado.');
      return;
    }

    const doc = new jsPDF();

    // Título y descripción antes de la tabla
    const titulo = "Reporte de Peticiones Filtradas por Fecha";
    const descripcion = `Total de peticiones: ${peticionesFiltradas.length} \nFecha de inicio: ${startDate} \nFecha de fin: ${endDate}`;



    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(titulo, 14, 20); // Título
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(descripcion, 14, 30); // Descripción

    // Títulos de las columnas de la tabla
    const columnas = [
      'Estado', 'Fecha', 'Precio', 'Proveedor', 'Servicio', 'Usuario'
    ];

    // Datos de las filas (de las peticiones filtradas)
    const filas = peticionesFiltradas.map(peticion => [
      peticion.estado,
      peticion.fecha,
      peticion.precio,
      peticion.proveedor,
      peticion.servicio,
      peticion.usuario || 'No especificado', // Asegurarse de no tener undefined
    ]);

    // Añadir la tabla al PDF
    doc.autoTable({
      head: [columnas],
      body: filas,
      startY: 40, // A partir de la posición Y 40 para la tabla
      margin: { horizontal: 10 },
      theme: 'striped', // Puedes cambiar el tema si lo deseas
    });

    // Descargar el PDF
    doc.save('reporte_peticiones.pdf');
  };

  return (
    <div style={{
      padding: '30px', 
      backgroundColor: '#1B2333', 
      fontFamily: 'Arial, sans-serif',
      color: 'white',
    }}>
      <div style={{
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '30px',
        marginTop: '20px',
        textAlign: 'center',
        color: '#1B2333'
      }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>
          Informes y Reportes
        </h1>
        <p style={{ fontSize: '18px', color: 'white' }}>
          De un total de {totalProveedores} proveedores registrados, {proveedoresActivos} están activos.
        </p>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        marginTop: '30px'
      }}>
        {chartData && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '70%' }}>
              <h3 style={{ textAlign: 'center', color: '#1B2333' }}>
                Cantidad de Proveedores por Tipo de Servicio
              </h3>
              <Bar
                data={chartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: 'top',
                    },
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: 'Tipos de Servicios',
                        color: '#1B2333',
                        font: {
                          size: 16,
                          weight: 'bold',
                        },
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: 'Cantidad de Proveedores',
                        color: '#1B2333',
                        font: {
                          size: 16,
                          weight: 'bold',
                        },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div style={{
        backgroundColor: '#F9C74F',
        borderRadius: '12px',
        color: '#1B2333',
        padding: '15px',
        marginTop: '30px',
        textAlign: 'center',
        fontSize: '18px',
      }}>
        <h3>Generar Reporte PDF</h3>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button
  onClick={generarReportePDF}
  style={{
    marginTop: '10px',
    marginLeft: '20px', // Añade espacio a la izquierda
    backgroundColor: '#F3722C', // Un color más vibrante para resaltar
    color: '#FFFFFF', // Texto blanco para mayor contraste
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra sutil para resaltar
    transition: 'background-color 0.3s, transform 0.2s', // Efectos suaves para el hover
  }}
  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} // Aumenta el tamaño al pasar el mouse
  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} // Restaura el tamaño
>
  Generar PDF
</button>
      </div>
    </div>
  );
}