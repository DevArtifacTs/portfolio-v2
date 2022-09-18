import React from 'react'
import { Paper, Button, Box, Typography, Grid } from '@mui/material'


import skillBackgroundImg from '../../../assets/images/skill-card.png'
import toolBackgroundImage from '../../../assets/images/tool-card.png'

function SkillCard({ title, iconSrc, type }) {
    console.log('iconSrc', iconSrc)
    return (
        <Paper
            sx={{
                width: '230px',
                height: '287.5px',
                backgroundImage: type === 'skill' ? `url(${skillBackgroundImg})` : `url(${toolBackgroundImage})`,
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