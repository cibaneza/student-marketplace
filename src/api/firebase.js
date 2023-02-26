// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYAQ1HuchhF7ucW8bX0E2yRN8_iqSmGYA",
  authDomain: "react-auth-518f4.firebaseapp.com",
  projectId: "react-auth-518f4",
  storageBucket: "react-auth-518f4.appspot.com",
  messagingSenderId: "98252614640",
  appId: "1:98252614640:web:9fb673f3c95db3133acb35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
