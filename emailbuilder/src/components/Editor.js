import { Button, ButtonGroup, Box } from "@mui/material";
import React, { useState } from "react";
import BgColor from "./FormattingComponent/BgColor";
import Imageformatting from "./FormattingComponent/Imageformatting";
import Selecttheme from "./FormattingComponent/Selecttheme";
import LinkButton from "./FormattingComponent/Linkbutton";
import Structure from "./Structure";
import Linkbutton from "./FormattingComponent/Linkbutton";
import TextEditor from "./FormattingComponent/TextEditor";
const Editor = () => {
  const [area, setArea] = useState(false);
  const parentWrapper = {
    boxSizing: "border-box",
    width: "471px",
    height: "836px",
    left: "0px",
    top: "0px",
    background: "#ffffff",
    borderLeft: "1px solid #e9eceb",
  };
  const buttonstyle = {
    color:"black",
    fontWeight:'bold',
    width: "211.5px",
    height: "41pz",
    padding: "11px 12px",
    border:'1px #E9ECEB solid'  //#E9ECEB
  };
  return (
    <Box sx={parentWrapper}>
      <Box sx={{marginBottom:'24px'}}>
        <Button sx={buttonstyle}>
          Structure
        </Button>
        <Button sx={buttonstyle}>Formatting</Button>
      </Box>
      {/* <Imageformatting /> */}
      {/* <BgColor /> */}
      {/* <Structure /> */}
      {/* <LinkButton /> */}
      {/* <Selecttheme /> */}
      <TextEditor />
    </Box>
  );
};

export default Editor;
