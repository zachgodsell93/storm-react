import React, { useState, useEffect } from 'react'
import {TopButtons} from '../components/ui/TopButtons'
import {Title} from '../components/dashboard/Title'
import {StyledContainer} from '../components/ui/StyledContainer'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../utils/firebase'
import {DataSectionOne} from '../components/dashboard/DataSectionOne'
import {StormRating} from '../components/dashboard/StormRating'

export default function Dashboard() {

    const [user, loading] = useAuthState(auth);
    const [ready, setReady] = useState(false)
    const navigate = useNavigate();


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
