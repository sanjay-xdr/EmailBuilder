import React, { useState } from "react";
// import axios from "axios";
import { Box } from "@mui/system";
import { Button, Stack, Grid } from "@mui/material";
import { FiUploadCloud } from "react-icons/fi";

const Imageformatting = () => {
  // const [image, setImage] = useState({});

  // const onFileChange = (event) => {
  //   setImage({ selectedFile: event.target.files[0] });
  // };

  // const onFileUpload = () => {
  //   const formData = new FormData();
  //   formData.append("myFile", image.selectedFile, image.selectedFile.name);
  //   console.log(image.selectedFile);
  //   axios.post("api/uploadfile", formData);
  // };
  return (
    <Box>
      <Button
        component="label"
        sx={{
          color: "black",
          fontWeight: "bold",
          backgroundColor: "#E9ECEB",
          border: "1px solid #B2B2B2",
          width: "391px",
          height: "48px",
        }}
      >
        <FiUploadCloud size="22px" style={{ marginRight: "9px" }} />
        Upload Image
        <input hidden accept="image/*" multiple type="file" />
      </Button>
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

export default Imageformatting;
