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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "16px",
        height: "100%",
        position:'relative',
        overflowY:'auto',
        height:'85%',
        paddingBottom:'20px', 
        // border:'1px solid black',
      }}
    >
    
      <div style={{minWidth:'753px', height:'72px', marginBottom:'9px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <ActionBar />
      </div>
      <div style={{width:'736px'}} >
      <Template />
      </div>
    </div>
  );
};

export default Display;
