// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ5BCyF--hj8LR_w_9kjPq4GXxBvvLTeQ",
  authDomain: "management-system-92103.firebaseapp.com",
  projectId: "management-system-92103",
  storageBucket: "management-system-92103.firebasestorage.app",
  messagingSenderId: "655453965079",
  appId: "1:655453965079:web:f68395e58dbbea591bc552",
  measurementId: "G-J5M7T395PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth
 export const db = getFirestore