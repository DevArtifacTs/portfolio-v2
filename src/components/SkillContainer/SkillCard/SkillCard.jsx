import React from 'react'
import { Paper, Button, Box, Typography, Grid } from '@mui/material'

// lib
import { IconContext } from "react-icons";


import skillBackgroundImg from '../../../assets/images/skill-card.png'
import toolBackgroundImage from '../../../assets/images/tool-card.png'

function SkillCard({ title, Icon, type }) {
    const IconElement = < Icon size={100} />
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
            <Grid container rowSpacing={4} sx={{ marginTop: '25px' }} >
                <Grid item xs={12} sx={{ padding: '20px' }} >
                    <IconContext.Provider
                        value={{ color: "black", className: "global-class-name" }}
                        style={{ padding: "5px" }}
                    >
                        {IconElement}
                    </IconContext.Provider>
                    {/* <img src={icon} alt={title} style={{ width: '120px', height: 'auto', paddingTop: '.75rem', objectFit: 'cover' }} /> */}
                </Grid>
                <Grid item xs={12} >
                    <Typography variant={'h3'}>{title}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SkillCard