import React from "react";
import { Paper, Button, Box, Typography, Grid } from "@mui/material";

// lib
import { IconContext } from "react-icons";

import skillBackgroundImg from "../../../assets/images/skill-card.png";
import toolBackgroundImage from "../../../assets/images/tool-card.png";

function SkillCard({ title, Icon, type }) {
  const IconElement = <Icon size={100} />;
  return (
    <Paper
      sx={{
        width: "230px",
        height: "287.5px",
        backgroundImage:
          type === "skill"
            ? `url(${skillBackgroundImg})`
            : `url(${toolBackgroundImage})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        transition: "transform .5s, box-shadow .8s",

        "&:hover": {
          transform: "translateX(-10px) translateY(-10px)",
          boxShadow: "10px 5px 10px rgba(37, 174, 146, .8)",
          color: "#25AE92",
          fontWeight: "bold",
        },
      }}
    >
      <Grid container rowSpacing={4} sx={{ marginTop: "25px" }}>
        <Grid item xs={12} sx={{ padding: "20px" }}>
          <IconContext.Provider
            value={{ className: "global-class-name" }}
            style={{ padding: "5px" }}
          >
            {IconElement}
          </IconContext.Provider>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={"h3"}
            sx={{ fontSize: "28px", fontWeight: "semi-bold" }}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SkillCard;
