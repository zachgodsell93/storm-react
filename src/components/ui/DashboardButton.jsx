import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'

export const DashboardButton = ({
    text, 
    active=false,
}) => {
    let textColor = "#000"
    let backgroundColor = "#FFF"

    if(active){
        textColor = "#FFF"
        backgroundColor = "#359EEA"
    };

    const B = styled(Button)`
    && {
        height: 36px;
        width: 124px;
        text-align: center;
        line-height: 36px;
        background-color: ${backgroundColor};
        border-radius: 12px;
        position: relative;
        color: ${textColor};
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
            {text}
        </B>
    )
}
