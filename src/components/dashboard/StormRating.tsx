import React from 'react'
import { Grid } from '@mui/material'
import styled from 'styled-components'
import{ ReactComponent as Logo} from "../../assets/images/SLogoWhite.svg"
import PlotBG from '../../assets/images/HeatmapMain.svg'
import DLegend from '../../assets/images/dashboard/BottomGraph.png'

import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

export default function StormRating() {
    return (
        <>
            <Grid container paddingTop={5} paddingBottom={5} justifyContent='center'>
                <Grid item>
                    <T>ALL CUSTOMERS -&nbsp;</T>
                </Grid>
                <Grid item>
                    <StyledLogo />
                </Grid>
                <Grid item>
                    <T>&nbsp;RATING</T>
                </Grid>
            </Grid>

            <Grid container justifyContent='center'>
                <ResponsiveContainerStyled height={585} width={1080} >
                    <ScatterChart
                        width={900}
                        height={550}
                        >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="Storm Rating" range={[1, 100]}/>
                        <YAxis width={110} type="category" dataKey="y" name="Type" allowDuplicatedCategory={false} />
                        <ZAxis type="number" name="Customer Turnover" dataKey="z" range={[1, 10000]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        
                        <Scatter data={data} fill="#00A7FF" stroke='#0074B2' shape="circle" />
                    </ScatterChart>
                </ResponsiveContainerStyled>
                
                   
                
            </Grid>
            <Grid container justifyContent='center' paddingLeft={10} paddingBottom={10}>
                <img src={DLegend} alt=""></img>
            </Grid>
        </>
    )
}


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

const ResponsiveContainerStyled = styled(ResponsiveContainer)`    
    background-image: url('${PlotBG}');
    background-size: auto;
    background-position: 30px 30px;
    background-repeat: no-repeat;
    background-position-x: 120px;
    background-position-y: 5px;

    
`

const data = [
    {y: 'Greyhound', x: 10, z: 23},
    {y: 'Greyhound', x: 14, z: 200},
    {y: 'Greyhound', x: 40, z: 500},
    {y: 'Greyhound', x: 100, z: 57},
    {y: 'Greyhound', x: 1, z: 89},
    {y: 'Greyhound', x: 50, z: 234},
    {y: 'Greyhound', x: 30, z: 100},
    {y: 'Greyhound', x: 60, z: 100},
    {y: 'Greyhound', x: 75, z: 100},
    {y: 'Greyhound', x: 83, z: 100},
    {y: 'Greyhound', x: 10, z: 100},
    {y: 'Greyhound', x: 10, z: 100},
    {y: 'Horse Racing', x: 10, z: 200},
    {y: 'Horse Racing', x: 14, z: 400},
    {y: 'Horse Racing', x: 23, z: 600},
    {y: 'Horse Racing', x: 43, z: 150},
    {y: 'Horse Racing', x: 52, z: 260},
    {y: 'Horse Racing', x: 64, z: 700},
    {y: 'Horse Racing', x: 74, z: 830},
    {y: 'Horse Racing', x: 88, z: 100},
    {y: 'Horse Racing', x: 34, z: 100},
    {y: 'Horse Racing', x: 99, z: 100},
    {y: 'Harness', x: 3, z: 100},
    {y: 'Harness', x: 16, z: 100},
    {y: 'Harness', x: 34, z: 100},
    {y: 'Harness', x: 56, z: 100},
    {y: 'Harness', x: 57, z: 100},
    {y: 'Harness', x: 67, z: 100},
    {y: 'Harness', x: 71, z: 100},
    {y: 'Harness', x: 82, z: 100},
    {y: 'Harness', x: 88, z: 300},
    {y: 'Sports', x: 89, z: 400},
    {y: 'Sports', x: 96, z: 100},
    {y: 'Sports', x: 3, z: 100},
    {y: 'Sports', x: 16, z: 100},
    {y: 'Sports', x: 34, z: 100},
    {y: 'Sports', x: 56, z: 100},
    {y: 'Sports', x: 57, z: 100},
    {y: 'Sports', x: 67, z: 100},
    {y: 'Sports', x: 71, z: 100},
    {y: 'Sports', x: 82, z: 100},
    {y: 'Sports', x: 88, z: 300},
    {y: 'Sports', x: 89, z: 400},
    {y: 'Sports', x: 96, z: 100},
]