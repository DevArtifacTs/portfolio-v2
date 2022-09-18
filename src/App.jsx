import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Lib
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Divider, Chip } from '@mui/material';

import { FaBeer } from 'react-icons/fa';
import { IconContext } from "react-icons";



// Component 
import NavContainer from './components/NavContainer/NavContainer';
import BannerContainer from './components/BannerContainer/BannerContainer';
import AboutMeContainer from './components/AboutMeContainer/AboutMeContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';


function App() {

  return (
    <>
      {/* <IconContext.Provider value={{ color: "red", className: "global-class-name" }} >
        <FaBeer size={50} />
      </IconContext.Provider> */}

      <NavContainer />
      <BannerContainer />
      {/* <Divider variant="middle">
        <Chip label="CHIP" />
      </Divider> */}
      {/* <Divider sx={{ height: '100px' }} /> */}
      <AboutMeContainer />
      <SkillContainer />
      {/* <PortfolioContainer /> */}
    </>
  )
}

export default App
