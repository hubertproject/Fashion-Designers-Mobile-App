import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyhmjcRKokXVT3sSp32N2_Bm3gNndUi1A",
    authDomain: "fashionms-dea49.firebaseapp.com",
    projectId: "fashionms-dea49",
    storageBucket: "fashionms-dea49.appspot.com",
    messagingSenderId: "1097892931737",
    appId: "1:1097892931737:web:1087eaf8555768b418f008",
    measurementId: "G-0RZVBX6Z5N"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;