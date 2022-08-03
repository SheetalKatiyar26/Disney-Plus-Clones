import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHFoA-Q3gG_Dz6qvo-S_1-Y0V6jILvdzc",
  authDomain: "disney-clone-47555.firebaseapp.com",
  databaseURL: "https://disney-clone-47555-default-rtdb.firebaseio.com",
  projectId: "disney-clone-47555",
  storageBucket: "disney-clone-47555.appspot.com",
  messagingSenderId: "651592295923",
  appId: "1:651592295923:web:b9c432d28a3e774f029e86",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
