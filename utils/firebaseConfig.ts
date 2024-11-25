/** @format */
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/functions';
const firebaseConfig = {
    apiKey: "AIzaSyAXPnMCzgm36SNJDD-q_Z-z0oBOFwlLpP0",
    authDomain: "apprex-practice.firebaseapp.com",
    databaseURL: "https://apprex-practice-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "apprex-practice",
    storageBucket: "apprex-practice.firebasestorage.app",
    messagingSenderId: "776216721034",
    appId: "1:776216721034:web:530cec631b77f8ff1a1f73",
    measurementId: "G-52M17V0V86"
  };

  
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();
export const storage = firebase.storage();
export const database = firebase.database()

export default firebase