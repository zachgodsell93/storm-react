import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
import TopButtons from '../components/ui/TopButtons'
import Title from '../components/dashboard/Title'
import StyledContainer from '../components/ui/StyledContainer'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logInWithEmailAndPassword } from '../utils/firebase'
import { query, collection, getDocs, where } from "firebase/firestore";
import DataSectionOne from '../components/dashboard/DataSectionOne'
import StormRating from '../components/dashboard/StormRating'

export default function Dashboard() {

    const [user, loading, error] = useAuthState(auth);
    const [ready, setReady] = useState(false)
    const [name, setName] = useState("");
    const navigate = useNavigate();


    const fetchUserName = async () => {
        try {
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
            <StyledContainer color='#101924'>
                <TopButtons page='dashboard' dividerColor='#FFF'/> 
                <Title />
                <DataSectionOne />
                <StormRating />
            </StyledContainer>
            :
            <></>} 
        </>
        
    )
}
