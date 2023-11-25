// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-olVTYSpY1QjiT-e1JE9c7vfiPfaiIoE",
  authDomain: "ducmanh-3364c.firebaseapp.com",
  projectId: "ducmanh-3364c",
  storageBucket: "ducmanh-3364c.appspot.com",
  messagingSenderId: "752190858679",
  appId: "1:752190858679:web:f0df0be2486154de5e3432",
  measurementId: "G-BRF1HY16HV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const analytics = getAnalytics(app);

//setup google
export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const auth = getAuth();
auth.languageCode = 'it';
// provider.setCustomParameters({
//   'login_hint': 'vuvantienhd96@gmail.com'
// });



// Initialize Firebase Authentication and get a reference to the service





