import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import StyledButton from '../ui/StyledButton';
import { ReactComponent as  PBBC } from "../../assets/images/pbbc.svg"
import{ ReactComponent as Logo} from "../../assets/images/SLogoWhite.svg"
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../utils/firebase.js'
import { Button } from '@mui/material';

const withoutSidebarRoutes = ['/login', '/register']

export default function Nav({children}) {


    const {pathname} = useLocation();

    // Find the current page and determine if sidebar should be shown
    if (withoutSidebarRoutes.some((item) => pathname.includes(item))) return children;

    const StyledPBBC = styled(PBBC)`
    padding-left: 5px;
    padding-right: 5px;
    `

    const StyledLogo = styled(Logo)`

    `

    const StyledAppBar = styled(AppBar)`
    && {
        z-index: 2;
        background-color: #FFF;
        box-shadow: none;
    }
    `
    const StyledDrawer = styled(Drawer)`
        && {
            z-index: 1;
            width: 240px;
            background-color: #444;
            box-sizing: border-box;
            flex-shrink: 0;
            & .MuiDrawer-paper {
                width: 240px;
                box-sizing: border-box;
            }
        }
        
    `

    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <StyledAppBar position="fixed" >
            <Toolbar>
                <Grid container direction='row'>
                    <Grid xs={1} item>
                        <StyledLogo />
                    </Grid>
                    <Grid item xs={1} alignItems="flex-end" direction='row'>
                        <StyledPBBC />
                    </Grid>
                    <Grid item xs={1}>
                        <p style={{float:'right'}}>Logout</p>
                    </Grid>
                </Grid>
            </Toolbar>
        </StyledAppBar>
        <StyledDrawer variant="permanent" anchor='left'>
            <Toolbar />
            <Box style={{paddingTop: '10px'}}>
            <StyledButton>
                Upload File(s)
            </StyledButton>
            </Box>
            <Box style={{paddingTop: '10px'}}>
            <Button onClick={() => logout}>
                Logout
            </Button>
            </Box>
        </StyledDrawer>
        <Box style={{backgroundColor: '#F0F3F5', height:'100vh'}} component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {children}
        </Box>
        </Box>
    );
}

