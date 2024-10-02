
import './Servicios.css';

const services = [
  { name: "Cambio de Aceite", icon: "🛢️" },
  { name: "Alineación y Balanceo", icon: "⚖️" },
  { name: "Revisión de Frenos", icon: "🚗" },
  { name: "Diagnóstico de Motor", icon: "🔧" },
  { name: "Cambio de Neumáticos", icon: "🚙" },
  { name: "Servicio de Batería", icon: "🔋" },
  { name: "Reparación de Transmisión", icon: "⚙️" },
  { name: "Inspección de Seguridad", icon: "🔍" },
];

function Servicios() {
  return (
    <div className="app-container">
      <h1>Servicios del Mecánico</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h2>{service.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;