import React from 'react'
import { Grid } from '@mui/material'
import styled from 'styled-components'

export default function DataSectionOne() {

    

    return (
        <Grid container>
            <Grid container xs={4} paddingLeft={30}>
                <Grid item xs={12} marginBottom={2}>
                    <Scorecard1>
                        test
                    </Scorecard1>
                </Grid>

                <Grid item xs={12} marginBottom={2}>
                    <Scorecard2>
                        test
                    </Scorecard2>
                </Grid>

                <Grid item xs={12} marginBottom={2}>
                    <Scorecard3>
                        test
                    </Scorecard3>
                </Grid>

                <Grid item xs={12} marginBottom={2}>
                    <Scorecard4>
                        test
                    </Scorecard4>
                </Grid>
                
            </Grid>

            <Grid container xs={4}>
                
            </Grid>

            <Grid container xs={4} paddingRight={30}>
                
            </Grid>

        </Grid>
        
    )
}

const Scorecard1 = styled(Grid)`
        background-color: #424E5B;
        height: 80px;
        width: 313px;
        position: relative;
        overflow: hidden;

    `
const Scorecard2 = styled(Grid)`
    background-color: #424E5B;
    height: 80px;
    width: 265px;
    position: relative;
    overflow: hidden;

    `
const Scorecard3 = styled(Grid)`
    background-color: #424E5B;
    height: 80px;
    width: 320px;
    position: relative;
    overflow: hidden;

    `
const Scorecard4 = styled(Grid)`
    background-color: #424E5B;
    height: 80px;
    width: 450px;
    position: relative;
    overflow: hidden;

    `
