// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLOve85S_An8ihdbJGvBBuuBki-FKB3Wc",
  authDomain: "mkbooks-a4b7c.firebaseapp.com",
  projectId: "mkbooks-a4b7c",
  storageBucket: "mkbooks-a4b7c.appspot.com",
  messagingSenderId: "357169058633",
  appId: "1:357169058633:web:b9bf7d720a999160f1c098",
  measurementId: "G-F1WP3Z0LR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);