import React from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";

import CardDisplayer from "../../CardDisplayer/CardDisplayer";
import SkillCard from "../SkillCard/SkillCard";

const buttons = ["skills", "tools"];

function SkillTableContainer({ handleCategory, category, items }) {
  console.log("items", items);
  return (
    <Grid container sx={{ height: "90%", marginTop: "10px" }}>
      {/* <Grid item xs={12} sx={{}}>
        <ButtonGroup
          variant="string"
          aria-label="outlined primary button group"
          sx={{ gap: "50px" }}
        >
          {buttons.length > 0 &&
            buttons.map((button) => (
              <Button
                disableRipple
                variant="string"
                name={button}
                onClick={(e) => handleCategory(e)}
                size="medium"
                key={button}
                sx={{
                  color: category[button] === true ? "#25AE92" : "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight: "medium",
                  borderRadius: "15px",
                  transition: "transform .5s ",
                  "&:hover": {
                    transform: "translateX(-10px) ",
                  },
                }}
              >
                {button}
              </Button>
            ))}
        </ButtonGroup>
      </Grid> */}
      <Grid item xs={12} sx={{}}>
        <CardDisplayer items={items} cardComponent={SkillCard} type={"skill"} />
      </Grid>
    </Grid>
  );
}

export default SkillTableContainer;
