import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import Editor from "./components/Editor";
import { Grid, Box } from "@mui/material";
import Template from "./components/Template";
import Context from "./context/Context";

function App() {
  const[arr, setArr] = useState([]);
  return (
    <Context>
      <div>
        {/* <Header /> */}
        {/* <Grid container>
      <Grid item xs={7.2}>
        <Display />
      </Grid>
      <Grid item xs={4.8}>
        <Editor />
      </Grid>
    </Grid> */}

        {/* <Box >
          <Grid container>
            <Grid item xs={8}>
              <Display />
            </Grid>
            <Grid item xs={4}>
              <Editor />
            </Grid>
          </Grid>
        </Box> */}

        <div className="App">
          <div>
            <div>
              <Header />
            </div>
            <div style={{ display: "flex", direction: "row" }}>
              <div style={{ width: "70%" }}>
                <Display />
              </div>
              <div style={{position:"sticky"}}>
                <Editor  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Context>
  );
}

export default App;
