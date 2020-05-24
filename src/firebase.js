import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";


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

   // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export default firebase;

      