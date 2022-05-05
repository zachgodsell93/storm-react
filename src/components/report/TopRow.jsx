import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import styled from 'styled-components'
import { ArrowBack, FormatAlignLeft, FormatAlignCenter, FormatAlignRight } from '@mui/icons-material';
import { FormControlLabel, Checkbox } from '@mui/material';
import { ToggleButtonGroup, ToggleButton,  } from '@mui/material';
import { Link } from 'react-router-dom';
import { SoccerBall, Horse } from '../ui/report/Components';

export const TopRow = () => {

    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment);
        }
      };
    

    return (
        <Grid container padding={6}>
            <Grid textAlign='left' container xs={4}>
                <Grid item>
                    <Link to='/documents'>
                        <BackButton><ArrowBack /></BackButton>
                    </Link>
                </Grid>
                <Grid item>
                    <Grid item direction='column'>
                        <StyledTextTop>Zach Godsell</StyledTextTop>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <StyledToggle className={alignment === 'left' ? 'active': null} value="left" aria-label="left aligned">
                        <Horse />
                    </StyledToggle>
                    <StyledToggle className={alignment === 'left' ? 'active': null} value="center" aria-label="centered">
                        <p style={{margin: '0px', padding: '0px', color: '#FFF', fontFamily: 'GothamMedium'}}>All</p>
                    </StyledToggle>
                    <StyledToggle className={alignment === 'left' ? 'active': null} value="right" aria-label="right aligned">
                        <SoccerBall />
                    </StyledToggle>
                </ToggleButtonGroup>
            </Grid>
            <Grid item xs={4}>
                <FormControlLabel sx={{color: 'white'}} control={<Checkbox defaultChecked />} label="Include Bonus Bets" />
            </Grid>
        </Grid>
        
    )
}

const BackButton = styled(Button)`
    &&{
        height: 56px;
        width: 56px;
        background-color: #787D82;
        color: white;
        border-radius: 16px;
        :hover {
            background-color: white;
            color: black;
        }
    }
    
`

const StyledToggle = styled(ToggleButton)`
    &&{
        width: 70px;
        border-radius: 20px;

        :focus {
            background-color: #359EEA;
            box-shadow: 0px 0px 4px 1px;
            stroke-width: 4px;
            stroke: #424E5B;
        }
        
        background-color: #424E5B;
    }
`

const StyledTextTop = styled.p`
    font-size: 24px;
    color: white;
    padding: 0px 0px 0px 15px;
    margin: -5px 0px 0px 0px;
    font-family: 'GothamMedium';
    font-weight: lighter;
`

const Switch = styled.div`
  font-family: "Lucida Grande", Tahoma, Verdana, sans-serif;
  position: relative;
  height: 26px;
  width: 135px;
  background-color: #e4e4e4;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
`;

const SwitchRadio = styled.input`
  display: none;
`;

const SwitchSelection = styled.span`
  display: block;
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 40px;
  height: 23px;
  background: #216ba5;
  border-radius: 10px;
  transition: left 0.25s ease-out;
`;

const SwitchLabel = styled.label`
  position: relative;
  z-index: 2;
  float: left;
  width: 45px;
  line-height: 26px;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  cursor: pointer;

  ${SwitchRadio}:checked + & {
    transition: 0.15s ease-out;
    color: #fff;
  }
`;
