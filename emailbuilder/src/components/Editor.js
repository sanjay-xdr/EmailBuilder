import { Box, Stack, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Contentcontext } from "../context/Context";
import Structure from "./Structure";
import {
  TextEditor,
  Linkbutton,
  BgColor,
  Imageformatting,
  Selecttheme,
} from "./FormattingComponent";
const Editor = () => {
  const { editorBtn, setEditorBtn } = useContext(Contentcontext);
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
    fontWeight: "bold",
    fontSize: "16px",
    width: "211.5px",
    height: "41px",
    padding: "11px 12px",
    color: "black",
    cursor: "pointer",
    border: "1px #E9ECEB solid", //#E9ECEB
  };
  const buttonStyleOnClick = {
    fontWeight: "bold",
    fontSize: "16px",
    width: "211.5px",
    height: "41px",
    padding: "11px 12px",
    color: "white",
    cursor: "pointer",
    backgroundColor: "blue",
    border: "1px #E9ECEB solid", //#E9ECEB
  };

  // const structureOnClick = {color : val == "s" ? 'white' : 'black', ...buttonstyle}
  // const buttonOnClick = {color : val == "f" ? 'white' : 'black', ...buttonstyle}

  const onClickHandlerStr = () => {
    setEditorBtn("s");
  };
  const onClickHandlerFor = () => {
    setEditorBtn("f");
  };
  return (
    <Box sx={parentWrapper}>
      <Grid>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ marginBottom: "24px" }}
        >
          {/* <Box bgcolor={val == 's' ? 'blue' :'white'}> */}
          <button
            style={editorBtn === "s" ? buttonStyleOnClick : buttonstyle}
            onClick={onClickHandlerStr}
          >
            Structure
          </button>
          {/* </Box> */}
          {/* <Box bgcolor={val == 'f' ? 'blue' :'white'}> */}
          <button
            style={editorBtn === "f" ? buttonStyleOnClick : buttonstyle}
            onClick={onClickHandlerFor}
          >
            Formatting
          </button>
          {/* </Box> */}
        </Stack>
      </Grid>
      {editorBtn === "f" && <TextEditor />}
      {editorBtn === "f" && <Imageformatting />}
      {editorBtn === "f" && <BgColor />}
      {editorBtn === "s" && <Structure />}
      {editorBtn === "f" && <Linkbutton />}
      {editorBtn === "f" && <Selecttheme />}
    </Box>
  );
};

export default Editor;
