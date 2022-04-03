import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import DashboardButton from '../ui/DashboardButton'

export default function TopButtons() {
    const StyledGrid = styled(Grid)`
        padding: 2rem 3rem 2rem 3rem;

    `

    const Divider = styled.div`
        height: 1px;
        width: 100%;
        background-color: #FFF;
    `

  return (
    <>
        <StyledGrid container columnSpacing={2}>
            <Grid item>
                <DashboardButton text='Overview' />
            </Grid>
            <Grid item>
                <DashboardButton text='Documents' />
            </Grid>
            <Grid item>
                <DashboardButton text='Statistics' />
            </Grid>
        </StyledGrid>
        <Divider />
    </>

  )
}
