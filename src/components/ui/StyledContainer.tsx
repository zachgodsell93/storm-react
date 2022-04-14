import styled from 'styled-components'
import { Grid } from '@mui/material'
import React from 'react'

export default function StyledContainer(props) {

    const Container = styled(Grid)`
    background-color: ${props.color};
    border-radius: 40px;
    height: fit-content;
    margin: 1rem 3rem 1rem 3rem;
    `

  return (
    <Container>
        {props.children}
    </Container>
  )
}


