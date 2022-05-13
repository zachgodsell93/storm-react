import React, { useEffect, useState, lazy, Suspense } from 'react'
import { DataSectionOne } from '../components/report/DataSectionOne'
import { DataSectionTwo } from '../components/report/DataSectionTwo'
import { TopRow } from '../components/report/TopRow'
import StyledContainer from '../components/ui/StyledContainer'
// import { Chart } from '../components/report/Chart' 

import { getData } from '../utils/dashboard/getData'
import store from '../utils/store'
import { useState as useGlobalState } from '@hookstate/core'

const Chart  = lazy(() => import('../components/report/Chart'))

export const Report = () => {

    const { allData, sportData, horseData, dataReady } = useGlobalState(store)
    const [baseData, setBaseData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    const [bonusFilter, setBonusFilter] = useState('bonus')
    const [sportFilter, setSportFilter] = useState('all')

    

    const bonusState = (index) => {
      console.log(index);
      if (index === true){
      setBonusFilter('bonus')
      }else if(index === false){
        setBonusFilter('regular')
      }
    }

    const sportState = (index) => {
      setSportFilter(index)
    };



    useEffect(() => {
      getData('bookmaker1@test.com', 'TB28', '2022-05-05').then(res => 
        allData.set(res)).then(res =>
          setLoaded(true)
        )
    }, [])

  
      
    return (
      <StyledContainer color='#101924'>
        {loaded ? 
        <>
            <TopRow bonusFilter={bonusState} sportFilter={sportState}/>
            <DataSectionOne bonus={bonusFilter} sport={sportFilter}/>
            <DataSectionTwo bonus={bonusFilter} sport={sportFilter} />
            <Suspense fallback={<></>}>
              <Chart sport={sportFilter}/>
            </Suspense>
            
          </> 
        :
        <StyledContainer color='#101924'></StyledContainer>
      }
                   
      </StyledContainer>
    )
}
