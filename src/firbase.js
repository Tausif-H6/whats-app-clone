// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDDw1mSZBCBBbV392eyLiH8hDareZzwOE4",
    authDomain: "whatsapp-clone-b850d.firebaseapp.com",
    projectId: "whatsapp-clone-b850d",
    storageBucket: "whatsapp-clone-b850d.appspot.com",
    messagingSenderId: "286599850270",
    appId: "1:286599850270:web:1b3085a45d92dcb4a9c10f",
    measurementId: "G-LXE37HTV0D"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  // const provider= new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;