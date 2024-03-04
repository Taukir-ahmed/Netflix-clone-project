
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDeec3BinqVJLilb8wpMNlebqe1_wHeMk",
  authDomain: "react-netflix-clone-398a9.firebaseapp.com",
  projectId: "react-netflix-clone-398a9",
  storageBucket: "react-netflix-clone-398a9.appspot.com",
  messagingSenderId: "493541912617",
  appId: "1:493541912617:web:f96384e902721959946c38",
  measurementId: "G-NPRWFGGVKM"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);