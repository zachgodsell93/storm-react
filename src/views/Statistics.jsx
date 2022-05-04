import React from 'react'
import StyledContainer from '../components/ui/StyledContainer'
import TopButtons from '../components/ui/TopButtons'
import StatisticsTable from '../components/statistics/StatisticsTable'

export default function Statistics() {
    return (
        <StyledContainer color='#FFF'>
            <TopButtons page='statistics' dividerColor='#EAEAEC' />
            <StatisticsTable />
        </StyledContainer>
      )
}
 