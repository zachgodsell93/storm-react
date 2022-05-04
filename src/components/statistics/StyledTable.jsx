import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'

const columns = [
  { field: 'id', headerName: 'ID', width:70},
  { field: 'name', headerName: 'Name', width:200},
  { field: 'stormRating', headerName: 'Storm Rating', width:150},
  { field: 'location', headerName: 'Location', width:150},
  { field: 'turnover', headerName: 'Turnover', width:150},
  { field: 'betStake', headerName: 'Avg. Bet Stake', width:150},
  { field: 'actRevenue', headerName: 'Actual Revenue', width:150},
  { field: 'avgOdds', headerName: 'Avg. Odds', width:150},
  { field: 'expRevenue', headerName: 'Expected Revenue', width:150},
  { field: 'expROT', headerName: 'Expected RoT*', width:150},
]

const rows = [
  { id: 22, name: `${<FontAwesomeIcon icon={solid('crown')} />}`, fileName: 'test123.csv', uploadDate: '29/02/2022 12:29pm'},
  { id: 23, fileName: 'test1.csv', uploadDate: '29/02/2021 12:29pm'},
  { id: 24, fileName: 'test12.csv', uploadDate: '29/02/2020 12:29pm'}
];
 
export default function StyledTable() {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      
    </div>
    
  );
}