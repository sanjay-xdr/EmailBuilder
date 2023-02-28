import React from "react";

const Images = () => {
  const imagestyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    width: "600px",
    height: "201px",
    background: "#F5F5F5",
    flex: "none",
    order: "1",
    flexGrow: "0",
    border:'2px solid black'
  };
  return <div draggable style = {imagestyle}>Images</div>;
};

export default Images;
