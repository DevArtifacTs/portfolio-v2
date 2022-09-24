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
          borderRight: {
            xs: "none",
            md: "0.5px solid black",
          },
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
            },
          }}
        >
          <Typography
            variant="h3"
            gutterBottom={true}
            sx={{
              textTransform: "uppercase",
              fontWeight: "bold",
              margin: "0",
              fontSize: {
                xs: "12px",
                sm: "16px",
                md: "22px",
              },
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
            fontWeight: "bold",
            textAlign: "end",
            paddingRight: "10px",
            transition: " transform .5s  ",
            fontSize: {
              xs: "12px",
              sm: "14px",
            },
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
