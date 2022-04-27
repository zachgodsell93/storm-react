import React from 'react'
import DocumentTable from '../components/documents/DocumentTable'

import StyledContainer from '../components/ui/StyledContainer'
import TopButtons from '../components/documents/TopButtons'

export default function Documents() {
  return (
    <StyledContainer color='#FFF'>
        <TopButtons dividerColor='#EAEAEC' />
        <DocumentTable />
    </StyledContainer>
  )
}
