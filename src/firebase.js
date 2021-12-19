import {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANJaSAxYC3IhoL8GciCyhyyE6ShSaGV8I",
  authDomain: "facebook-messenger-clone-52568.firebaseapp.com",
  projectId: "facebook-messenger-clone-52568",
  storageBucket: "facebook-messenger-clone-52568.appspot.com",
  messagingSenderId: "998707136280",
  appId: "1:998707136280:web:40fa97473fffc6b1a9406d",
  measurementId: "G-EP5TLZ2S68"
}; 

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);