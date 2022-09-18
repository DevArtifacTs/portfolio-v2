import React from 'react'
import { Paper, Button, Link, Typography, Grid, Divider } from '@mui/material'

// lib
import { IconContext } from "react-icons";

function PortfolioCard({ title, img, stacks, link, caption, tag }) {
    return (
        <Paper
            sx={{
                width: '230px',
                height: '287.5px',
                borderRadius: '20px',
                '&: hover': {
                    transform: 'scale(1.1)',
                }
            }}
        >
            <Grid container rowSpacing={0} >
                <Grid item xs={12} >
                    <img src={img} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '20px 20px 0 0', }} />
                </Grid>
                <Grid item xs={12} sx={{ paddingLeft: '10px', marginBottom: '5px' }} >
                    <Typography variant={'h3'} sx={{ fontSize: '16px', fontWeight: 'medium', textAlign: 'start' }} >{title}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ maxHeight: '75px', textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px' }} >
                    <Typography variant={'body'} sx={{ width: '100%', lineHeight: '1', fontSize: '12px' }} >{caption}</Typography>
                </Grid>
                <Divider light sx={{ width: '100%', color: 'black' }} />
                <Grid item xs={12} sx={{ padding: '20px' }} >
                    <Typography variant={'caption'}>Tech Stack</Typography>
                    {stacks.length > 0 &&
                        stacks.map(stack => {
                            return (
                                <IconContext.Provider
                                    value={{ color: "black", className: "global-class-name" }}
                                    style={{ padding: "5px" }}
                                >
                                    < stack />
                                </IconContext.Provider>
                            )
                        })
                    }
                </Grid>
                <Grid container item xs={12} >
                    <Grid item xs={11}>
                        <Button component={Link} href={link} > Explore </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant={'caption2'}>{tag}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PortfolioCard