// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC21yAEzD5M6QaQwv2uLQwLHJV1EZR2eVE",
  authDomain: "user-email-password-auth-3edcd.firebaseapp.com",
  projectId: "user-email-password-auth-3edcd",
  storageBucket: "user-email-password-auth-3edcd.appspot.com",
  messagingSenderId: "175702213781",
  appId: "1:175702213781:web:21a8bcc45a0b207eb6079c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
