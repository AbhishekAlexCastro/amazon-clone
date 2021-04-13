import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAhDIGbBKBGhncYm0R9IGlBiLbCkPLqSUc",
    authDomain: "clone-d676c.firebaseapp.com",
    projectId: "clone-d676c",
    storageBucket: "clone-d676c.appspot.com",
    messagingSenderId: "6589360078",
    appId: "1:6589360078:web:c1cfa95f9f6e89e60f6d9f",
    measurementId: "G-4WHKZ5MQGL"
  });

  const db= firebase.firestore()

  export {db}