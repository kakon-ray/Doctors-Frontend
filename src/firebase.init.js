// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
  
  apiKey: "AIzaSyACAJa_VVZy11Qc02G_RgdDMOcqjhd8_dU",
  authDomain: "doctors-portal-8a03e.firebaseapp.com",
  projectId: "doctors-portal-8a03e",
  storageBucket: "doctors-portal-8a03e.appspot.com",
  messagingSenderId: "169410669000",
  appId: "1:169410669000:web:d440da6f184dfbf1a9b8fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
