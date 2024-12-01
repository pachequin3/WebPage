import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseFirestoreConfig'; // Configuración de Firebase

const PAGOS_COLLECTION = 'Pago';
const PETICION_COLLECTION = 'Peticion';

// Función para obtener todos los pagos y combinar con la colección Petición
export const obtenerPagos = async () => {
  try {
    // Obtener datos de la colección Pago
    const pagosSnapshot = await getDocs(collection(db, PAGOS_COLLECTION));
    const pagos = pagosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Obtener datos de la colección Petición
    const peticionesSnapshot = await getDocs(collection(db, PETICION_COLLECTION));
    const peticionesMap = {};
    peticionesSnapshot.forEach((doc) => {
      peticionesMap[doc.id] = doc.data(); // Guardar todos los atributos de Petición
    });

    // Combinar los datos de Pago con los de Petición
    const pagosCombinados = pagos.map((pago) => {
      const peticion = peticionesMap[pago.idSolicitud] || {}; // Buscar la petición correspondiente
      return {
        ...pago,
        ...peticion, // Agregar todos los atributos de Petición
      };
    });

    return pagosCombinados;
  } catch (error) {
    console.error('Error al obtener los pagos:', error);a
    throw error;
  }
};
