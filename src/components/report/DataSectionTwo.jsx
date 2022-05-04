import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { SmallGauge, ProgressBar } from '../ui/dashboard/Components'

export const DataSectionTwo = () => {
  return (
    <>
        <Grid direction="row" container>
            <Grid item xs={6}>
                <Title>TURNOVER BY BET CODE</Title>
            </Grid>
            <Grid item xs={6}>
                <Title>TURNOVER BY BET TYPE</Title>
            </Grid>
        </Grid>

        <Grid direction="row" container>
            <Grid item direction='row' xs={6}>
                <Grid container>
                    <Grid item xs={4}>
                        <SGauge />
                    </Grid>
                    <Grid item direction='column' xs={8}>
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-70px', marginLeft: '-380px', color: 'white'}}>Recreational</h5>
                            <P1 percent='89%' color1='#FFF' />
                        </Grid> 
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-15px', marginLeft: '-420px', color: 'white'}}>Player</h5>
                            <P2 percent='25%' color='#7E25FF' />
                        </Grid> 
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-15px', marginLeft: '-420px', color: 'white'}}>Sharp</h5>
                            <P3 percent='46%' color='#E584F3' />
                        </Grid> 
                    </Grid>
                    
                </Grid>
                
            </Grid>
            <Grid item xs={6}>
            <Grid container>
                    <Grid item xs={4}>
                        <SGauge />
                    </Grid>
                    <Grid item direction='column' xs={8}>
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-70px', marginLeft: '-380px', color: 'white'}}>Recreational</h5>
                            <P1 percent='89%' color1='#FFF' />
                        </Grid> 
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-15px', marginLeft: '-420px', color: 'white'}}>Player</h5>
                            <P2 percent='25%' color='#7E25FF' />
                        </Grid> 
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-15px', marginLeft: '-420px', color: 'white'}}>Sharp</h5>
                            <P3 percent='46%' color='#E584F3' />
                        </Grid> 
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
        
        
    </>
  )
}

const Title = styled.h4`
padding-left: 10%;
    font-size: 22px;
    text-align: left;
    font-weight: lighter;
    font-family: 'GothamMedium';
    color: white;
`

const SGauge = styled(SmallGauge)`
    transform: scale(0.7);
`

const P1 = styled(ProgressBar)`
    transform: scale(0.6);
`

const P2 = styled(ProgressBar)`
    transform: scale(0.6);
`

const P3 = styled(ProgressBar)`
    transform: scale(0.6);
`

const P4 = styled(ProgressBar)`
    transform: scale(0.6);
`
const PText = styled.p`
    text-align: left;
    font-size: 12px;
    color: white;
    padding-left: 10px;
`