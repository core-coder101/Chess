// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaU8oFQ-dB3onghT1RjimZxsQvzkP-3QM",
  authDomain: "chess-8426e.firebaseapp.com",
  projectId: "chess-8426e",
  storageBucket: "chess-8426e.appspot.com",
  messagingSenderId: "607251598004",
  appId: "1:607251598004:web:dd52ca4b826bbbcbbbe5e1",
  measurementId: "G-CR431E5BGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db, GoogleAuthProvider, signInWithPopup };