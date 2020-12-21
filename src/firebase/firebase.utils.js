import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCIA3bLfl8wN0omd2V9yx2tJc5JdmbSBs0",
  authDomain: "crwn-clothing-27087.firebaseapp.com",
  projectId: "crwn-clothing-27087",
  storageBucket: "crwn-clothing-27087.appspot.com",
  messagingSenderId: "162197728927",
  appId: "1:162197728927:web:76554167530d31f1de3caa",
  measurementId: "G-2BW3DB8DP6",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, extraData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...extraData,
      });
    } catch (e) {
      console.log("Error creating user", e.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
