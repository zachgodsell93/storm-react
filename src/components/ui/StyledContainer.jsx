import styled from 'styled-components'
import { Grid } from '@mui/material'
import React from 'react'

export default function StyledContainer(props) {

    const Container = styled(Grid)`
    background-color: ${props.color};
    border-radius: 40px;
    height: max-content;
    margin: 1rem 3rem 1rem 3rem;
    width: 1520px;
    `

  return (
    <Container>
        {props.children}
    </Container>
  )
}


