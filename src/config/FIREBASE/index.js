import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyB-MG6Uy9e6orpIGAa4awGgRI29KZptMzs",
    authDomain: "praktikum09-2fa85.firebaseapp.com",
    projectId: "praktikum09-2fa85",
    databaseURL: "https://praktikum09-2fa85-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "praktikum09-2fa85.appspot.com",
    messagingSenderId: "371627703828",
    appId: "1:371627703828:web:7a429f231b52e6fb3a7101"
});

const FIREBASE = firebase;

export default FIREBASE;
