import styled from 'styled-components'
import { Grid } from '@mui/material'
import React from 'react'

export default function StyledContainer({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}


const Container = styled(Grid)`
    background-color: #101924;
    border-radius: 40px;
    height: fit-content;
    margin: 1rem 3rem 1rem 3rem;
    `
