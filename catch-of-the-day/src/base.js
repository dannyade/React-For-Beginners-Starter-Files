import Rebase from "re-base";
import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyACIYxZ2YbCV1Irzg7kdkzEWCkGDXxxTko",
    authDomain: "catch-of-the-day-danny-ade.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-danny-ade-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass({
 apiKey: "AIzaSyACIYxZ2YbCV1Irzg7kdkzEWCkGDXxxTko",
  authDomain: "catch-of-the-day-danny-ade.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-danny-ade-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-danny-ade",
  storageBucket: "catch-of-the-day-danny-ade.appspot.com",
  messagingSenderId: "218901512701",
  appId: "1:218901512701:web:bac02ef8fe23d84e1f9994",
  measurementId: "G-5DZTWCDMVG"
});

export {firebaseApp};

export default base; 