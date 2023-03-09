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
    gap: "8px",
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
          fontSize: "14px",
          lineHeight: "16px",
          color: "#77777A",
          fontWeight: "bold",
        }}
      >
        Drag your image here or browse
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          lineHeight: "16px",
          color: "#77777A",
          fontWeight: "bold",
        }}
      >
        image size 600x270
      </Typography>
    </div>
  );
};

export default Images;
