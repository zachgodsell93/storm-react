import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { SmallGauge } from '../ui/dashboard/Components'
import { PR1, PR2, PR3, PR4, PR5, PR6, PR7, PR8 } from '../ui/report/Components'

export const DataSectionTwo = () => {
  return (
    <>
        <Grid direction="row" container paddingTop={4}>
            <Grid  marginLeft={15} item xs={5}>
                <Title>TURNOVER BY BET CODE</Title>
            </Grid>
            <Grid item xs={4}>
                <Title>TURNOVER BY BET TYPE</Title>
            </Grid>
        </Grid>

        <Grid direction="row" container>
            <Grid item direction='row' xs={6}>
                <Grid container marginLeft={15}>
                    <Grid item xs={3}>
                        <SGauge />
                    </Grid>
                    <Grid item direction='column' xs={8}>
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Horse</h5>
                            <P1 percent='45%' color='#FFF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Greyhound</h5>
                            <P2 percent='25%' color='#A618F8' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Harness</h5>
                            <P3 percent='98%' color='#7E24FF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Sport</h5>
                            <P4 percent='46%' color='#E584F3' />
                        </Grid>
                    </Grid>
                    
                </Grid>
                
            </Grid>
            <Grid item xs={6}>
            <Grid container>
                    <Grid item xs={3}>
                        <SGauge />
                    </Grid>
                    <Grid item direction='column' xs={8}>
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Fixed</h5>
                            <P5 percent='89%' color='#FFF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Exotics</h5>
                            <P6 percent='25%' color='#A618F8' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Multi</h5>
                            <P7 percent='12%' color='#7E24FF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Tote</h5>
                            <P8 percent='46%' color='#E584F3' />
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

const P1 = styled(PR1)`
    transform: scale(0.6);
    margin-top: -40px;
`

const P2 = styled(PR2)`
    transform: scale(0.6);
    margin-top: -40px;
`

const P3 = styled(PR3)`
    transform: scale(0.6);
    margin-top: -40px;
`

const P4 = styled(PR4)`
    transform: scale(0.6);
    margin-top: -40px;
`

const P5 = styled(PR5)`
    transform: scale(0.6);
    margin-top: -40px;
`

const P6 = styled(PR6)`
    transform: scale(0.6);
    margin-top: -40px;
`

const P7 = styled(PR7)`
    transform: scale(0.6);
    margin-top: -40px;
`

const P8 = styled(PR8)`
    transform: scale(0.6);
    margin-top: -40px;
`
const PText = styled.p`
    text-align: left;
    font-size: 12px;
    color: white;
    padding-left: 10px;
`