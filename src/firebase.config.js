// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvB9MTkdNGK0KwLhK94cVtcEplE5icfOM",
  authDomain: "vartuetech-d477b.firebaseapp.com",
  projectId: "vartuetech-d477b",
  storageBucket: "vartuetech-d477b.appspot.com",
  messagingSenderId: "447987619333",
  appId: "1:447987619333:web:4a7c77e537af7a8c286e6c",
  measurementId: "G-GWGC7KEK0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);