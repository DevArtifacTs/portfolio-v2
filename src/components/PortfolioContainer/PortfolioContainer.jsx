import React from 'react'
import { Grid } from '@mui/material'

// component
import SectionTitle from '../SectionTitle/SectionTitle'
import PortfolioTableContainer from './PortfolioTableContainer/PortfolioTableContainer'

// image
import PortfolioContainerImage from '../../assets/images/portfolio-banner.png'

// data
import { projects } from './data'


function PortfolioContainer() {
    return (
        <Grid id="about" container sx={{ background: '#1D1D1D' }}>
            <Grid container item xs={10} sx={{ textAlign: 'center', paddingTop: '20px' }} >
                <Grid item xs={12}>
                    <SectionTitle title={'portfolio'} color={'white'} />
                    <PortfolioTableContainer items={projects} />
                </Grid>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <img src={PortfolioContainerImage} alt='portfolio-section-image' style={{ width: '100%', height: 'auto', }} />
            </Grid>
        </Grid>
    )
}

export default PortfolioContainer