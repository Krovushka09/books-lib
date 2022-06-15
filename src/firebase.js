import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAwF6k8XJmWO17u0hoUIUnS4ouDL8gq2ws",
    authDomain: "inout-exmaple.firebaseapp.com",
    projectId: "inout-exmaple",
    storageBucket: "inout-exmaple.appspot.com",
    messagingSenderId: "708582893687",
    appId: "1:708582893687:web:1cc6ce4636aecc68017e72"
  };

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'bookslib');

export {colRef, db};
