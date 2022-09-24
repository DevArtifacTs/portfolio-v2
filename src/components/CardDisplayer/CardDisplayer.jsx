import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Box, Typography } from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

function CardDisplayer({ items, cardComponent, type = "skill" }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [itemList, setItemList] = useState(items);
  console.log("items in displayer", items);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  //   function GetItemGroupToDisplay(viewPort) {}

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    let oneLevelList;
    let mainItemSet = [];
    let subItemSet = [];
    let itemPersetCount = 0;
    if (windowSize.innerWidth <= 530) {
      oneLevelList = items.flatMap((itemSet) => itemSet);
      oneLevelList.forEach((item) => {
        subItemSet.push(item);
        itemPersetCount++;
        if (itemPersetCount === 1) {
          mainItemSet.push(subItemSet);
          subItemSet = [];
          itemPersetCount = 0;
        }
      });
      setItemList(mainItemSet);
    } else if (windowSize.innerWidth <= 750) {
      oneLevelList = items.flatMap((itemSet) => itemSet);
      oneLevelList.forEach((item) => {
        subItemSet.push(item);
        itemPersetCount++;
        if (itemPersetCount === 2) {
          mainItemSet.push(subItemSet);
          subItemSet = [];
          itemPersetCount = 0;
        }
      });
      setItemList(mainItemSet);
    } else {
      setItemList(items);
    }

    console.log("mainItemSet", mainItemSet);
  }, [windowSize]);

  //   console.log("items: ", items);
  //   console.log("windowSize: ", windowSize);

  const Card = cardComponent;

  return (
    <Carousel
      NextIcon={itemList.length > 1 ? <ArrowForwardIosIcon /> : false}
      PrevIcon={itemList.length > 1 ? <ArrowBackIosNewIcon /> : false}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          backgroundColor: "none",
          borderRadius: 5,
          display: "inline-block",
          color: "white",
        },
      }}
      navButtonsAlwaysVisible={itemList.length > 1 ? true : false}
      navButtonsWrapperProps={{
        // Move the buttons to the bottom. Unsetting top here to override default style.
        style: {
          color: "#25AE92",
          display: "inline-block",
        },
      }}
      IndicatorIcon={
        itemList.length > 1 ? (
          <HorizontalRuleIcon sx={{ fontSize: "50px" }} />
        ) : (
          <></>
        )
      }
      // IndicatorIcon={< HorizontalRuleIcon sx={{ fontSize: '50px' }} />}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#25AE92",
        },
      }}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      {itemList.map((item) => (
        <Box
          key={item.name}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "1rem",
            width: "100%",
            height: "100%",
          }}
        >
          {item.map((info) => {
            return (
              <>
                {type === "skill" ? (
                  <Card
                    title={info.name}
                    Icon={info.icon}
                    type={info.type}
                    key={info.name}
                  />
                ) : (
                  <Card
                    title={info.name}
                    img={info.img}
                    caption={info.caption}
                    stacks={info.stacks}
                    tag={info.tag}
                    link={info.link}
                    key={info.name}
                  />
                )}
              </>
            );
          })}
        </Box>
      ))}
    </Carousel>
  );
}

export default CardDisplayer;
