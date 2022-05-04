import React from 'react'
import { DataSectionOne } from '../components/report/DataSectionOne'
import { DataSectionTwo } from '../components/report/DataSectionTwo'
import { TopRow } from '../components/report/TopRow'
import StyledContainer from '../components/ui/StyledContainer'

export const Report = () => {
  return (
    <StyledContainer color='#101924'>
        <TopRow />
        <DataSectionOne />
        <DataSectionTwo />
    </StyledContainer>
  )
}
