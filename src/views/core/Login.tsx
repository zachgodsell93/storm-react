import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth'
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";
import app from '../../utils/firebase-config';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const auth = getAuth(app);
    const db = getFirestore(app)
    
    const logInWithEmailAndPassword = async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
          console.error(err);
          alert(err.message);
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

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    let navigate = useNavigate();


    return (
        <div>Login</div>
    )
}
