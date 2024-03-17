// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: "team-estate.firebaseapp.com",
   projectId: "team-estate",
   storageBucket: "team-estate.appspot.com",
   messagingSenderId: "438591216005",
   appId: "1:438591216005:web:4dccd2334a9a2a94520cec",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
