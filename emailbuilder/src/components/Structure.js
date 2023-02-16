import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Tt from "../Images/Tt.svg";
import Landscape from "../Images/Landscape.svg";
import Calltoaction from "../Images/Calltoaction.svg";
import React from "react";
const Structure = () => {
  const getDraggables = (text, textimg) => {
    return (
      <Box
        draggable
        width="391px"
        height="52px"
        sx={{
          display: "flex",
          border: "1px solid #E9ECEB",
          alignItems: "center",
          marginLeft: "14px",
          marginBottom: "12px",
          cursor:'grab'
        }}
      >
        <img style={{marginLeft:'16px', marginRight:'16px'}} src={textimg} alt="" />
        <Typography>{text}</Typography>
      </Box>
    );
  };
  return (
    <Box display="flex" sx={{flexDirection:"column", alignItems:'center', marginTop:""}}>
      {getDraggables("Content", { Tt }.Tt)}
      {getDraggables("Image", { Landscape }.Landscape)}
      {getDraggables("Call to Action", { Calltoaction }.Calltoaction)}
    </Box>
  );
};

export default Structure;
