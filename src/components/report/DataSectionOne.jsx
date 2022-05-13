import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { Top, Middle, Bottom, LargeGauge, Circle } from '../ui/report/Components'
import { Ticker } from '../ui/dashboard/Components'
import styled from 'styled-components'
import{ ReactComponent as Logo} from "../../assets/images/SLogoWhite.svg"
import store from '../../utils/store'
import { useState as useGlobalState } from '@hookstate/core'

export const DataSectionOne = ({bonus, sport}) => {
    
    const { allData, sportData, dataReady } = useGlobalState(store)
    const [currentData, setCurrentData] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        console.log(allData[`${sport}Data`]['dataSectionOne'][bonus].get())
        setCurrentData(allData[`${sport}Data`]['dataSectionOne'][bonus].get())
        setLoading(false)
    }, [])

    function secondsToHms(d) {
        d = Number(d);
    
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        return ('0' + h).slice(-2) + "h " + ('0' + m).slice(-2) + "m " + ('0' + s).slice(-2) + "s";
    }
    
    return (
        <>
            {loading ? null : <Grid container>
                <Grid container justifyContent='center' paddingBottom={3}>
                    <Grid item>
                        <StyledLogo />
                    </Grid>
                    <Grid item>
                        <T>&nbsp;RATING</T>
                    </Grid>
                </Grid>

                <Grid xs={12} container direction='row' paddingLeft={20} paddingRight={20}>
                    <Grid item xs={4}>
                        <Grid item xs={12} marginBottom={3}>
                            <L1>
                                <Grid container textAlign='left' direction='row'>
                                    <Grid marginLeft={1} item xs={6}>
                                        <GreyText>Turnover</GreyText>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <GreyText>No. of Bets</GreyText>
                                    </Grid>
                                </Grid>
                                <Grid container textAlign='left' direction='row'>
                                    <Grid marginLeft={1} item xs={6}>
                                        <ColoredText color='white'>
                                            ${currentData.turnover}
                                        </ColoredText>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <ColoredText color='white'>
                                            {currentData.numberBets}
                                        </ColoredText>
                                    </Grid>
                                </Grid>

                            </L1>
                        </Grid>

                        <Grid item xs={12} marginBottom={3}>
                            <L2>
                                <Grid container textAlign='left' direction='row'>
                                    <Grid paddingLeft={1} item xs={6}>
                                        <GreyText>Average Bet Stake</GreyText>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <GreyText>Bonus Bets Credited</GreyText>
                                    </Grid>
                                </Grid>
                                <Grid container textAlign='left' direction='row'>
                                    <Grid marginLeft={1} item xs={6}>
                                        <ColoredText color='white'>
                                            ${currentData.avgBet}
                                        </ColoredText>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <ColoredText color='white'>
                                            $2,394
                                        </ColoredText>
                                    </Grid>
                                </Grid>
                            </L2>
                        </Grid>

                        <Grid item xs={12} marginBottom={3}>
                            <L3>
                                <Grid container textAlign='left' direction='row'>
                                    <Grid paddingLeft={1} item xs={6}>
                                        <GreyText>Actual Revenue</GreyText>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <GreyText>Actual RoT*</GreyText>
                                    </Grid>
                                </Grid>
                                <Grid container textAlign='left' direction='row'>
                                    <Grid marginLeft={1} item xs={6}>
                                        <StyledTicker color='#1EE587'/>
                                        <ColoredText color='#1EE587'>
                                            &nbsp;${currentData.actualRevenue}
                                        </ColoredText>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <StyledTicker down color='#FF003B'/>
                                        <ColoredText color='#FF003B'>
                                            &nbsp;{parseFloat(currentData.actualRot).toFixed(2)}%
                                        </ColoredText>
                                    </Grid>
                                </Grid>
                            </L3>
                        </Grid>
                        
                    </Grid>

                    <Grid item xs={4}>
                        <LargeGauge />
                    </Grid>
                    <Grid item xs={4}>
                            <Grid item xs={12} marginBottom={3}>
                                <R1>
                                    <Grid container textAlign='left' direction='row'>
                                        <Grid item paddingLeft={1} xs={12}>
                                            <GreyText flip='-1'>Client Category</GreyText>
                                        </Grid>
                                    </Grid>
                                    <Grid container textAlign='left' direction='row'>
                                        <Grid paddingLeft={1} item xs={12}>
                                            <ColoredText flip='-1' color='#00A8F0'>
                                            &nbsp;{currentData.clientCategory}
                                            </ColoredText>
                                            <StyledCircle color='#00A8F0' />
                                        </Grid>
                                    </Grid>
                                </R1>
                            </Grid>

                            <Grid item xs={12} marginBottom={3}>
                                <R2>
                                    <Grid container textAlign='left' direction='row'>
                                        <Grid item paddingLeft={1} xs={6}>
                                            <GreyText flip='-1'>Average Odds</GreyText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <GreyText flip='-1'>Avg time between bet and market start</GreyText>
                                        </Grid>
                                    </Grid>
                                    <Grid container textAlign='left' direction='row'>
                                        <Grid paddingLeft={1} item xs={6}>
                                            <ColoredText flip='-1' color='white'>
                                            ${currentData.avgOdds}
                                            </ColoredText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <ColoredText flip='-1' color='white'>
                                            {secondsToHms(currentData.secondsBetweenBetAndMarketStart)}
                                            </ColoredText>
                                        </Grid>
                                    </Grid>
                                </R2>
                            </Grid>

                            <Grid item xs={12} marginBottom={3}>
                                <R3>
                                    <Grid container textAlign='left' direction='row'>
                                        <Grid marginLeft={1} item xs={6}>
                                            <GreyText flip='-1'>Expected Revenue</GreyText>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <GreyText flip='-1'>Expected RoT*</GreyText>
                                        </Grid>
                                    </Grid>
                                    <Grid container textAlign='left' direction='row'>
                                        <Grid paddingLeft={1} item xs={6}>
                                            
                                            <ColoredText flip='-1' color='#1EE587'>
                                                &nbsp;${parseFloat(currentData.expectedRevenue).toFixed(2)}
                                            </ColoredText>
                                            <StyledTicker flip='-1' color='#1EE587' />
                                        </Grid>
                                        <Grid item xs={6}>
                                            
                                            <ColoredText flip='-1' color='#FF003B'>
                                                &nbsp;{parseFloat(currentData.expectedRot).toFixed(2)}%
                                            </ColoredText>
                                            <StyledTicker flip='-1' down color='#FF003B' />
                                        </Grid>
                                    </Grid>
                                </R3>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
            }
            
            
        </>
    )
}

