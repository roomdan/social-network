// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr7WGQyrqT7NFCiINgXqgYnCqTV9OS87I",
  authDomain: "social-network-ff485.firebaseapp.com",
  projectId: "social-network-ff485",
  storageBucket: "social-network-ff485.appspot.com",
  messagingSenderId: "880156827540",
  appId: "1:880156827540:web:a85f0303518045f6ebf981"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
const GitHubProvider = new firebase.auth.GithubAuthProvider();

export {db, GoogleProvider, firebase, GitHubProvider}
