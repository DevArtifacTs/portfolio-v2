import React from 'react'
import { Typography } from '@mui/material'

function SectionTitle({ title }) {
    return (
        <Typography variant='h3' sx={{ color: '#1D1D1D', fontSize: '32px', textTransform: 'uppercase' }} > {title} </Typography>
    )
}

export default SectionTitle