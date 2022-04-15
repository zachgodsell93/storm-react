import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db, logout } from '../../utils/firebase';
import { storage } from '../../utils/firebase'
import { listFiles, listMetaData } from '../../utils/storageFunctions';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'fileName', headerName: 'Filename', width: 700 },
  { field: 'timeCreated', headerName: 'Upload Date', width: 500 },
]

const rows = [
  { id: 22, fileName: 'test123.csv', uploadDate: '29/02/2022 12:29pm'},
  { id: 23, fileName: 'test1.csv', uploadDate: '29/02/2021 12:29pm'},
  { id: 24, fileName: 'test12.csv', uploadDate: '29/02/2020 12:29pm'}
];

export default function StyledTable() {
  const [user, loading, error] = useAuthState(auth)
  const [files, setFiles] = useState([])
  const [fileData, setFileData] = useState([])

  

  useEffect(() => {
    const mdata = []
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