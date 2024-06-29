"use client"
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { createContext } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyDtl0AuIXwlcppIlhlAnSwwF1Bv1thgmTg",
  authDomain: "societal-99af3.firebaseapp.com",
  projectId: "societal-99af3",
  storageBucket: "societal-99af3.appspot.com",
  messagingSenderId: "137759348273",
  appId: "1:137759348273:web:9ca4c6faf9a2c2e397e710",
  measurementId: "G-2165WQD2JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)



// export const FirebaseProvider = (props) =>{
//   return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>
// }


export {Auth, Provider, db, storage};
