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
    { iconElem: <LinkedInIcon />, link: 'https://www.linkedin.com/in/jessada-srimoon', alt: 'linked-in-link' },
    { iconElem: <GitHubIcon />, link: 'https://github.com/DevArtifacTs', alt: 'github-link' },
    { iconElem: <EmailIcon />, link: 'mailto: jessada_sr@hotmail.com', alt: 'email-link' }
]

function ButtonGroupContainer() {
    return (
        <>
            <Stack spacing={2} sx={{ width: '50px', background: '#D9D9D9', borderRadius: '10px' }} >
                {icons.length > 0 &&
                    icons.map(icon => (
                        <IconButton size='large' aria-label={icon.alt} >
                            <Link target="_blank" rel="noopener" href={icon.link}>
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