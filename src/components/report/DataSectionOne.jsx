import React from 'react'
import { Grid } from '@mui/material'
import { Top, Middle, Bottom } from '../ui/report/Components'
import styled from 'styled-components'

export const DataSectionOne = () => {
  return (
    <Grid container>
        <Grid xs={12} item>
            {/* Title */}
        </Grid>
        <Grid xs={12} item>
            <Grid item xs={4} paddingLeft={20}>
                <Grid item xs={12} marginBottom={3}>
                    <L1>

                        <Grid style={{float:'left', marginTop: '-10px', paddingLeft:'10px'}}  item xs={12}>
                            <GreyText>Total Customers</GreyText>
                        </Grid>
                        <Grid style={{float: 'left', marginLeft: '-115px'}} item xs={12}>
                            <ColoredText color='white'>
                                85
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
                                $12,637.96
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
                            <ColoredText color='#1EE587'>
                                &nbsp;3.32%
                            </ColoredText>
                        </Grid>
                            

            
                    </L3>
                </Grid>
                
            </Grid>

            <Grid item xs={4}>
                {/* Gauge */}
            </Grid>
            <Grid item xs={4}>
                {/* Right */}
            </Grid>
        </Grid>
    </Grid>
  )
}

const L1 = styled(Top)`

`
const L2 = styled(Middle)`
    margin-right: -50px;
`
const L3 = styled(Bottom)`

`


const R1 = styled(Top)`
    transform: scaleX(-1);
`
const R2 = styled(Middle)`

`
const R3 = styled(Bottom)`

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