import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Importamos Firestore

const firebaseConfig = {
  apiKey: "AIzaSyA0K7KLG952WidGpBfKE6dckU7posuPy8U",
  authDomain: "autoasiste-login-admin.firebaseapp.com",
  projectId: "autoasiste-login-admin",
  storageBucket: "autoasiste-login-admin.appspot.com",
  messagingSenderId: "656042079468",
  appId: "1:656042079468:web:6313cc0ec362be40a961c9"
};
// Inicializamos Firebase solo para Firestore
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);  // Inicializamos Firestore

// Exportamos la base de datos para usarla en ServiciosAdmin
export { db };
