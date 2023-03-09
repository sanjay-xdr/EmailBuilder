import React, { useContext, useState } from "react";
import { Contentcontext } from "../../context/Context";

const CallToAction = () => {
  const { setEditorBtn, setFormatting, ctaName, setCtaName } =
    useContext(Contentcontext);
  const stylebtn = {
    width: "122px",
    height: "44px",
    fontSize: "16px",
    background: "#002C3F",
    borderRadius: "4px",
    color: "white",
    // textAlign: "center",
    margin: "auto",
    border:'none',
  };
  return (
    <div style={{
      width:'100%',
      // height:'92px',
      paddingBottom:'24px',
      paddingTop:'24px',
      background:'transparent',
      // border:'2px solid red'
    }}>
    <button
      draggable
      style={stylebtn}
      onClick={(e) => {
        e.stopPropagation();
        setEditorBtn("f");
        setFormatting("linkbutton");
      }}
    >
      {ctaName}
    </button>
    </div>
  );
};

export default CallToAction;
