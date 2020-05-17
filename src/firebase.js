import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDKVK3Gptavgv4OdR3oixxmNL-kNs5MuuM",
    authDomain: "pages-972b9.firebaseapp.com",
    databaseURL: "https://pages-972b9.firebaseio.com",
    projectId: "pages-972b9",
    storageBucket: "pages-972b9.appspot.com",
    messagingSenderId: "975675010254",
    appId: "1:975675010254:web:0ff8f8545c801f92fb749f",
    measurementId: "G-ZHE4WM921K"
  };

    firebase.initializeApp(firebaseConfig);
    export const auth = firebase.auth();
    export const firestore = firebase.firestore();