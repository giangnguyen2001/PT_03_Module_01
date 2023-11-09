// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRAMPJZfLC6gXrFV2J3XXKRYHoDL4LNSg",
  authDomain: "aiimagegeneration-c2af8.firebaseapp.com",
  databaseURL:
    "https://aiimagegeneration-c2af8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aiimagegeneration-c2af8",
  storageBucket: "aiimagegeneration-c2af8.appspot.com",
  messagingSenderId: "559175585623",
  appId: "1:559175585623:web:9c2fc49740fca34e237812",
  measurementId: "G-0QKDQ2REMM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth(app);

let Email = document.getElementById("email");
let Password = document.getElementById("password");
let MainForm = document.getElementById("MainForm");

let RegisterUer = (evt) => {
  evt.preventDefault();
  createUserWithEmailAndPassword(auth, Email.value, Password.value)
    .then((Credentials) => {
      console.log(Credentials);
      window.location = "./login.html";
    })
    .catch((error) => {
      alert(error.message);
      console.log(error.code);
      console.log(error.message);
    });
};
MainForm.addEventListener("submit", RegisterUer);
