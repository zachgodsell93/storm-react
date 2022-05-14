import React, { useState } from 'react'
import {Dialog, DialogTitle, DialogActions, Button, DialogContent} from '@mui/material'
import { storage } from '../../utils/firebase'
import { ref, uploadBytes } from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../utils/firebase';
import { FileUploader } from "react-drag-drop-files";

export const UploadModal = (props) => {

    const fileTypes = ['CSV']

    const [user] = useAuthState(auth)

    const upload = (file) => {
        uploadBytes(ref(storage, `${user?.email}/${file[0].name}`), file).then((snapshot) => {
            props.closeModal(false);
        
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

                <FileUploader
                    multiple={true}
                    handleChange={upload}
                    name="file"
                    types={fileTypes}
                />
            {/* <TextField fullWidth 
                id='password' 
                type='file'
                onChange={(e) =>{setFile(e.target.files[0])}}
            /> */}
            
            {/* <Button onClick={upload}>
                Upload
            </Button> */}
                            
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.closeModal(false)} autoFocus>
                Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}
