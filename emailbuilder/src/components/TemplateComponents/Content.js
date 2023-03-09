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
        border: "1px solid black",
        backgroundColor: "none",
        margin: "auto",
        textAlign:'left',
        padding:'24px',
        // maxWidth:'600px',
        height:'auto'
      }}
    >
    Dear CG Team,
    <br />
    <br />
     It gives me immense pleasure to announce that we won the following project and added the new team members. It gives me immense pleasure to announce that we won the following project and added the new team members.
    </div>
  );
};

export default Content;
