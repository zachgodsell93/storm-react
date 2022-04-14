import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fileName', headerName: 'Filename', width: 700 },
  { field: 'uploadDate', headerName: 'Upload Date', width: 200 },
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