import React, { useEffect, useState } from 'react'
import { DataSectionOne } from '../components/report/DataSectionOne'
import { DataSectionTwo } from '../components/report/DataSectionTwo'
import { TopRow } from '../components/report/TopRow'
import {StyledContainer} from '../components/ui/StyledContainer'
import { Chart } from '../components/report/Chart' 

import { getData } from '../utils/getData'
import store from '../utils/store'
import { useState as useGlobalState } from '@hookstate/core'

export const Report = () => {

    const { allData } = useGlobalState(store)
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
            <Chart sport={sportFilter}/>

            
          </> 
        :
        <StyledContainer color='#101924'></StyledContainer>
      }
                   
      </StyledContainer>
    )
}
