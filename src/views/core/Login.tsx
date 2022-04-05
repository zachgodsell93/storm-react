import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from '../../utils/firebase';
import { Grid } from '@mui/material';
import background from '../../assets/images/background.png'

export default function Login() {
    const Background = styled(Grid)`
        background-image: url(${background});
        height: 100vh;
    `


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);

    return (
        <Background>
            <p>Test</p>
        </Background>
    )
}
