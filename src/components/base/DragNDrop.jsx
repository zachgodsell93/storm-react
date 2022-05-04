import React, { useCallback } from 'react'
import Dropzone, {useDropzone} from 'react-dropzone'
import { ref, uploadBytes } from 'firebase/storage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { storage } from '../../utils/firebase'
import { auth } from '../../utils/firebase';

export const DragNDrop = () => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const [user, loading, error] = useAuthState(auth)

    const fileUpload = useCallback(acceptedFiles => {
        console.log(acceptedFiles.name)
        uploadBytes(ref(storage, `${user?.email}/${acceptedFiles.name}`), acceptedFiles).then((snapshot) => {

            alert(`File successfully uploaded to ${user?.email}/${acceptedFiles.name}`)
        })
      }, [])

    
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file}
        </li>
    ));

    return (
        <Dropzone onDrop={fileUpload}>
        {({getRootProps, getInputProps}) => (
        <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <h6>Select a CSV file to upload</h6>
            <p>or drag and drop it here</p>
        </div>
        )}
        </Dropzone>
    )
}
