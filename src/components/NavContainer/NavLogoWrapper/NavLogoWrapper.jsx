import React from 'react'
import { Box, Typography, Container } from '@mui/material'
// import { styled } from '@mui/material/styles'


function NavLogoWrapper() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '5px',
                paddingBottom: '20px',
                borderRight: '0.5px solid black'
            }}>
                <Container sx={{ background: 'black', textAlign: 'center', padding: '5px', margin: '0' }}>
                    <Typography variant='h3' gutterBottom={true} sx={{ textTransform: 'uppercase', fontSize: '22px', fontWeight: 'bold', margin: '0' }} >software developer</Typography>
                </Container>
                <Typography variant='h4' gutterBottom={true} sx={{ color: 'black', fontSize: '14px', fontWeight: 'bold', textAlign: 'end', paddingRight: '10px' }} >Jessada Srimoon</Typography>
            </Box>
        </>
    )
}

export default NavLogoWrapper