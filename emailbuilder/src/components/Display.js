import { display } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { Contentcontext } from "../context/Context";
import { ActionBar } from "./Actionbar";
import Template from "./Template";
const Display = () => {
  const { arr, setArr } = useContext(Contentcontext);
  useEffect(() => {
    return console.log(arr);
  }, [arr, setArr]);
  return (
    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
      <div style={{width:'753px', marginBottom:'9px'}}>
        <ActionBar />
        </div>
        <div style={{width:'736px'}} >
        <Template />
      </div>
    </div>
  );
};

export default Display;
