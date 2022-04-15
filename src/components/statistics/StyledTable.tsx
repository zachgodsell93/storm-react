import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID'},
  { field: 'name', headerName: 'Name'},
  { field: 'stormRating', headerName: 'Storm Rating'},
  { field: 'location', headerName: 'Location'},
  { field: 'turnover', headerName: 'Turnover'},
  { field: 'betStake', headerName: 'Avg. Bet Stake'},
  { field: 'actRevenue', headerName: 'Actual Revenue'},
  { field: 'avgOdds', headerName: 'Avg. Odds'},
  { field: 'expRevenue', headerName: 'Expected Revenue'},
  { field: 'expROT', headerName: 'Expected RoT*'},
]

const rows = [
  { id: 22, fileName: 'test123.csv', uploadDate: '29/02/2022 12:29pm'},
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
        checkboxSelection
      />
    </div>
  );
}