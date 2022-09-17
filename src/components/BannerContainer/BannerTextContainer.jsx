import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles';

const WhiteDot = styled('span')`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: white;
    display: inline-block;
    &:hover {
        background: #25AE92;
    }
`
const LineWrapper = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

`

const WhiteText = styled('h3')`
    color: white;
    &:hover {
        color: #25AE92;
    }
    
`


function BannerTextContainer() {
    return (
        <Grid container rowSpacing={5} >
            <Grid item xs={12}>
                <LineWrapper>
                    <Typography variant='h3' sx={{ color: 'white', fontSize: '32px', fontWeight: 'bold' }}>Hi! I’m Jessada Srimoon</Typography>
                    <WhiteDot />
                </LineWrapper>
            </Grid>
            <Grid item xs={12}>
                <LineWrapper>
                    <Typography variant='h3' sx={{ color: '#25AE92', fontSize: '24px', fontWeight: 'bold' }}>
                        Software Developer
                        <span style={{ color: 'white' }}> & </span>
                        Mechanical Engineer
                    </Typography>
                    <WhiteDot />
                </LineWrapper>
            </Grid>
            <Grid item xs={12} sx={{ maxWidth: '50px' }}>
                <LineWrapper>
                    <Typography variant='subtitle1' sx={{ color: 'white', fontSize: '16px', }}>
                        Welcome to my website,  you can find here everything about me, my lastest work, my skills and my personality.
                    </Typography>
                    <WhiteDot />
                </LineWrapper>
            </Grid>
        </Grid>
    )
}

export default BannerTextContainer