import React from 'react'
import { DataSectionOne } from '../components/report/DataSectionOne'
import { DataSectionTwo } from '../components/report/DataSectionTwo'
import { TopRow } from '../components/report/TopRow'
import StyledContainer from '../components/ui/StyledContainer'
import { Chart } from '../components/report/Chart'

export const Report = () => {
  return (
    <StyledContainer color='#101924'>
        <TopRow />
        <DataSectionOne />
        <DataSectionTwo />
        <Chart />
    </StyledContainer>
  )
}
