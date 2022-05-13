import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { getStatisticsData } from '../../utils/dashboard/getData';
import LoadingOverlay from 'react-loading-overlay';

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


 
export default function StyledTable() {
  const [tableData, setTableData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getStatisticsData('bookmaker1@test.com').then(res =>
      setTableData(res)
    )
    setLoading(false)
  
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