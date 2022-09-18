import React from 'react'
import { Paper, Button, Box, Typography, Grid } from '@mui/material'

import iconReact from '../../../assets/icons/react.png'

import backgroundImg from '../../../assets/images/skill-card.png'

function SkillCard({ title, iconSrc }) {
    console.log('iconSrc', iconSrc)
    return (
        <Paper
            sx={{
                width: '230px',
                height: '287.5px',
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: 'cover',
                borderRadius: '20px',
                '&: hover': {
                    transform: 'scale(1.1)',
                }
            }}
        >
            <Grid container rowSpacing={4} >
                <Grid item xs={12} >
                    <img src={iconSrc} alt={title} style={{ width: '120px', height: 'auto', paddingTop: '.75rem', objectFit: 'cover' }} />
                </Grid>
                <Grid item xs={12} >
                    <Typography variant={'h3'}>{title}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SkillCard