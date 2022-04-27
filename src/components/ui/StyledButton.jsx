import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'

export default function StyledButton(props) { 
  const SButton = styled(Button)`
  && {
      height: 56px;
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
  return (
    <SButton onClick={() => props.onClick}>
      {props.children}
    </SButton>
  )
}
