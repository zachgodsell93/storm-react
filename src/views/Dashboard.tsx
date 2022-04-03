import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import TopButtons from '../components/dashboard/TopButtons'
import Title from '../components/dashboard/Title'


export default function Dashboard() {
    const StyledContainer = styled(Grid)`
    background-color: #101924;
    border-radius: 40px;
    height: 100vh;
    margin: 1rem 3rem 1rem 3rem;
    `

    return (
        <StyledContainer>
            <TopButtons /> 
            <Title />
        </StyledContainer>
    )
}
