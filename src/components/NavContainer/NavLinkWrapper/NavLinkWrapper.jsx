import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
// import { styled } from '@mui/material/styles';

// const NavLinkButton = styled(Button)`
//     color: black;
//     text-transform: 'uppercase';
//     font-size: 16px;
//     font-weight: medium;
// `

const buttonName = ['about', 'skills', 'portfolio', 'contact', 'resume']


function NavLinkWrapper() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%', }}>
                <ButtonGroup variant="string" aria-label="outlined primary button group" sx={{ gap: '30px' }}>
                    {buttonName.length > 0 &&
                        buttonName.map(button =>
                            <Button
                                disableRipple variant='text' size="medium" href={`#${button}`} key={button}
                                sx={{ color: 'black', textTransform: 'uppercase', fontSize: '16px', fontWeight: 'medium', borderRadius: '10px' }} >
                                {button}
                            </Button>
                        )
                    }
                </ButtonGroup>
            </Box>
        </>
    )
}

export default NavLinkWrapper