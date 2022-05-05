import React from 'react'
import { Grid } from '@mui/material';
import styled from 'styled-components'
import { LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend, 
    ResponsiveContainer 
} from 'recharts';
import BLegend from '../../assets/images/report/Legend.png'

export const Chart = () => {
    const data = [
        {
          name: '100',
          uv: 10000,
          pv: 12000,
          amt: 2400,
        },
        {
          name: '200',
          uv: 15000,
          pv: 16000,
          amt: 2210,
        },
        {
          name: '300',
          uv: 29000,
          pv: 32000,
          amt: 2290,
        },
        {
          name: '400',
          uv: 39500,
          pv: 40000,
          amt: 2000,
        },
        {
          name: '500',
          uv: 51000,
          pv: 56000,
          amt: 2181,
        },
        {
          name: '600',
          uv: 63000,
          pv: 64000,
          amt: 2500,
        },
        {
          name: '700',
          uv: 69000,
          pv: 70000,
          amt: 2100,
        },
      ];
    

  return (
      <>
        <Grid container paddingBottom={4} paddingTop={4} justifyContent='center'>
            <H3>REVENUE - ACTUAL V EXPECTED</H3>
        </Grid>
        <Grid container justifyContent='center'>
            <ResponsiveContainer width={1200} height={500}>
                <LineChart
                width={1200}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <defs>
                    <filter id="shadowBlue">
                        <feDropShadow dx="0" dy="0" stdDeviation="2.5" flood-color='#00A8F0' />
                    </filter>
                    <filter id="shadowPurple">
                        <feDropShadow dx="0" dy="0" stdDeviation="2.5" flood-color='#8B36F7' />
                    </filter>
                </defs>
                <XAxis dataKey="name" />
                <YAxis axisLine={false} tickFormatter={(tick) => {return `$${tick}`}}/>
                <CartesianGrid vertical={false} />
                <Line dot={false} filter='url(#shadowPurple)' stroke='#8B36F7' strokeWidth={2} dataKey="pv" />
                <Line type="linear" dot={false} filter='url(#shadowBlue)' stroke='#00A8F0'strokeWidth={2}  dataKey="uv" />
                </LineChart>
            </ResponsiveContainer>
        </Grid>
        <Grid container justifyContent='center' paddingLeft={10} paddingBottom={10}>
                <img src={BLegend} alt=""></img>
                
            </Grid>
    </>
  )
}

const H3 = styled.h3`
    color: white;
    font-size: 24px;
    font-family: 'GothamMedium';
`

