import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import NavLogoWrapper from './NavLogoWrapper/NavLogoWrapper';
import ButtonGroupContainer from '../ButtonGroupContainer/ButtonGroupContainer';

export default function NavContainer() {

    return (
        <Box sx={{ flexGrow: 1, background: '#ffffff' }}>
            <AppBar position="sticky" sx={{ background: '#ffffff' }}>
                <Grid container >
                    <Grid item xs={3}>
                        <NavLogoWrapper />
                    </Grid>
                    <Grid item xs={9} >
                        <ButtonGroupContainer />
                    </Grid>
                </Grid>
            </AppBar>
        </Box >
    );
}
