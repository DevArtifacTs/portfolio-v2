import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const buttonName = ["about", "skills", "portfolio", "contact"];
// const buttonName = ['about', 'skills', 'portfolio', 'contact', 'resume']

function NavLinkWrapper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "100%",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <ButtonGroup
          variant="string"
          aria-label="outlined primary button group"
          sx={{
            gap: "30px",
          }}
        >
          {buttonName.length > 0 &&
            buttonName.map((button) => (
              <Button
                disableRipple
                variant="text"
                size="medium"
                href={`#${button}`}
                key={button}
                sx={{
                  color: "black",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  fontWeight: "medium",
                  borderRadius: "10px",
                  transition: "transform .5s, box-shadow .8s",
                  "&:hover": {
                    transform: "translateX(-10px) translateY(-10px)",
                    boxShadow: "10px 5px 10px rgba(37, 174, 146, .8)",
                    color: "#25AE92",
                    fontWeight: "bold",
                  },
                }}
              >
                {button}
              </Button>
            ))}
        </ButtonGroup>
      </Box>

      {/* Hamburger */}
      <IconButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        aria-label="delete"
        size="large"
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <MenuIcon sx={{ fontSize: "45px" }} />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transitionDuration={{ appear: 700, enter: 1300, exit: 1000 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {buttonName.map((button) => (
          <MenuItem onClick={handleClose}>
            <Button
              disableRipple
              variant="text"
              size="medium"
              href={`#${button}`}
              key={button}
              sx={{
                color: "black",
                textTransform: "uppercase",
                fontSize: "16px",
                fontWeight: "medium",
                borderRadius: "10px",
                transition: "transform .5s, box-shadow .8s",
                "&:hover": {
                  transform: "translateX(-10px) translateY(-10px)",
                  boxShadow: "10px 5px 10px rgba(37, 174, 146, .8)",
                  color: "#25AE92",
                  fontWeight: "bold",
                },
              }}
            >
              {button}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default NavLinkWrapper;
