import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from '../../utils/firebase';
import { Grid, TextField, Button } from '@mui/material';
import background from '../../assets/images/background.png'

export default function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate();

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading spinner
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);

    return (
        <Background>
            <LoginBox>
                <Grid container rowSpacing={4}>
                    <Grid item xs={12}>
                        <Title>Sign in to your account</Title>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth 
                        id='email' 
                        label='Email' 
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth 
                        id='password' 
                        label='Password' 
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SubmitButton 
                        onClick={logInWithEmailAndPassword(email,password)}>
                            Login
                        </SubmitButton>
                    </Grid>
                </Grid>                
            </LoginBox>
        </Background>
    )
}

// Styled Components

const Background = styled(Grid)`
    background-image: url(${background});
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const LoginBox = styled(Grid)`
    background-color: #fff;
    display: flex;
    max-width: 500px;
    flex-direction: column;
    text-align: center;
    padding: 30px;
    border-radius: 8px;

`
const Title = styled.h2`
    font-family: "GothamMedium";
    font-weight: lighter;
    font-size: 24px;
`
const SubmitButton = styled(Button)`
  && {
      height: 56px;
      width: 100%;
      text-align: center;
      line-height: 5px;
      border-radius: 16px;
      padding: 0 16px;
      position: relative;
      background-image: linear-gradient(to right, #66C5EF, #1467AE);
      color: #FFF;
      font-family: "GothamBold";
  }
  `