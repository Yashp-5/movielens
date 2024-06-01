// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpWPgKn8cjudatWhCnBdvPDCV6KEJusSU",
  authDomain: "movielens-ec769.firebaseapp.com",
  projectId: "movielens-ec769",
  storageBucket: "movielens-ec769.appspot.com",
  messagingSenderId: "366992667846",
  appId: "1:366992667846:web:e00d1fb6aedde68c5893c7",
  measurementId: "G-LH0CBX9ZX0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };