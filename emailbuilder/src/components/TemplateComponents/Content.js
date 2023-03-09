import React, { useContext } from "react";
import { Contentcontext } from "../../context/Context";
const Content = () => {
  const { setEditorBtn, setFormatting } = useContext(Contentcontext);
  return (
    <div
      draggable
      onClick={(e) => {
        e.stopPropagation();
        setEditorBtn("f");
        setFormatting("texteditor");
      }}
      style={{
        width: "500px",
        border: "2px dashed black",
        height: "100px",
        backgroundColor: "blue",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      content
    </div>
  );
};

export default Content;
