import React from 'react'
import { Grid } from '@mui/material'

import ButtonGroupContainer from '../ButtonGroupContainer/ButtonGroupContainer'


function AboutMeContainer() {
    return (
        <Grid container>
            <Grid item xs={3}>
                <ButtonGroupContainer />
            </Grid>
        </Grid>
    )
}

export default AboutMeContainer