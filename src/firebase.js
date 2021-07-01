import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWl6oSMaPQSabF0r2FhE7WLgmACFUD0mg",
  authDomain: "netflix-clone-615f6.firebaseapp.com",
  projectId: "netflix-clone-615f6",
  storageBucket: "netflix-clone-615f6.appspot.com",
  messagingSenderId: "514334692307",
  appId: "1:514334692307:web:a81bd7d8bec59caa499526",
  measurementId: "G-5W72JK69SM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
