import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'

import skillBannerImg from '../../assets/images/skill-banner.png'
import toolBannerImg from '../../assets/images/tool-banner.png'

import SkillCard from '../SkillContainer/SkillCard/SkillCard'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function CardDisplayer({ items, cardComponent }) {

    // console.log('items: ', items)

    const Card = cardComponent

    return (
        <Carousel
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosNewIcon />}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'none',
                    borderRadius: 5,
                    display: 'inline-block',
                    color: 'white'
                }
            }}
            navButtonsAlwaysVisible={true}
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    color: '#25AE92',
                    display: 'inline-block'
                }
            }}
            IndicatorIcon={< HorizontalRuleIcon sx={{ fontSize: '50px' }} />}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#25AE92'
                }
            }}
            sx={{
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
                        }}
                    >
                        {item.map(info => {
                            return (
                                < Card title={info.name} iconSrc={info.icon} type={info.type} />
                            )
                        })}
                    </Box>
                ))
            }

        </Carousel >
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