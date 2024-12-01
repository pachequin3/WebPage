// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0K7KLG952WidGpBfKE6dckU7posuPy8U",
  authDomain: "autoasiste-login-admin.firebaseapp.com",
  projectId: "autoasiste-login-admin",
  storageBucket: "autoasiste-login-admin.appspot.com",
  messagingSenderId: "656042079468",
  appId: "1:656042079468:web:6313cc0ec362be40a961c9",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(appFirebase);

// Optional: export Auth if needed
export const auth = getAuth(appFirebase);

export default appFirebase;