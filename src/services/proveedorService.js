import { db } from '../credenciales';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

const COLLECTION_NAME = 'proveedores';

export const addProveedor = async (proveedorData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), proveedorData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding proveedor: ", error);
    throw error;
  }
};

export const getProveedores = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting proveedores: ", error);
    throw error;
  }
};

export const getProveedorById = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("No such proveedor!");
    }
  } catch (error) {
    console.error("Error getting proveedor: ", error);
    throw error;
  }
};

export const updateProveedor = async (id, proveedorData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, proveedorData);
  } catch (error) {
    console.error("Error updating proveedor: ", error);
    throw error;
  }
};

export const deleteProveedor = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error("Error deleting proveedor: ", error);
    throw error;
  }
};

export const searchProveedores = async (searchTerm) => {
  try {
    const q = query(collection(db, COLLECTION_NAME), 
      where("nombreEmpresa", ">=", searchTerm),
      where("nombreEmpresa", "<=", searchTerm + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error searching proveedores: ", error);
    throw error;
  }
};