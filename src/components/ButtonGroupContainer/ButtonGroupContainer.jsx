import React from 'react'
import { Link, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';


// icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const ColorButton = styled('div')(({ theme }) => ({
    color: 'grey',
    width: '100%',
    height: 'auto',
    '&:hover': {
        color: '#25AE92',
    },
}));

const icons = [
    { iconElem: <LinkedInIcon sx={{ fontSize: '100%' }} />, link: 'https://www.linkedin.com/in/jessada-srimoon', alt: 'linked-in-link' },
    { iconElem: <GitHubIcon sx={{ fontSize: '100%' }} />, link: 'https://github.com/DevArtifacTs', alt: 'github-link' },
    { iconElem: <EmailIcon sx={{ fontSize: '100%' }} />, link: 'mailto: jessada_sr@hotmail.com', alt: 'email-link' }
]

function ButtonGroupContainer() {
    return (
        <>
            <Stack spacing={2} sx={{ width: '60px', background: '#D9D9D9', borderRadius: '25px', padding: '5px 0 5px 0' }} >
                {icons.length > 0 &&
                    icons.map(icon => (
                        <IconButton aria-label={icon.alt} sx={{ fontSize: '35px' }} >
                            <Link target="_blank" rel="noopener" href={icon.link} sx={{ fontSize: '100%' }}>
                                <ColorButton>
                                    {icon.iconElem}
                                </ColorButton>
                            </Link>
                        </IconButton>
                    ))

                }
            </Stack >
        </>
    )
}

export default ButtonGroupContainer