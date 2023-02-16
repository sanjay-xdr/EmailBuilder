import { Typography, Select, MenuItem, Grid, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

const Linkbutton = () => {
  const inputStyle = {
    width: "423px",
    height: "61px",
    background: "#F5F5F5",
    border: "1px solid #B2B2B3",
    borderRadius: "8px",
    fontSize: "16px",
  };
  const [url, setUrl] = useState("");
  const [fontFamily, setFontFamily] = useState("Roboto");
  const [buttonValue, setButtonValue] = useState("");
  const changeHandler = (e) => {
    setButtonValue(e.target.value);
  };
  const urlhandler = (e) => {
    setUrl(e.target.value);
  };
  const handleChange = (event) => {
    setFontFamily(event.target.value);
  };
  return (
    <Box ml="24px">
      <Stack ml="8px" mb="32px" direction="row" alignItems="center">
        <Typography mr="16px" variant="body1">
          Font Family:
        </Typography>
        <Select
          value={fontFamily}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            width: "142px",
            height: "34px",
          }}
        >
          <MenuItem value={fontFamily}>Roboto</MenuItem>
          <MenuItem value={fontFamily}>Georgia, serif</MenuItem>
          <MenuItem value={fontFamily}>sans-serif</MenuItem>
          <MenuItem value={fontFamily}>cursive</MenuItem>
        </Select>
      </Stack>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="body1">Call to Action Text:</Typography>
        <input
          style={inputStyle}
          type="text"
          value={buttonValue}
          onChange={changeHandler}
          placeholder="Click Here"
        />
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="body1">Link:</Typography>
        <input
          style={inputStyle}
          type="url"
          value={url}
          onChange={urlhandler}
          placeholder="https://example.example.com"
        />
      </Box>
      <Grid item xs={8} ml="281px" mt="28px">
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            style={{ color: "black", fontWeight: "bold" }}
            spacing={2}
            color="warning"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            href="#contained-buttons"
            style={{
              backgroundColor: "#FFB81C",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Save
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
};

export default Linkbutton;
