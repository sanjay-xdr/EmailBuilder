import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Tt from "../Images/Tt.svg";
import Landscape from "../Images/Landscape.svg";
import Calltoaction from "../Images/Calltoaction.svg";
import { Contentcontext } from "../context/Context";

const Structure = () => {
  const { arr, setArr } = useContext(Contentcontext);
  const onClickHandler = (e) => {
    const val = e.currentTarget.innerText;
    setArr((oldarr) => {
      return [...oldarr, val];
    });
    console.log(arr);
  };

  const getDraggables = (text, textimg) => {
    return (
      // ondrag start put the cursor to grabbing and release it onDragDrop
      <div draggable onClick={onClickHandler} style={{width:'84.55%'}}>
        <Box
        draggable="true"
          sx={{
            borderRadius:'4px',
            height: "52px",
            width:'100%',
            display: "flex",
            border: "1px solid #E9ECEB",
            alignItems: "center",
            cursor: "grab",
          }}
        >
          <img
            style={{ marginLeft: "16px", marginRight: "16px" }}
            src={textimg}
            alt=""
          />
          <Typography>{text}</Typography>
        </Box>
      </div>
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "",
        gap:'12px'
      }}
    >
      {getDraggables("Content", { Tt }.Tt)}
      {getDraggables("Image", { Landscape }.Landscape)}
      {getDraggables("Call to Action", { Calltoaction }.Calltoaction)}
    </Box>
  );
};

export default Structure;
