import React from 'react'
import { Grid, Box, Button, ButtonGroup } from '@mui/material'

import CardDisplayer from '../CardDisplayer/CardDisplayer'
import SkillCard from '../SkillCard/SkillCard'


const buttons = ['skills', 'tools']

var skillItems = [
    {
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

function SkillTableContainer({ handleCategory, category, items }) {


    return (
        <Grid container sx={{ height: '90%', marginTop: '10px' }}>
            <Grid item xs={12} sx={{}}>
                <ButtonGroup variant="string" aria-label="outlined primary button group" sx={{ gap: '50px', }}>
                    {buttons.length > 0 &&
                        buttons.map((button) =>
                            <Button
                                disableRipple
                                variant='string'
                                name={button}
                                onClick={handleCategory}
                                size="medium"
                                href={`#${button}`}
                                key={button}
                                sx={{
                                    color: category[button] === true ? '#25AE92' : 'white',
                                    textTransform: 'uppercase',
                                    fontSize: '16px',
                                    fontWeight: 'medium',
                                    borderRadius: '15px'
                                }} >
                                {button}
                            </Button>
                        )
                    }
                </ButtonGroup>
            </Grid>
            <Grid item xs={12} sx={{}} >
                <CardDisplayer items={items} />
            </Grid>
        </Grid>
    )
}

export default SkillTableContainer