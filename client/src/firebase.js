// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-4391f.firebaseapp.com",
  projectId: "mern-real-estate-4391f",
  storageBucket: "mern-real-estate-4391f.appspot.com",
  messagingSenderId: "1038009316892",
  appId: "1:1038009316892:web:960592ca399c9811c451d9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
