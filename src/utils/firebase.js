import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth'
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

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

const auth = getAuth(app);
const db = getFirestore(app)

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
  };

export {
  auth,
  db,
  logInWithEmailAndPassword,
  sendPasswordReset,
  logout,
};