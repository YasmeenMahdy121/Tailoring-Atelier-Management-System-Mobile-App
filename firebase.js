import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJbDPvlKnrmHP92D3AyWfibZh0GFei6PQ",
  authDomain: "iti-graduation-project-d5b5e.firebaseapp.com",
  databaseURL: "https://iti-graduation-project-d5b5e-default-rtdb.firebaseio.com",
  projectId: "iti-graduation-project-d5b5e",
  storageBucket: "iti-graduation-project-d5b5e.appspot.com",
  messagingSenderId: "476987570499",
  appId: "1:476987570499:web:15a70572145d446c4997f6",
  measurementId: "G-VE5T7CGYSK"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth, firestore };