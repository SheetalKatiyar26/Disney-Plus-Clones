import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYV75X4Mb59lpBlukgjK8M05G4rD6buvI",
  authDomain: "disneyplus-89406.firebaseapp.com",
  databaseURL: "https://disneyplus-89406-default-rtdb.firebaseio.com",
  projectId: "disneyplus-89406",
  storageBucket: "disneyplus-89406.appspot.com",
  messagingSenderId: "635389230996",
  appId: "1:635389230996:web:014454b738a2cc4b559981"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
