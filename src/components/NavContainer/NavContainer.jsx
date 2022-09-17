import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import NavLogoWrapper from './NavLogoWrapper/NavLogoWrapper';
import NavLinkWrapper from './NavLinkWrapper/NavLinkWrapper';

export default function NavContainer() {

    return (
        <Box sx={{ flexGrow: 1, background: '#ffffff' }}>
            <AppBar position="sticky" sx={{ background: '#ffffff' }}>
                <Grid container >
                    <Grid item xs={3}>
                        <NavLogoWrapper />
                    </Grid>
                    <Grid item xs={9} >
                        <NavLinkWrapper />
                    </Grid>
                </Grid>
            </AppBar>
        </Box >
    );
}