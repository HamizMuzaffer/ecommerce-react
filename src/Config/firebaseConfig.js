// Firebase Initialization
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { ref,getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDYeczJr1w054ghZrU3hWOeBTzo8ZsbTN4",
  authDomain: "ecommerce-react-9e787.firebaseapp.com",
  projectId: "ecommerce-react-9e787",
  storageBucket: "ecommerce-react-9e787.appspot.com",
  messagingSenderId: "350800647210",
  appId: "1:350800647210:web:4d5380cd7f4aa98d47df53"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
export const storageRef = ref(storage, 'productImages/')