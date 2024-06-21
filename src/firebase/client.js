import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzyaWOji0d2tCbMEyFHwQk5-BfT4_GsNo",
  authDomain: "proyecto-ecommerce-apple.firebaseapp.com",
  projectId: "proyecto-ecommerce-apple",
  storageBucket: "proyecto-ecommerce-apple.appspot.com",
  messagingSenderId: "948862768166",
  appId: "1:948862768166:web:3d0809110537016f2682e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);