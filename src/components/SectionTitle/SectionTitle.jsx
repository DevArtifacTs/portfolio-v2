import React from 'react'
import { Typography } from '@mui/material'

function SectionTitle({ title, color = '#1D1D1D' }) {
    return (
        <Typography variant='h3' sx={{ color: { color }, fontSize: '32px', textTransform: 'uppercase' }} > {title} </Typography>
    )
}

export default SectionTitle