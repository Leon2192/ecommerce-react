import firebase from "./firebase";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvqiBqyBWgZsbg6uISUMODs-yAZd-i_Os",
  authDomain: "ecommerce-react-7e286.firebaseapp.com",
  projectId: "ecommerce-react-7e286",
  storageBucket: "ecommerce-react-7e286.appspot.com",
  messagingSenderId: "607974250984",
  appId: "1:607974250984:web:e6a2d67e127d3ef492ac5d",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
export { auth };
