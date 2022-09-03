import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdipOvo4_HmA7TrPrQE723-1tzf3hwK5U",
    authDomain: "read-list-tracker1705.firebaseapp.com",
    projectId: "read-list-tracker1705",
    storageBucket: "read-list-tracker1705.appspot.com",
    messagingSenderId: "380173001872",
    appId: "1:380173001872:web:9259f5ebf8cb2803cfa415",
    measurementId: "G-PL432P6Z6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()