import React, {useEffect, useState} from 'react'
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
import store from '../../utils/store';
import { useState as useGlobalState } from '@hookstate/core'
import { getChartData } from '../../utils/dashboard/getData';

const Chart = ({sport}) => {

    const [currentData, setCurrentData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getChartData('bookmaker1@test.com', 'TB28', '2022-05-05').then(res =>
            setCurrentData(res[`${sport}`])    
        ).then(
            console.log(currentData)
        )
    //   setLoading(true)
    // //   console.log(allData[`${sport}Data`]['dataSectionOne']['bottomGraph'].get())
    //   setCurrentData(allData[`${sport}Data`]['dataSectionOne']['bottomGraph'].get())
    //   setLoading(false)
  }, [])
    

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
                data={currentData}
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
                <XAxis dataKey="dt" />
                <YAxis axisLine={false} tickFormatter={(tick) => {return `$${tick}`}}/>
                <CartesianGrid vertical={false} />
                <Line dot={false} filter='url(#shadowPurple)' stroke='#8B36F7' strokeWidth={2} dataKey="rtExpRev" />
                <Line type="linear" dot={false} filter='url(#shadowBlue)' stroke='#00A8F0'strokeWidth={2}  dataKey="rtActRev" />
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

export default Chart

