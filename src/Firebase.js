import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDd4lQvDG4mpeI1KDPQlmtK5tBCJb_DNfE",
    authDomain: "coincap-c3498.firebaseapp.com",
    projectId: "coincap-c3498",
    storageBucket: "coincap-c3498.appspot.com",
    messagingSenderId: "38411405440",
    appId: "1:38411405440:web:267ba7ecf0930ee3223e65",
    measurementId: "G-CWG4PSRM29"
  };
 
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  export {auth, provider};