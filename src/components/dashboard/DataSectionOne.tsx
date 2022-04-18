import React from 'react'
import './dashboard.css'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import { LeftOne, LeftTwo, LeftThree, LeftFour, RightOne, RightTwo, ProgressBar, ProgressBar2, ProgressBar3, SmallGauge, LargeGauge} from '../ui/dashboard/Components'


export default function DataSectionOne() {

    

    return (
        <Grid container paddingTop={3}>
            <Grid item xs={4} paddingLeft={28}>
                <Grid item xs={12} marginBottom={3}>
                    <L1 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <L2 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <L3 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <L4 />
                </Grid>
                
            </Grid>

            <Grid item xs={4} justifyContent='center'>
                <LGauge />
            </Grid>

            <RightGrid item xs={4}>
                <Grid item xs={12} marginBottom={3}>
                    <R1 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <R2 />
                </Grid>
                <Grid container direction='row' xs={12}>
                    <Grid item direction='column' xs={6}>
                        <SGauge content1='12%' content2='25%' />
                        
                    </Grid>
                    <Grid item direction='column' xs={4}> 
                        <Progress1 percent='89%' />
                        <Progress2 percent='23%' />
                        <Progress3 percent='76%' />
                        
                    </Grid>
                    
                </Grid>

                

            </RightGrid>

        </Grid>
        
    )
}

const LGauge = styled(LargeGauge)`


`


const SGauge = styled(SmallGauge)`
    transform: scale(0.7);
    margin-left: -360px;
    margin-top: -10px;
`

const Progress1 = styled(ProgressBar)`
    transform: scale(0.5);
    margin-top: 65px;
    margin-left: -260px;
`
const Progress2 = styled(ProgressBar2)`
    transform: scale(0.5);
    margin-top: 10px;
    margin-left: -260px;
`
const Progress3 = styled(ProgressBar3)`
    transform: scale(0.5);
    margin-top: 10px;
    margin-left: -260px;
`

const L1 = styled(LeftOne)`
    
`
const L2 = styled(LeftTwo)`
    
`
const L3 = styled(LeftThree)`
    
`
const L4 = styled(LeftFour)`
    
`
const RightGrid = styled(Grid)`
    
`

const R1 = styled(RightOne)`
    margin-left: -320px;
`

const R2 = styled(RightTwo)`
   margin-left: -270px;
`
