import React, { useContext, useEffect } from "react";
import { Contentcontext } from "../context/Context";
import Content from "./TemplateComponents/Content";
import Images from "./TemplateComponents/Images";
import CallToAction from "./TemplateComponents/CallToAction";
const Template = () => {
  const { arr, setArr, onClickHandler, setEditorBtn, setFormatting } =
    useContext(Contentcontext);
  useEffect(() => {
    return console.log(arr);
  }, []);
  const bgc = "#74D1EA";
  let ind = -1;
  const onDragEnter = (e) => {
    if (e.target.className === "template-class") {
      console.log("working");
    }
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  const onDrop = (e) => {
    e.preventDefault();
    console.log("this is also working");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

      <div
        className="template-class"
        style={{ width: "600px", backgroundColor: bgc }}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        onClick={() => {
          setEditorBtn("f");
          setFormatting("bgcolor");
        }}
      >
        {arr &&
          arr?.map((item, index) => {
            if (item === "Content") return <Content key={index} />;
            if (item === "Image") return <Images key={index} />;
            return <CallToAction key={index} />;
          })}
      </div>
    </div>
  );
};

export default Template;
