// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCThMJ152TqmAif5GUBjlcvTwhO7zC2OZA",
  authDomain: "betcloud-storm.firebaseapp.com",
  projectId: "betcloud-storm",
  storageBucket: "betcloud-storm.appspot.com",
  messagingSenderId: "925098626905",
  appId: "1:925098626905:web:cbeb3281b3ad08b69c4648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app