
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiIrMxOlXwiQdorGbWVizbdj2XUvSRd7g",
  authDomain: "taza-6596c.firebaseapp.com",
  projectId: "taza-6596c",
  storageBucket: "taza-6596c.appspot.com",
  messagingSenderId: "613224360553",
  appId: "1:613224360553:web:28b58d71a92acace9550f8"
};

const app = initializeApp(firebaseConfig);
export const initFiresotre = ()=> app