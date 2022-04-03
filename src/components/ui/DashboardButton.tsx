import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'

export default function DashboardButton(props) {

    const B = styled(Button)`
    && {
        height: 36px;
        width: 124px;
        text-align: center;
        line-height: 36px;
        background-color: #FFF;
        border-radius: 12px;
        position: relative;
        color: black;
        font-family: "GothamMedium";
        font-weight: normal;
        :hover {
            background-color: #359EEA;
            color: #FFF;
        }
        :focus {
            background-color: #359EEA;
            color: #FFF;
        }
    }
    `

    return (
        <B>
            {props.text}
        </B>
    )
}
