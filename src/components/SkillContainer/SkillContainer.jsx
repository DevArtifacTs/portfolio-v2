import React, { useState } from 'react'
import { Grid } from '@mui/material'

// component
import SectionTitle from '../SectionTitle/SectionTitle'
import SkillTableContainer from './SkillTableContainer/SkillTableContainer'

// image
import SkillContainerImage from '../../assets/images/skill-banner.png'
import ToolContainerImage from '../../assets/images/tool-banner.png'

// data
import { skills, tools } from './data'


function SkillContainer() {

    const [category, setCategory] = useState({
        skills: true,
        tools: false,
    })

    const handleCategory = (e) => {
        const keys = Object.keys(category)
        const newList = keys.map(key => {
            console.log('key= ', key)
            if (key === e.target.name) {
                return [key, true]
            } else {
                return [key, false]
            }
        })
        const newCategoryObject = Object.fromEntries(newList)
        setCategory(newCategoryObject);
    };


    return (
        <Grid id="about" container sx={{ background: '#1D1D1D' }}>
            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <img src={category.skills ? SkillContainerImage : ToolContainerImage} alt='skill-section-image' style={{ width: '100%', height: 'auto', }} />
            </Grid>
            <Grid container item xs={10} sx={{ textAlign: 'center', paddingTop: '20px' }} >
                <Grid item xs={12}>
                    <SectionTitle title={'skills'} color={'white'} />
                    <SkillTableContainer handleCategory={handleCategory} category={category} items={category.skills ? skills : tools} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SkillContainer