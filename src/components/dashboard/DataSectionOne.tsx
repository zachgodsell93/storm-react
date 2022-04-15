import React from 'react'
import './dashboard.css'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import { ReactComponent as GaugeLarge } from '../../assets/images/dashboard/StormRating.svg'
import { ReactComponent as Left1 } from '../../assets/images/dashboard/Left 1.svg'
import { ReactComponent as Left2 } from '../../assets/images/dashboard/Left 2.svg'
import { ReactComponent as Left3 } from '../../assets/images/dashboard/Left 3.svg'
import { ReactComponent as Right1 } from '../../assets/images/dashboard/Right 1.svg'
import { ReactComponent as Right2 } from '../../assets/images/dashboard/Right 2.svg'


export default function DataSectionOne() {

    

    return (
        <Grid container>
            <Grid item xs={4} paddingLeft={30}>
                <Grid item xs={12} marginBottom={3}>
                    <Left1 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <Left2 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <Left3 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <Scorecard4>
                        test
                    </Scorecard4>
                </Grid>
                
            </Grid>

            <Grid item xs={4} justifyContent='center'>
                <GaugeLarge />
            </Grid>

            <RightGrid item xs={4}>
                <Grid item xs={12} marginBottom={3}>
                    <StyledR1 />
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <StyledR2 />
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>

                

            </RightGrid>

            <Grid item xs={12}>
                <Grid item xs={6}>
                    <SmallGauge />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>

        </Grid>
        
    )
}

const SmallGauge = styled(GaugeLarge)`
    transform: scale(0.7);
    margin-top: -200px;
    margin-left: 800px;
`

const RightGrid = styled(Grid)`
    
`

const StyledR1 = styled(Right1)`
    margin-left: -320px;
`

const StyledR2 = styled(Right2)`
   margin-left: -270px;
`


const Scorecard1 = styled.div`
        background-color: #424E5B;
        height: 80px;
        width: 313px;
        position: relative;
        overflow: hidden;

    `
const Scorecard2 = styled.div`
    background-color: #424E5B;
    height: 80px;
    width: 265px;
    position: relative;
    overflow: hidden;

    `
const Scorecard3 = styled.div`
    background-color: #424E5B;
    height: 80px;
    width: 320px;
    position: relative;
    overflow: hidden;

    `
const Scorecard4 = styled.div`
    background-color: #424E5B;
    height: 80px;
    width: 450px;
    position: relative;
    overflow: hidden;

    `
