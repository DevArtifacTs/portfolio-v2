import React from 'react'
import { Button, Typography, Stack, Divider, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import { styled } from '@mui/material/styles';

// lib
import { IconContext } from "react-icons";

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    '&:hover': {
        filter: 'grayscale(0)'
    }
}))

function PortfolioCard({ title, img, stacks, link, caption, tag }) {
    return (
        <Card
            sx={{
                width: '230px',
                height: '320px',
                display: 'flex',
                background: 'black',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '20px',
                '&: hover': {
                    transform: 'scale(1.1)',
                }
            }}
        >
            <StyledCardMedia
                component="img"
                alt={title}
                height="140"
                image={img}
                sx={{ filter: "grayscale(100%)" }}

            />
            <CardContent sx={{ padding: 0, padding: '0.4rem' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '16px', textAlign: 'start', color: 'white' }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px', textAlign: 'justify', color: '#D9D9D9' }}>
                    {caption}
                </Typography>
                <Divider light sx={{ marginTop: '0.25rem ', marginBottom: '0.35rem', background: '#D9D9D9' }} />
                <Stack direction="row" spacing={1}>
                    {stacks.map(Tech => (
                        <IconContext.Provider
                            value={{ color: "white", className: "global-class-name" }}
                            style={{ padding: "5px" }}
                        >
                            < Tech />
                        </IconContext.Provider>
                    )
                    )}
                </Stack>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    disableElevation
                    variant="contained"
                    href={link} size=" small"
                    sx={{ color: 'black', background: 'white' }}>
                    Learn More
                </Button>
            </CardActions>
        </Card >
    )
}

export default PortfolioCard