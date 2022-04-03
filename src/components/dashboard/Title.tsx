import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import{ ReactComponent as Logo} from "../../assets/images/SLogoWhite.svg"

export default function Title() {

    const T = styled.h1`
        font-family: "GothamBold";
        font-size: 28px;
        line-height: 30px;
        color: white;
    `
    const StyledLogo = styled(Logo)`
        color: white;
        height: 33px;

    `

    return (
        <Grid container >
            <Grid item>
                <T>AVERAGE </T>
            </Grid>
            <Grid item>
                <StyledLogo />
            </Grid>
            <Grid item>
                <T> RATING</T>
            </Grid>
        </Grid>
    )
}
