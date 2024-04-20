// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByR-omRkStv1Ks62md5oOpYIBACJsAs0A",
  authDomain: "react-auth-integration-985f4.firebaseapp.com",
  projectId: "react-auth-integration-985f4",
  storageBucket: "react-auth-integration-985f4.appspot.com",
  messagingSenderId: "435210564215",
  appId: "1:435210564215:web:fb34665dbbb60ffa3e4c72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
