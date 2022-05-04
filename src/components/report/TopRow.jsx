import React from 'react'
import { Button, Grid } from '@mui/material'
import styled from 'styled-components'

export const TopRow = () => {
    return (
        <Grid container padding={3}>
            <Grid item>
                <Grid item>
                    <BackButton>Test</BackButton>
                </Grid>
                <Grid item>
                    {/* Name */}
                </Grid>
            </Grid>
            <Grid item>
                {/* TOGGLE SWITCHES */}
            </Grid>
            <Grid item>
                {/* Include Bonus bets */}
            </Grid>
        </Grid>
        
    )
}

const BackButton = styled(Button)`
    &&{
        height: 56px;
        width: 56px;
        background-color: #787D82;
    }
    
`