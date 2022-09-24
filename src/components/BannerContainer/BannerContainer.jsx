import React from "react";
import { Grid, CardMedia } from "@mui/material";

import BannerTextContainer from "./BannerTextContainer";

// image
import bannerImage from "../../assets/images/hero-banner-2.png";

function BannerContainer() {
  return (
    <Grid container sx={{ background: "#1D1D1D" }}>
      <Grid item xs={2} sx={{ padding: "5px" }}>
        <CardMedia
          component="img"
          alt="banner-image"
          // height="140"
          image={bannerImage}
          sx={{
            width: "100%",
            height: "400px",
            filter: "grayscale(100%)",
            transition: "filter .8s",
            "&:hover": {
              filter: "grayscale(0)",
            },
          }}
        />
      </Grid>
      <Grid
        item
        xs={10}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingRight: "15px",
        }}
      >
        <BannerTextContainer />
      </Grid>
    </Grid>
  );
}

export default BannerContainer;
