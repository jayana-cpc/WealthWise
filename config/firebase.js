// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-_yVx8sZYJ5-zlToQ5fKh3_hTS4uQ920",
  authDomain: "wealthwise-46f60.firebaseapp.com",
  databaseURL: "https://wealthwise-46f60-default-rtdb.firebaseio.com",
  projectId: "wealthwise-46f60",
  storageBucket: "wealthwise-46f60.appspot.com",
  messagingSenderId: "1038265631668",
  appId: "1:1038265631668:web:307904228298d125c0e8e1",
  measurementId: "G-NXKK636ZDL"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);