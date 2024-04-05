import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkTga3h2-GYkJM1Uqg6SkpV606H6q7jug",
  authDomain: "dummy-83a06.firebaseapp.com",
  projectId: "dummy-83a06",
  storageBucket: "dummy-83a06.appspot.com",
  messagingSenderId: "119938484991",
  appId: "1:119938484991:web:655f3e3d79a6785a00daca"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoreDB = getFirestore(app);
