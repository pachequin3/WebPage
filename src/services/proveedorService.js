import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // Importamos Firestore
import { getAuth } from "firebase/auth";  // Importamos Authentication

const firebaseConfig = {
  apiKey: "AIzaSyA0K7KLG952WidGpBfKE6dckU7posuPy8U",
  authDomain: "autoasiste-login-admin.firebaseapp.com",
  projectId: "autoasiste-login-admin",
  storageBucket: "autoasiste-login-admin.appspot.com",
  messagingSenderId: "656042079468",
  appId: "1:656042079468:web:6313cc0ec362be40a961c9"
};

// Inicializamos Firebase
const appFirebase = initializeApp(firebaseConfig);

// Inicializamos Firestore
const db = getFirestore(appFirebase);

// Inicializamos Firebase Authentication
const auth = getAuth(appFirebase); 

// Exportamos la base de datos y la autenticación
export { db, auth };
