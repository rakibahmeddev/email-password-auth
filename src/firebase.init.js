// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBaxJIsdxbTr43C0LH2xxfDn3ygW0NL0zg',
  authDomain: 'email-password-auth-b50eb.firebaseapp.com',
  projectId: 'email-password-auth-b50eb',
  storageBucket: 'email-password-auth-b50eb.firebasestorage.app',
  messagingSenderId: '164872859664',
  appId: '1:164872859664:web:869c1e03ed2778ead2da95',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);