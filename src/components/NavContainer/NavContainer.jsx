import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import NavLogoWrapper from "./NavLogoWrapper/NavLogoWrapper";
import NavLinkWrapper from "./NavLinkWrapper/NavLinkWrapper";

export default function NavContainer() {
  return (
    <AppBar position="sticky" sx={{ background: "#ffffff" }}>
      <Box sx={{ flexGrow: 1, background: "#ffffff" }}>
        <Grid container>
          <Grid item xs={5.5} md={5}>
            <NavLogoWrapper />
          </Grid>
          <Grid
            item
            xs={5.5}
            md={6}
            sx={{
              display: {
                xs: "flex",
                md: "block",
              },
              justifyContent: {
                xs: "flex-end",
              },
              alignItems: {
                xs: "center",
              },
            }}
          >
            <NavLinkWrapper />
          </Grid>
        </Grid>
      </Box>
    </AppBar>
  );
}
