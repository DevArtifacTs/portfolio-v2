import React from 'react'
import { Box, Container, Grid } from '@mui/material'

// child as object

function SectionContainer({ bgColor, child }) {
    const childrenNumber = child.length;
    console.log('child', child, 'bgColor', bgColor)
    return (
        <>
            <Grid container sx={{ backgroundColor: { bgColor } }} >
                {childrenNumber.length > 0 &&
                    child.map((child) => (
                        <Grid item xs={child.grow}  >
                            {<child />}
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default SectionContainer