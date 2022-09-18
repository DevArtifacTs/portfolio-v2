import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'

const buttonName = ['about', 'skills', 'portfolio', 'contact']
// const buttonName = ['about', 'skills', 'portfolio', 'contact', 'resume']


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