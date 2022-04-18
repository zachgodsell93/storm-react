import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import DashboardButton from '../ui/DashboardButton'
import { Link } from 'react-router-dom'

export default function TopButtons(props) {
    const StyledGrid = styled(Grid)`
        padding: 2rem 3rem 2rem 3rem;

    `

    const Divider = styled.div`
        height: 1px;
        width: 100%;
        background-color: ${props.dividerColor};
    `

  return (
    <>
        <StyledGrid container columnSpacing={2}>
            <Grid item>
                <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                    <DashboardButton text='Overview' />
                </Link> 
            </Grid>
            <Grid item>
                <Link to='/documents' style={{ textDecoration: 'none' }}>
                    <DashboardButton active text='Documents' />
                </Link>
            </Grid>
            <Grid item>
                <DashboardButton text='Statistics' />
            </Grid>
        </StyledGrid>
        <Divider />
    </>

  )
}
