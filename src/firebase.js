// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyB7NP3Dfp3DywLu_Gd1-bngZnuYnZpvqDM",
    authDomain: "church-lane.firebaseapp.com",
    databaseURL: "https://church-lane.firebaseio.com",
    projectId: "church-lane",
    storageBucket: "church-lane.appspot.com",
    messagingSenderId: "878656361937"
  };
firebase.initializeApp(config);
export default firebase;
