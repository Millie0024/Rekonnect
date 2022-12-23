import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBBhXKUuu7fVwDuy3xr2_A7CVLRG_ee8DU",
  authDomain: "auth-62e70.firebaseapp.com",
  databaseURL: "https://auth-62e70-default-rtdb.firebaseio.com/",
  projectId: "auth-62e70",
  storageBucket: "auth-62e70.appspot.com",
  messagingSenderId: "846971646971",
  appId: "1:846971646971:web:125eb7e40ebae5233e115e",
  measurementId: "G-F9B716H9F5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
