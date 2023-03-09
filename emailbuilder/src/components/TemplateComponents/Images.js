import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { Contentcontext } from "../../context/Context";
import ImageIcon from "../../Images/ImageIcon.svg";

const Images = () => {
  const { setEditorBtn, setFormatting } = useContext(Contentcontext);
  const imagestyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    width: "600px",
    height: "201px",
    backgroundColor: "#F5F5F5",
    order: "1",
    flexGrow: "0",
  };
  return (
    <div
      draggable
      style={imagestyle}
      onClick={(e) => {
        e.stopPropagation();
        setEditorBtn("f");
        setFormatting("imageformatting");
      }}
    >
      <img src={ImageIcon} alt="image icon" />
      <Typography
        sx={{
          fontSize: "20px",
          lineHeight: "23.44px",
          color: "#77777A",
          fontWeight: "bold",
          // border:'1px solid black'
        }}
      >
        Add your header image here
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          lineHeight: "16px",
          color: "#77777A",
          fontWeight: "bold",
          // border:'1px solid black'
        }}
      >
        Recommended image size (in pixel) 600x270
      </Typography>
    </div>
  );
};

export default Images;
