// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPo6elTGdto7WJhJKR00SKT-6m8Dz-8iA",
  authDomain: "whatsapp-307ee.firebaseapp.com",
  projectId: "whatsapp-307ee",
  storageBucket: "whatsapp-307ee.appspot.com",
  messagingSenderId: "817356120282",
  appId: "1:817356120282:web:f2eea90de2d03e01e285e3",
  measurementId: "G-1YW5QZSSZZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth,GoogleAuthProvider} from "firebase/auth";
// import { getFirestore } from 'firebase/firestore'


// const firebaseConfig = {
//   apiKey: "AIzaSyCPo6elTGdto7WJhJKR00SKT-6m8Dz-8iA",
//   authDomain: "whatsapp-307ee.firebaseapp.com",
//   projectId: "whatsapp-307ee",
//   storageBucket: "whatsapp-307ee.appspot.com",
//   messagingSenderId: "817356120282",
//   appId: "1:817356120282:web:f2eea90de2d03e01e285e3",
//   measurementId: "G-1YW5QZSSZZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider };
// export default db;
