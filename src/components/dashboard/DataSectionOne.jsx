import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import { LeftOne, LeftTwo, LeftThree, LeftFour, RightOne, RightTwo, Ticker, ProgressBar, ProgressBar2, ProgressBar3, SmallGauge, LargeGauge} from '../ui/dashboard/Components'
import { getDashboardData} from '../../utils/getData'
import { Triangle } from 'react-loader-spinner'



export const DataSectionOne = () => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        getDashboardData('bookmaker1@test.com').then(res =>
            setData(res)
                
        ).then(() => {
            setLoading(false)
        }) 

    }, []) 
    

    return (
        <Grid container paddingTop={3} wrap='nowrap'>
            <Grid item xs={4} paddingLeft={35}>
                <Grid item xs={12} marginBottom={3}>
                    <L1>

                        <Grid style={{float:'left', marginTop: '-10px', paddingLeft:'10px'}}  item xs={12}>
                            <GreyText>Total Customers</GreyText>
                        </Grid>
                        <Grid style={{float: 'left', marginLeft: '-115px'}} item xs={12}>
                            <ColoredText color='white'>
                                {loading ? <Triangle height='40' color='white' width="40" ariaLabel="loading-indicator" />:data.totalCustomers }
                            </ColoredText>
                        </Grid>

                        
                    </L1>
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <L2>
                        <Grid style={{float:'left', marginTop: '-10px', paddingLeft:'10px'}} item xs={12}>
                            <GreyText>Total Turnover</GreyText>
                        </Grid>
                        <Grid style={{float: 'left', marginLeft: '-105px'}} item xs={12}>
                            <ColoredText color='white'>
                                {loading ? <Triangle height='40' color='white' width="40" ariaLabel="loading-indicator" />:`$${data.totalTurnover}`}
                            </ColoredText>
                        </Grid>
                        
                    </L2>
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <L3>
                        <Grid style={{float:'left', marginTop: '-10px', paddingLeft:'10px'}} item xs={12}>
                            <GreyText>Actual Revenue on Turnover</GreyText>
                        </Grid>
                        <Grid style={{float: 'left', marginLeft: '-205px'}} direction={'row'} item xs={12}>
                            {loading ? <ColoredText><Triangle height='40' color='white' width="40" ariaLabel="loading-indicator" /></ColoredText>:
                            <>
                                <StyledTicker color='#1EE587'></StyledTicker>
                                <ColoredText color='#1EE587'>
                                    &nbsp;{data.actualRevOnTurnover}%
                                </ColoredText>
                            </>
                            }
                            
                        </Grid>
                            

            
                    </L3>
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <L4>
                        <Grid style={{float:'left', marginTop: '-10px', paddingLeft:'10px'}} item xs={12}>
                            <GreyText>Expect Return on Turnover</GreyText>
                        </Grid>
                        <Grid style={{float: 'left', marginLeft: '-195px'}} item xs={12}>
                        {loading ? <ColoredText><Triangle height='40' color='white' width="40" ariaLabel="loading-indicator" /></ColoredText>:
                            <>
                                <StyledTicker color='#1EE587'></StyledTicker>
                                <ColoredText color='#1EE587'>
                                    &nbsp;{data.expectRetOnTurnover}%
                                </ColoredText>
                            </>
                            }
                        </Grid>

                    </L4>
                </Grid>
                
            </Grid>

            <Grid item xs={4} justifyContent='center'>
                <LGauge text={data.stormRating} />
            </Grid>

            <RightGrid item xs={4}>
                <Grid item xs={12} marginBottom={3}>
                    <R1>
                        <Grid style={{float:'right', marginTop: '-10px', paddingRight:'10px'}} item xs={12}>
                            <GreyText>Most Popular Status</GreyText>
                        </Grid>
                        <Grid style={{float: 'right', marginRight: '-140px'}} item xs={12}>
                            {loading ? <ColoredText><Triangle height='40' color='white' width="40" ariaLabel="loading-indicator" /></ColoredText>:
                            <>
                            <StyledTicker color='#FF003B'></StyledTicker>
                            <ColoredText color='#FF003B'>
                                &nbsp;{data.popularStatus}
                            </ColoredText>
                            </>
                            }
                        </Grid>
                    </R1>
                </Grid>

                <Grid item xs={12} marginBottom={3}>
                    <R2>
                        <Grid style={{float:'right', marginTop: '-10px', paddingRight:'10px'}} item xs={12}>
                            <GreyText>Total Revenue</GreyText>
                        </Grid>
                        <Grid style={{float: 'right', marginRight: '-100px'}} direction={'row'} item xs={12}>
                        {loading ? <ColoredText><Triangle height='40' color='white' width="40" ariaLabel="loading-indicator" /></ColoredText>:
                            <>
                            <StyledTicker color='#1EE587'></StyledTicker>
                            <ColoredText color='#1EE587'>
                                &nbsp;${data.totalRevenue}
                            </ColoredText>
                            </>
                            }
                        </Grid>
                    </R2>
                </Grid>
                <Grid container direction='row' xs={12}>
                    <Grid item direction='column' xs={6}>
                        <SGauge content1='12%' content2='25%' />
                        
                    </Grid>
                    <Grid item direction='column' xs={4}>
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-70px', marginLeft: '-380px', color: 'white'}}>Recreational</h5>
                            <Progress1 percent='100%' color1='#FFF' />
                        </Grid> 
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-15px', marginLeft: '-420px', color: 'white'}}>Player</h5>
                            <Progress2 percent='0%' color='#7E25FF' />
                        </Grid> 
                        <Grid item xs={12}>
                            <h5 style={{marginBottom: '-15px', marginLeft: '-420px', color: 'white'}}>Sharp</h5>
                            <Progress3 percent='0%' color='#E584F3' />
                        </Grid> 
                    
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

const GreyText = styled.p`
    color: #79848B;
    font-family: 'GothamBold';
    font-size: 14px;
`

const ColoredText = styled.p`
    color: ${props => props.color};
    float: ${props => props.float};
    font-size: 27px;
    font-family: 'GothamBold';

`

const StyledTicker = styled(Ticker)`
 max-width: 22px;
 max-height: 16px;
 position: relative;
 transform: ${props => props.down ? 'rotate(180deg)': null};

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
