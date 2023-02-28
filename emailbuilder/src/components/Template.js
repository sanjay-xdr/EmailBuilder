import React, { useContext, useEffect } from "react";
import { Contentcontext } from "../context/Context";
import Content from "./TemplateComponents/Content";
import Images from "./TemplateComponents/Images";
import CallToAction from "./TemplateComponents/CallToAction";
const Template = () => {
  const { arr, setArr, onClickHandler } = useContext(Contentcontext);
  useEffect(()=>{return(console.log(arr))}, [])
  const bgc = '#74D1EA';
  let ind = -1;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "600px", backgroundColor: bgc }}>
        {arr &&
          arr?.map((item, index) => {
            if (item === "Content") return <Content key={index} />;
            if (item === "Image") return <Images key={index} />;
            return <CallToAction key={index} />;
            {/* return <div key={index}>{item}</div> */}
          })} 
      </div>
    </div> 
  );
};

export default Template;
