import React from 'react'
import DocumentTable from '../components/documents/DocumentTable'

import StyledContainer from '../components/ui/StyledContainer'
import TopButtons from '../components/ui/TopButtons'

export default function Documents() {
  return (
    <StyledContainer color='#FFF'>
        <TopButtons page='documents' dividerColor='#EAEAEC' />
        <DocumentTable />
    </StyledContainer>
  )
}
