import { Button, Typography , Grid} from "@mui/material";
import { Box, Stack } from "@mui/system";

import React from "react";

const BgColor = () => {
  // const stackStyle = {
  //   width: "119.67px",
  //   height: "136px",
  // };
  const buttonStyle={
    color:'black', 
    backgroundColor:'#FBFBFB',
    width:"119.67px",
    height:"136px"
  }
  return (
    <Box sx={{marginLeft:'32px'}}>
      <Typography sx={{textAlign:"left", marginBottom:'19px'}}>Background Color:</Typography>
      <Stack direction="row" justifyContent="center" gap="16px">
        <Button sx={buttonStyle}>
          <Stack>
            <Box
              width="84px"
              height="84px"
              mb="12px"
              sx={{ backgroundColor: "#F4F5F5" , border:"1px solid #E9ECEB"}}
            ></Box>
            <Typography>Mid Grey</Typography>
          </Stack>
        </Button>
        <Button sx={buttonStyle}>
          <Stack>
            <Box
              width="84px"
              height="84px"
              mb="12px"
              sx={{ backgroundColor: "#FAFAFA" , border:"1px solid #E9ECEB"}}
            ></Box>
            <Typography>Pale Grey</Typography>
          </Stack>
        </Button>
        <Button sx={buttonStyle}>
          <Stack>
            <Box
              width="84px"
              height="84px"
              mb="12px"
              sx={{ backgroundColor: "#FFFFFF" , border:"1px solid #E9ECEB"}}
            ></Box>
            <Typography>White</Typography>
          </Stack>
        </Button>
      </Stack>
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

export default BgColor;
