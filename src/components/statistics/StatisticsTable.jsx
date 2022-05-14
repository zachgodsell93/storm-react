import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {StyledTable} from './StyledTable';
import styled from 'styled-components'
 
export const StatisticsTable = () => {

    const [searchTerm, setSearchTerm] = useState('')

    function handleSearch(e) {
        setSearchTerm(e.target.value)
    }
    return (
        <>
        <Grid container justifyContent='right'>
            <Grid xs={3} item paddingTop={2} paddingBottom={2}>
                <TextField onChange={handleSearch}
                InputProps={{startAdornment:(
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                }}
                />
            </Grid>
            <Divider />
            <Grid container padding={3}>
                <StyledTable />
            </Grid>
        </Grid>
        </>
    )
}


const Divider = styled.div`
        height: 1px;
        width: 100%;
        background-color: #EAEAEA;
    `
