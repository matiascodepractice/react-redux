// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWw7rxzQgfn2g_GNRVASDuEVDHpSqG7Gk",
  authDomain: "react-fb-fee66.firebaseapp.com",
  projectId: "react-fb-fee66",
  storageBucket: "react-fb-fee66.firebasestorage.app",
  messagingSenderId: "846274779223",
  appId: "1:846274779223:web:6599fddf1cbd36fe896b12",
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp);
export const FirebaseDB = getFirestore(Firebaseapp);
