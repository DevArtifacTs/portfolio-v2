import React, { useState } from "react";
import { Grid, CardMedia } from "@mui/material";

// component
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillTableContainer from "./SkillTableContainer/SkillTableContainer";

// image
import SkillContainerImage from "../../assets/images/skill-banner.png";
import ToolContainerImage from "../../assets/images/tool-banner.png";

// data
import { skills, tools } from "./data";

function SkillContainer() {
  const [category, setCategory] = useState({
    skills: true,
    tools: false,
  });

  const handleCategory = (e) => {
    const keys = Object.keys(category);
    const newList = keys.map((key) => {
      console.log("key= ", key);
      if (key === e.target.name) {
        return [key, true];
      } else {
        return [key, false];
      }
    });
    const newCategoryObject = Object.fromEntries(newList);
    setCategory(newCategoryObject);
  };

  return (
    <Grid id="skills" container sx={{ background: "#1D1D1D" }}>
      <Grid
        item
        xs={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          alt="banner-image"
          image={category.skills ? SkillContainerImage : ToolContainerImage}
          sx={{
            width: "100%",
            height: "auto",
            filter: "grayscale(100%)",
            transition: "filter .8s",
            "&:hover": {
              filter: "grayscale(0)",
            },
          }}
        />
      </Grid>
      <Grid
        container
        item
        xs={10}
        sx={{ textAlign: "center", paddingTop: "20px" }}
      >
        <Grid item xs={12}>
          <SectionTitle title={"skills"} color={"white"} />
          <SkillTableContainer
            handleCategory={handleCategory}
            category={category}
            items={category.skills ? skills : tools}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SkillContainer;