const L1 = styled(Top)`
    
`
const L2 = styled(Middle)`
    margin-left: -50px;
`
const L3 = styled(Bottom)`

`


const R1 = styled(Top)`
    transform: scaleX(-1);
`
const R2 = styled(Middle)`
    transform: scaleX(-1);
    margin-right: -50px;
`
const R3 = styled(Bottom)`
    transform: scaleX(-1);
`

const GreyText = styled.p`
    color: #79848B;
    font-family: 'GothamBold';
    font-size: 14px;
    margin: 0px;
    transform: scaleX(${props => props.flip});
`

const ColoredText = styled.p`
    color: ${props => props.color};
    float: ${props => props.float};
    transform: scaleX(${props => props.flip});
    font-size: 20px;
    font-family: 'GothamBold';
    margin: 0px;

`

const StyledTicker = styled(Ticker)`
 max-width: 22px;
 max-height: 16px;
 transform: scaleX(${props => props.flip});
 transform: ${props => props.down ? 'rotate(180deg)': null};
 `

const StyledCircle = styled(Circle)`
    
`

const T = styled.h1`
font-family: "GothamBold";
font-size: 32px;
line-height: 30px;
color: white;
`
const StyledLogo = styled(Logo)`
height: 33px;
text {
    fill: white;
}
margin-top: 20px;

`