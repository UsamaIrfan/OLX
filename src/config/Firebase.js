import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDe-nHU1uPG_IyXhl_TWWqX2g1YNr9hwNI",
  authDomain: "folx-7fde7.firebaseapp.com",
  databaseURL: "https://folx-7fde7.firebaseio.com",
  projectId: "folx-7fde7",
  storageBucket: "folx-7fde7.appspot.com",
  messagingSenderId: "766559390143",
  appId: "1:766559390143:web:fbdee10234f7195fa3f90a",
  measurementId: "G-QB9F0744LN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase ,  auth , projectStorage , projectFirestore, timeStamp }