// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn41tF7y7mMvKUbXhgEyFwNNUbHlfNTWM",
  authDomain: "p-skool.firebaseapp.com",
  projectId: "p-skool",
  storageBucket: "p-skool.appspot.com",
  messagingSenderId: "1028172283910",
  appId: "1:1028172283910:web:15f9cfe1152e32bd174387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;