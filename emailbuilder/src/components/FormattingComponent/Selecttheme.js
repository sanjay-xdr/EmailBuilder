import { Button, Typography, Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import logoLight from "../../Images/CG-logo-light.svg";
import logoDark from "../../Images/CG-logo-dark.svg";
import { BsFilterLeft, BsFilter, BsFilterRight } from "react-icons/bs";
import React from "react";

const Selecttheme = () => {
  return (
    <Box sx={{ marginLeft: "32px", width: "423px", margin: "auto" }}>
      <Typography sx={{ textAlign: "left", marginBottom: "12px" }} variant="h6">
        Select Theme
      </Typography>
      <Box>
        <Stack direction="row" justifyContent="center">
          <Button sx={{ color: "black" }}>
            <Stack sx={{ padding: "16px" }}>
              <Box width="156px" height="46.33px">
                <img
                  style={{ marginTop: "16px" }}
                  width="62.29px"
                  height="14.33px"
                  src={logoDark}
                  alt="Light Mode"
                />
              </Box>
              <Typography variant="text">Light Mode</Typography>
            </Stack>
          </Button>
          <Button sx={{ color: "black" }}>
            <Stack sx={{ padding: "16px" }}>
              <Box
                sx={{ backgroundColor: "#002C3F" }}
                width="156px"
                height="46.33px"
              >
                <img
                  style={{ marginTop: "16px" }}
                  width="62.29px"
                  height="14.33px"
                  src={logoLight}
                  alt="Dark Mode"
                />
              </Box>
              <Typography variant="text">Dark Mode</Typography>
            </Stack>
          </Button>
        </Stack>
      </Box>
      <Typography sx={{ textAlign: "left", marginBottom: "12px" }} variant="h6">
        Alignment
      </Typography>
      <Stack direction="row" justifyContent="center">
        <Button sx={{ color: "black" }}>
          <Stack
            width="120px"
            height="90px"
            justifyContent="center"
            alignItems="center"
          >
            <BsFilterLeft size="28.5px" />
            <Typography>Left</Typography>
          </Stack>
        </Button>
        <Button sx={{ color: "black" }}>
          <Stack
            width="120px"
            height="90px"
            justifyContent="center"
            alignItems="center"
          >
            <BsFilter size="28.5px" />
            <Typography>Center</Typography>
          </Stack>
        </Button>
        <Button sx={{ color: "black" }}>
          <Stack
            width="120px"
            height="90px"
            justifyContent="center"
            alignItems="center"
          >
            <BsFilterRight size="28.5px" />
            <Typography>Right</Typography>
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

export default Selecttheme;
