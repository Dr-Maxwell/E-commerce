/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBjy56sqk8nJ70ikU1o0k3PTnoXG2zxBFA",
  authDomain: "ecommerce-bf8b1.firebaseapp.com",
  projectId: "ecommerce-bf8b1",
  storageBucket: "ecommerce-bf8b1.appspot.com",
  messagingSenderId: "176565365256",
  appId: "1:176565365256:web:2d54457a0a2463138f7fbd",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
