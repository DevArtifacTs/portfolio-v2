import React, { useState } from "react";
import { Grid } from "@mui/material";

// component
import ButtonGroupContainer from "../ButtonGroupContainer/ButtonGroupContainer";
import AboutMeTextContainer from "./AboutMeTextContainer";
import SectionTitle from "../SectionTitle/SectionTitle";

// image
import AboutMeImage from "../../assets/images/about-me.png";

function AboutMeContainer() {
  return (
    <Grid id="about" container sx={{ marginTop: "0" }}>
      {/* <Grid id="about" container sx={{ marginTop: '10px', borderTop: '1px solid gray' }}> */}
      <Grid
        item
        xs={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ButtonGroupContainer />
      </Grid>
      <Grid item xs={8} sx={{ textAlign: "center", paddingTop: "20px" }}>
        <SectionTitle title={"about me"} />
        <AboutMeTextContainer />
      </Grid>
      <Grid item xs={2}>
        <img
          src={AboutMeImage}
          alt="about-me-image"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
    </Grid>
  );
}

export default AboutMeContainer;
