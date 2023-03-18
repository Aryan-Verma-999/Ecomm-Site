// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHOrbo_EUO7fCNN2SH2UVpbQOW5FdyNLo",
  authDomain: "spiritual-being-189f6.firebaseapp.com",
  projectId: "spiritual-being-189f6",
  storageBucket: "spiritual-being-189f6.appspot.com",
  messagingSenderId: "512863844756",
  appId: "1:512863844756:web:160ec00d34198a3d33f781",
  measurementId: "G-LKHQQ8LFM5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };