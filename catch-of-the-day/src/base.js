import Rebase from "re-base";
import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyACIYxZ2YbCV1Irzg7kdkzEWCkGDXxxTko",
    authDomain: "catch-of-the-day-danny-ade.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-danny-ade-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base; 