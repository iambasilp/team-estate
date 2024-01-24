// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "real-estate-c8003.firebaseapp.com",
   projectId: "real-estate-c8003",
   storageBucket: "real-estate-c8003.appspot.com",
   messagingSenderId: "151195575217",
   appId: "1:151195575217:web:193d7043a7202544a95390",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
