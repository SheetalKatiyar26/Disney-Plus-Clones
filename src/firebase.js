import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCUYddo6MS9ksN9FcT-Sm4aIFAlxvCutPk",
  authDomain: "disney-d2036.firebaseapp.com",
  databaseURL: "https://disney-d2036-default-rtdb.firebaseio.com",
  projectId: "disney-d2036",
  storageBucket: "disney-d2036.appspot.com",
  messagingSenderId: "115964213881",
  appId: "1:115964213881:web:97637f2ccc5796af2c32a8"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
