import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Lib
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider, Chip } from '@mui/material';



// Component 
import NavContainer from './components/NavContainer/NavContainer';
import BannerContainer from './components/BannerContainer/BannerContainer';
import AboutMeContainer from './components/AboutMeContainer/AboutMeContainer';


function App() {

  return (
    <>
      <NavContainer />
      <BannerContainer />
      {/* <Divider variant="middle">
        <Chip label="CHIP" />
      </Divider> */}
      {/* <Divider sx={{ height: '100px' }} /> */}
      <AboutMeContainer />
    </>
  )
}

export default App
