// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYoggU9RpVPv5Q-mQljhQlrlqMqsaSP0Q",
  authDomain: "ware-house-project.firebaseapp.com",
  projectId: "ware-house-project",
  storageBucket: "ware-house-project.appspot.com",
  messagingSenderId: "36328720182",
  appId: "1:36328720182:web:4e54d1016ad1229e3b1597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;