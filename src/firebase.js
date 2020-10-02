import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABRd8jCalddHK9zj93ez1zKdRaQKe2E20",
  authDomain: "tinder-c.firebaseapp.com",
  databaseURL: "https://tinder-c.firebaseio.com",
  projectId: "tinder-c",
  storageBucket: "tinder-c.appspot.com",
  messagingSenderId: "531700347982",
  appId: "1:531700347982:web:07a7cc4f00f8c867eb7f1f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
