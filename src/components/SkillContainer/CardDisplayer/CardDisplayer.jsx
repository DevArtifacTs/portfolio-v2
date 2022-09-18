import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'

import backgroundImg from '../../../assets/images/skill-card.png'

import SkillCard from '../SkillCard/SkillCard'

function CardDisplayer({ items }) {

    // console.log('items: ', items)

    return (
        <Carousel sx={{
            width: '100%',
            height: '100%',

        }}>
            {
                items.map(item => (
                    <Box
                        key={item.name}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            padding: '1rem',
                            width: '100%',
                            height: '100%',
                            // border: '1px solid red'
                        }}
                    >
                        {item.map(info => {
                            // console.log('info: ', info)
                            return (
                                < SkillCard title={info.name} iconSrc={info.icon} />
                            )
                        })}
                    </Box>
                ))
            }

        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper sx={{
            width: '280px', height: '350px', backgroundImage: `url(${backgroundImg})`,
            '&: hover': {
                transform: 'scale(1.1)'
            }
        }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default CardDisplayer