// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQwVx-dveszTfn3LntDFNutWE5JS4P-aQ",
  authDomain: "fir-auth-help.firebaseapp.com",
  projectId: "fir-auth-help",
  storageBucket: "fir-auth-help.appspot.com",
  messagingSenderId: "153914243437",
  appId: "1:153914243437:web:ac39d75aa971560f9fc264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export default app;