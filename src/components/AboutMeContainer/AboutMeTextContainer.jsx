import React from "react";
import { Stack, Typography, Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const BlackDot = styled("span")`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: black;
  display: inline-block;
  &:hover {
    background: #25ae92;
  }
`;

function AboutMeTextContainer() {
  return (
    <Stack
      spacing={5}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: "90%",
        marginLeft: { xs: "10px", md: "0" },
        marginBottom: { md: "20px" },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "80%" },
          maxHeight: { xs: "100%", md: "300px" },
          textAlign: "justify",
        }}
      >
        <Typography
          variant={"body"}
          sx={{
            width: "100%",
            lineHeight: "2.5",
            fontSize: { xs: "12px", md: "14px", lg: "18px" },
          }}
        >
          Hi!, My name is Jessada Srimoon, I am a Software Developer at Defence
          Innovation, Ltd and I have a plenty of project behind my back as a
          Frontend Developer and I also develop my own project as a Fullstack
          Developer. I like doing this and want to move on, learning new things,
          I try to keep abreast of trends in the field of Web application
          development, reading the popular sources. I love every job I have done
          and proud of it.
        </Typography>
      </Box>
    </Stack>
  );
}

export default AboutMeTextContainer;
