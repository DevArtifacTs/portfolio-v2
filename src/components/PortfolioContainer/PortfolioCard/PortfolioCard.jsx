import React from "react";
import {
  Button,
  Typography,
  Stack,
  Divider,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// lib
import { IconContext } from "react-icons";

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  "&:hover": {
    filter: "grayscale(0)",
  },
}));

function PortfolioCard({ title, img, stacks, link, caption, tag }) {
  return (
    <Card
      sx={{
        width: "230px",
        height: "320px",
        display: "flex",
        background: "black",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "20px",
        transition: "transform .5s, box-shadow .8s",
        "&:hover": {
          transform: "translateX(-10px) translateY(-10px)",
          boxShadow: "10px 5px 10px white",
          color: "#25AE92",
          fontWeight: "bold",
        },
      }}
    >
      <StyledCardMedia
        component="img"
        alt={title}
        height="140"
        image={img}
        sx={{ filter: "grayscale(100%)" }}
      />
      <CardContent sx={{ padding: 0, padding: "0.4rem" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: "16px", textAlign: "start", color: "white" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "12px", textAlign: "justify", color: "#D9D9D9" }}
        >
          {caption}
        </Typography>
        <Divider
          light
          sx={{
            marginTop: "0.25rem ",
            marginBottom: "0.35rem",
            background: "#D9D9D9",
          }}
        />
        <Stack direction="row" spacing={1}>
          {stacks.map((Tech) => (
            <IconContext.Provider
              value={{ color: "white", className: "global-class-name" }}
              style={{ padding: "5px" }}
            >
              <Tech />
            </IconContext.Provider>
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          disableElevation
          variant="contained"
          target="blank"
          href={link}
          size=" small"
          sx={{
            color: "black",
            background: "rgba(255, 255, 255, .8)",
            transition: "transform .5s, box-shadow .8s",
            "&:hover": {
              transform: "translateX(-10px) translateY(-10px)",
              boxShadow: "3px 3px 10px white",
              background: "#25AE92",
              color: "white",
              //   fontWeight: "bold",
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PortfolioCard;
