import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb_Pd2Wz5nFnKEhmiyAvUpMXLrYZZVzPg",
  authDomain: "meilleurecoupe.firebaseapp.com",
  projectId: "meilleurecoupe",
  storageBucket: "meilleurecoupe.firebasestorage.app",
  messagingSenderId: "969009949114",
  appId: "1:969009949114:web:7981d0abbb89f47fc8d583",
  measurementId: "G-9N86K34MDL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export default firebaseConfig;