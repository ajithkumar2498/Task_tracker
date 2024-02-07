// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHr7AtXu1Wdh1cdKqi0IePX9c9nQA-ymo",
  authDomain: "task-tracker-new-45569.firebaseapp.com",
  projectId: "task-tracker-new-45569",
  storageBucket: "task-tracker-new-45569.appspot.com",
  messagingSenderId: "484240306018",
  appId: "1:484240306018:web:2ea8fffc92e92f9afec63b",
  measurementId: "G-J9SXPGVKYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);