import React, { useState } from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import TopButtons from '../components/dashboard/TopButtons'
import Title from '../components/dashboard/Title'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from '../utils/firebase'

export default function Dashboard() {
    const StyledContainer = styled(Grid)`
    background-color: #101924;
    border-radius: 40px;
    height: 100vh;
    margin: 1rem 3rem 1rem 3rem;
    `

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    return ( 
        <StyledContainer>
            <TopButtons /> 
            <Title />
        </StyledContainer>
    )
}
