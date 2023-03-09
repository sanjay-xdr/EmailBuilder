import * as React from "react";
import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

import { RiSendPlaneFill } from "react-icons/ri";
import { BsFileEarmarkTextFill } from "react-icons/bs";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const buttonstyle = {
  paddingRight:'16px',
  paddingLeft:'12px',
  display: "flex",
  gap:'12px',
  alignItems: "center",
  height: "40px",
  background: "transparent",
  border: "1px solid #343435",
  boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "600",
};
const sendButtonStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "40px",
  boxShadow: "0px 2px 10px rgba(34, 62, 73, 0.1)",
  borderRadius: "4px",
  fontSize: "14px",
  fontWeight: "600",
  border: "none",
  backgroundColor: "#FFB81C",
  width: "88px",
};

const inputStyle ={
  fontSize:'18px',
  border:'none',
  fontWeight:'500',
}

export function ActionBar() {
  return (
    <div
      style={{
        // border: "1px solid blue",
        height: "40px",
        width: "737px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "14px", fontWeight: "400", color: "#B2B2B3" }}>
          File Name:
        </span>
        {/* <span style={{ fontSize: "18px", fontWeight: "500" }}>
          Win Announcement
        </span> */}
        <input type='text' placeholder="Win Announcement" style={inputStyle}/>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button style={buttonstyle}>
          <BsFileEarmarkTextFill size="20px" />
          Save in Draft
        </button>
        <button style={buttonstyle}>
          <QueryBuilderIcon></QueryBuilderIcon>
          Schedule for Later
        </button>
        <button style={sendButtonStyle}>
          <RiSendPlaneFill size="24px" />
          Send
        </button>
      </div>
    </div>
  );
}
