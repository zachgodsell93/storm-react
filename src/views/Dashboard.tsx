import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import TopButtons from '../components/dashboard/TopButtons'
import Title from '../components/dashboard/Title'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logInWithEmailAndPassword } from '../utils/firebase'
import { query, collection, getDocs, where } from "firebase/firestore";
import DataSectionOne from '../components/dashboard/DataSectionOne'

export default function Dashboard() {
    const StyledContainer = styled(Grid)`
    background-color: #101924;
    border-radius: 40px;
    height: 100vh;
    margin: 1rem 3rem 1rem 3rem;
    `

    const [user, loading, error] = useAuthState(auth);
    const [ready, setReady] = useState(false)
    const [name, setName] = useState("");
    const navigate = useNavigate();


    const fetchUserName = async () => {
        try {
          console.log(user?.uid)
          const q = query(collection(db, "users"), where("uid", "==", user?.uid));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          setName(data.name);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        // fetchUserName();
        setReady(true)
      }, [user, loading]);

    return (
        <>
            {ready ? 
            <StyledContainer>
                <TopButtons /> 
                <Title />
                <DataSectionOne />
            </StyledContainer>
            :
            <></>} 
        </>
        
    )
}
