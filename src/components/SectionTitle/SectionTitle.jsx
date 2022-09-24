import React from "react";
import { Typography } from "@mui/material";

function SectionTitle({ title, color = "#1D1D1D" }) {
  return (
    <Typography
      variant="h3"
      sx={{
        color: { color },
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: {
          xs: "24px",
          md: "32px",
        },
      }}
    >
      {title}
    </Typography>
  );
}

export default SectionTitle;
