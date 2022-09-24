import React from "react";
import { Box, Typography, Container } from "@mui/material";

function NavLogoWrapper() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "5px",
          paddingBottom: "20px",
          borderRight: "0.5px solid black",
        }}
      >
        <Container
          sx={{
            backgroundColor: "black",
            textAlign: "center",
            padding: "5px",
            margin: "0",
            transition: "transform .5s, box-shadow .8s",
            "&:hover": {
              backgroundColor: "#25AE92",
              transform: "scale(1.02) ",
              boxShadow: "0px 5px 10px rgba(0,0,0,.7)",
              // transform: " translateX(300px)",
            },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom={true}
            sx={{
              textTransform: "uppercase",
              fontSize: "22px",
              fontWeight: "bold",
              margin: "0",
            }}
          >
            software developer
          </Typography>
        </Container>
        <Typography
          variant="h4"
          gutterBottom={true}
          sx={{
            color: "black",
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "end",
            paddingRight: "10px",
            transition: " transform .5s  ",
            "&:hover": {
              color: "#25AE92",
              transform: "translateX(-10px)",
            },
          }}
        >
          Jessada Srimoon
        </Typography>
      </Box>
    </>
  );
}

export default NavLogoWrapper;
