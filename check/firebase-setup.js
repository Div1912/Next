import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyA7xdQ_NmD57dalDwmGOvHjeooiXvaDWqo",
  authDomain: "skillnavigator-13d12.firebaseapp.com",
  projectId: "skillnavigator-13d12",
  storageBucket: "skillnavigator-13d12.firebasestorage.app",
  messagingSenderId: "71439730616",
  appId: "1:71439730616:web:6ae00cc9f2627152d2714d",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
