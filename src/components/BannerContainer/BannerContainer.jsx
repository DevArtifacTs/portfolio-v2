import React from 'react'
import { Grid } from '@mui/material'

import BannerTextContainer from './BannerTextContainer'

// image
import bannerImage from '../../assets/images/hero-banner.png'


function BannerContainer() {
    return (
        <Grid container sx={{ background: 'black' }}>
            <Grid item xs={2} sx={{ padding: '5px' }}>
                <img src={bannerImage} alt="banner-image" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', paddingRight: '15px' }}>
                <BannerTextContainer />
            </Grid>
        </Grid>
    )
}

export default BannerContainer