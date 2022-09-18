import React from 'react'
import { Grid, Button, ButtonGroup } from '@mui/material'

import CardDisplayer from '../../CardDisplayer/CardDisplayer'
import PortfolioCard from '../PortfolioCard/PortfolioCard'


function PortfolioTableContainer({ items }) {
    return (
        <Grid container sx={{ height: '90%', marginTop: '10px' }}>
            <Grid item xs={12} sx={{}} >
                <CardDisplayer items={items} cardComponent={PortfolioCard} />
            </Grid>
        </Grid>
    )
}

export default PortfolioTableContainer