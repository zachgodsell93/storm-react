import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { listFiles, listMetaData } from '../../utils/storageFunctions';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'fileName', headerName: 'Filename', width: 700,renderCell: (params) => (<Link to='/report'>{params.value}</Link>) },
  { field: 'timeCreated', headerName: 'Upload Date', width: 500 },
];


export const StyledTable = () => {
  const [user] = useAuthState(auth)
  const [fileData, setFileData] = useState([])

  

  useEffect(() => {
    listFiles(`${user?.email}`).then((res) => {
      res.forEach((ref) => {
        console.log(ref)
        listMetaData(ref).then((res) => {
          setFileData(fileData => [...fileData, res])
        }
        )
      })
    })
    

  }, [])
  

  return (
    <div style={{ height: '1723px', width: '100%' }}>
      <DataGrid
        rows={fileData}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
      />
    </div>
  );
}