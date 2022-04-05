import React, { useState } from 'react'
import {Dialog, DialogTitle, DialogActions, Button, DialogContent, TextField} from '@mui/material'
import { storage } from '../../utils/firebase'
import { ref, uploadBytes } from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { query, collection, getDocs, where } from "firebase/firestore"
import { auth, db, logout } from '../../utils/firebase';
import { useEffect } from 'react';

export default function UploadModal(props) {

    const [file, setFile] = useState();
    const [user, loading, error] = useAuthState(auth)
    const [name, setName] = useState("");

    const upload = () => {
        if(file == null)
        return;
    uploadBytes(ref(storage, `${user?.email}/${file.name}`), file).then((snapshot) => {
        props.closeModal(false);
        alert(`File successfully uploaded to ${user?.email}/${file.name}`)
    })
    };
    
    return (
        <Dialog
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Upload CSV"}
            </DialogTitle>
            <DialogContent>
            <TextField fullWidth 
                id='password' 
                type='file'
                onChange={(e) =>{setFile(e.target.files[0])}}
            />
            <Button onClick={upload}>
                Upload
            </Button>
                            
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.closeModal(false)} autoFocus>
                Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
