import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Lib
import { createTheme, ThemeProvider } from "@mui/material/styles";


// image
import bannerImage from './assets/images/hero-banner.png'

// Component 
import NavContainer from './components/NavContainer/NavContainer'
import BannerContainer from './components/BannerContainer/BannerContainer'

function App() {

  return (
    <>
      {/* <ThemeProvider > */}
      <NavContainer />
      <BannerContainer imgSource={bannerImage} />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
