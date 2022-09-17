import React from 'react'
import { Link, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton';
// import { styled } from '@mui/material/styles';

import { styled } from '@mui/material/styles';


// icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const ColorButton = styled('div')(({ theme }) => ({
    color: 'grey',
    width: '100%',
    height: 'auto',
    // backgroundColor: 'grey',
    '&:hover': {
        color: '#25AE92',
    },
}));


const buttonName = ['about', 'skills', 'portfolio', 'contact', 'resume']


function ButtonGroupContainer() {
    return (
        <>
            <Stack spacing={2} sx={{ width: '50px', background: '#D9D9D9', borderRadius: '10px' }} >
                <IconButton size='large' aria-label="linked-in-link" >
                    <Link target="_blank" rel="noopener" href="https://www.linkedin.com/in/jessada-srimoon">
                        <ColorButton>
                            <LinkedInIcon />
                        </ColorButton>
                    </Link>
                </IconButton>
                <IconButton aria-label="linked-in-link" >
                    <Link target="_blank" rel="noopener" href="https://github.com/DevArtifacTs">
                        <ColorButton>
                            <GitHubIcon />
                        </ColorButton>
                    </Link>
                </IconButton>
                <IconButton aria-label="linked-in-link" >
                    <Link target="_blank" rel="noopener" href="mailto: jessada_sr@hotmail.com">
                        <ColorButton>
                            <EmailIcon />
                        </ColorButton>
                    </Link>
                </IconButton>

            </Stack >
        </>
    )
}

export default ButtonGroupContainer