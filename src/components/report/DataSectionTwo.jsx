import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import { SmallGauge } from '../ui/report/Components'
import { PR1, PR2, PR3, PR4, PR5, PR6, PR7, PR8 } from '../ui/report/Components'
import store from '../../utils/store'
import { useState as useGlobalState } from '@hookstate/core'

export const DataSectionTwo = ({sport, bonus}) => {
    const { allData, sportData, dataReady } = useGlobalState(store)
    const [currentData, setCurrentData] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        console.log(allData[`${sport}Data`]['dataSectionTwo'][bonus].get())
        setCurrentData(allData[`${sport}Data`]['dataSectionTwo'][bonus].get())
        setLoading(false)
    }, [])

    return (
        <>
        {loading ? null :
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
                        <SGauge 
                            content1={Math.round((currentData.turnoverBetCodePct_horses)*100)} 
                            content2={Math.round((currentData.turnoverBetCodePct_greyhounds)*100)} 
                            content3={Math.round((currentData.turnoverBetCodePct_harness)*100)}
                            content4={Math.round((currentData.turnoverBetCodePct_sport)*100)} />
                    </Grid>
                    <Grid item direction='column' xs={8}>
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Horse</h5>
                            <P1 percent={parseFloat((currentData.turnoverBetCodePct_horses)*100).toFixed(2)} color='#FFF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Greyhound</h5>
                            <P2 percent={parseFloat((currentData.turnoverBetCodePct_greyhounds)*100).toFixed(2)} color='#A618F8' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Harness</h5>
                            <P3 percent={parseFloat((currentData.turnoverBetCodePct_harness)*100).toFixed(2)} color='#7E24FF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Sport</h5>
                            <P4 percent={parseFloat((currentData.turnoverBetCodePct_sport)*100).toFixed(2)} color='#E584F3' />
                        </Grid>
                    </Grid>
                    
                </Grid>
                
            </Grid>
            <Grid item xs={6}>
            <Grid container>
                    <Grid item xs={3}>
                        <SGauge 
                        content1={Math.round((currentData.turnoverBetTypePct_fixed)*100)} 
                        content2={Math.round((currentData.turnoverBetTypePct_exotics)*100)} 
                        content3={Math.round((currentData.turnoverBetTypePct_multi)*100)}
                        content4={Math.round((currentData.turnoverBetTypePct_tote)*100)} />
                    </Grid>
                    <Grid item direction='column' xs={8}>
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Fixed</h5>
                            <P5 percent={parseFloat((currentData.turnoverBetTypePct_fixed)*100).toFixed(2)} color='#FFF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Exotics</h5>
                            <P6 percent={parseFloat((currentData.turnoverBetTypePct_exotics)*100).toFixed(2)} color='#A618F8' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Multi</h5>
                            <P7 percent={parseFloat((currentData.turnoverBetTypePct_multi)*100).toFixed(2)} color='#7E24FF' />
                        </Grid> 
                        <Grid item xs={12} sx={{maxHeight:'40px'}}>
                            <h5 style={{color: 'white', marginLeft: '120px', textAlign:'left'}}>Tote</h5>
                            <P8 percent={parseFloat((currentData.turnoverBetTypePct_tote)*100).toFixed(2)} color='#E584F3' />
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
        </>
        }
           
            
            
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