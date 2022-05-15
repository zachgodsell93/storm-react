import React, {useState, useEffect} from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { listFiles, listMetaData } from '../../utils/storageFunctions';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'fileName', headerName: 'Filename', width: 700,renderCell: (params) => (<Link to='/report'>{params.value}</Link>) },
  { field: 'timeCreated', headerName: 'Upload Date', width: 500 },
];


export const StyledTable = (search) => {
  const [user] = useAuthState(auth)
  const [fileData, setFileData] = useState([])
  const [baseFileData, setBaseFileData] = useState([])

  

  useEffect(() => {
    console.log(search)
    listFiles(`${user?.email}`).then((res) => {
      res.forEach((ref) => {
        listMetaData(ref).then((res) => {
          console.log(res)
          setBaseFileData(fileData => [...fileData, res])
          setFileData(fileData => [...fileData, res])

        }
        )
      })
    });
    
    

  }, [])

  useEffect(() => {
    console.log(search.search)
    if(fileData.length >= 1){
      const filteredRows = baseFileData.filter((row) => {
        return(row.fileName.toLowerCase().includes(search.search.toLowerCase()));
      })
      setFileData(filteredRows)
    }
  }, [search])

  

  return (
    <div style={{ height: '1723px', width: '100%' }}>
      <DataGrid
        rows={fileData}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>
  );
}