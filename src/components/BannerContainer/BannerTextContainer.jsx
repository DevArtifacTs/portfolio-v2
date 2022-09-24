import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const WhiteDot = styled("span")`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: white;
  display: inline-block;
  transition: background 0.5s;
  &:hover {
    background: #25ae92;
  }
`;
const LineWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const WhiteText = styled("h3")`
  color: white;
  &:hover {
    color: #25ae92;
  }
`;

function BannerTextContainer() {
  return (
    <Grid
      container
      rowSpacing={5}
      sx={{
        padding: { xs: "1rem", md: "0" },
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "start", md: "end" },
        }}
      >
        <LineWrapper>
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontSize: "32px",
              fontWeight: "bold",
              transition: "color .8s, transform .5s",
              "&:hover": {
                color: "#25AE92",
                transform: "translateX(-10px) ",
              },
              fontSize: {
                xs: "22px",
                md: "32px",
              },
            }}
          >
            Hi! I’m Jessada Srimoon
          </Typography>
          <WhiteDot
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />
        </LineWrapper>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: { xs: "flex" },
          justifyContent: { xs: "start", md: "end" },
        }}
      >
        <LineWrapper>
          <Typography
            variant="h3"
            sx={{
              color: "#25AE92",
              fontWeight: "bold",
              transition: "color .8s, transform .5s",
              "&:hover": {
                color: "white",
                transform: "translateX(-10px) translateY(-10px)",
              },
              fontSize: {
                xs: "16px",
                md: "24px",
              },
            }}
          >
            Software Developer
            <span style={{ color: "white" }}> & </span>
            Mechanical Engineer
          </Typography>
          <WhiteDot
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />
        </LineWrapper>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          maxWidth: "50px",
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <LineWrapper>
          <Typography
            variant="subtitle1"
            sx={{
              color: "white",
              fontSize: "16px",
              transition: "color .8s, transform 0.5s",
              "&:hover": {
                color: "#25AE92",
                transform: "translateX(-10px)",
              },
            }}
          >
            Welcome to my website, you can find here everything about me, my
            lastest work, my skills and my personality.
          </Typography>
          <WhiteDot />
        </LineWrapper>
      </Grid>
    </Grid>
  );
}

export default BannerTextContainer;
