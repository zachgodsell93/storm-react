import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { getStatisticsData } from '../../utils/getData';

const columns = [
  { field: 'id', headerName: 'ID', width:70, hide: true},
  { field: 'name', headerName: 'Name', width:200},
  { field: 'stormScore', headerName: 'Storm Rating', width:150},
  { field: 'location', headerName: 'Location', width:150},
  { field: 'turnover', headerName: 'Turnover', width:150},
  { field: 'avgBet', headerName: 'Avg. Bet Stake', width:150},
  { field: 'actualRevenue', headerName: 'Actual Revenue', width:150},
  { field: 'avgOdds', headerName: 'Avg. Odds', width:150},
  { field: 'expectedRevenue', headerName: 'Expected Revenue', width:150},
  { field: 'expectedROT', headerName: 'Expected RoT*', width:150},
]


 
export const StyledTable = () => {
  const [tableData, setTableData] = useState([])
  const [baseTableData, setBaseTableData] = useState([])


  useEffect(() => {

    getStatisticsData('bookmaker1@test.com').then(res =>
      setTableData(res)
    )

  
  }, [])
  

  return (
    <div style={{ height: '400px', width: '100%' }}>

        
          
          <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          />
      
        
    </div>

    
  );
}