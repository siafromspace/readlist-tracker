import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "read-list-tracker1705.firebaseapp.com",
    projectId: "read-list-tracker1705",
    storageBucket: "read-list-tracker1705.appspot.com",
    messagingSenderId: "380173001872",
    appId: "1:380173001872:web:9259f5ebf8cb2803cfa415",
    measurementId: "G-PL432P6Z6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()