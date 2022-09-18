import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function CardDisplayer({ items, cardComponent, type = 'skill' }) {

    // console.log('items: ', items)

    const Card = cardComponent

    return (
        <Carousel
            NextIcon={items.length > 1 ? <ArrowForwardIosIcon /> : false}
            PrevIcon={items.length > 1 ? <ArrowBackIosNewIcon /> : false}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    backgroundColor: 'none',
                    borderRadius: 5,
                    display: 'inline-block',
                    color: 'white'
                }
            }}
            navButtonsAlwaysVisible={items.length > 1 ? true : false}
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
                style: {
                    color: '#25AE92',
                    display: 'inline-block'
                }
            }}
            IndicatorIcon={items.length > 1 ? < HorizontalRuleIcon sx={{ fontSize: '50px' }} /> : <></>}
            // IndicatorIcon={< HorizontalRuleIcon sx={{ fontSize: '50px' }} />}
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
                                <>
                                    {type === 'skill'
                                        ? < Card title={info.name} Icon={info.icon} type={info.type} key={info.name} />
                                        : < Card title={info.name} img={info.img} caption={info.caption} stacks={info.stacks} tag={info.tag} link={info.link} key={info.name} />
                                    }
                                </>
                            )
                        })}
                    </Box>
                ))
            }

        </Carousel >
    )
}

export default CardDisplayer