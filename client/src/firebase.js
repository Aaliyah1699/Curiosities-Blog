// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'blog-d3908.firebaseapp.com',
    projectId: 'blog-d3908',
    storageBucket: 'blog-d3908.appspot.com',
    messagingSenderId: '812514785626',
    appId: '1:812514785626:web:912890e27d3c43db159b63',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
