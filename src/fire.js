import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBKjshixG_WDPO7PH9ZWZDHs7GiUH87lnw",
    authDomain: "react-firebase-2433f.firebaseapp.com",
    projectId: "react-firebase-2433f",
    storageBucket: "react-firebase-2433f.appspot.com",
    messagingSenderId: "1066883549101",
    appId: "1:1066883549101:web:5c757672a56e89a99f0324",
    measurementId: "G-3RJBYPWW59"
  };

var fire = firebase.initializeApp(firebaseConfig);

export default fire;