import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDIArNkUIhWlFWab2qHiKfjU4KXQC7_-40",
    authDomain: "red-pirata.firebaseapp.com",
    projectId: "red-pirata",
    storageBucket: "red-pirata.appspot.com",
    messagingSenderId: "1056023840552",
    appId: "1:1056023840552:web:97a1540f9cf03e3e2e321d"
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseStorage = getStorage();
