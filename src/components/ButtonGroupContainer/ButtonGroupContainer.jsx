import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { styled } from '@mui/material/styles';

const NavLinkButton = styled(Button)`
    color: black;
    text-transform: 'uppercase';
    font-size: 16px;
    font-weight: medium;
`

const buttonName = ['about', 'skills', 'portfolio', 'contact', 'resume']


function ButtonGroupContainer() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%' }}>
                <ButtonGroup variant="string" aria-label="outlined primary button group">
                    {buttonName.length > 0 &&
                        buttonName.map(button =>
                            <NavLinkButton href={`#${button}`} >
                                {button}
                            </NavLinkButton>
                        )
                    }
                </ButtonGroup>
            </Box>
        </>
    )
}

export default ButtonGroupContainer