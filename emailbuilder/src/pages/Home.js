import React from "react";
import Context from "../context/Context";
import Header from "../components/Header";
import Display from "../components/Display";
import Editor from "../components/Editor";

const Home = () => {
  return (
    <Context>
      <div style={{ position: "sticky", top: "0" }}>
        <Header />
      </div>
      <div style={{ height: "89vh", display: "flex" }}>
        <div style={{ width: "66%" }}>
          <Display />
        </div>
        <div
          style={{ width: "34%", display: "flex", justifyContent: "center" }}
        >
          <Editor />
        </div>
      </div>

      {/* <div style={{border:'2px solid red', height:'400px', display:'flex'}}>
        <div style={{border:'2px solid black',width:'70%'}}></div>
        <div style={{border:'2px solid black',width:'30%', display:'flex', direction:'column'}}>
        <div style={{border:'2px solid blue',width:'70%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div style={{width:'500px', height:'200px', border:"2px solid green"}}></div>
        </div>
        <div style={{border:'2px solid blue',width:'30%'}}></div>
        </div>
      </div> */}
    </Context>
  );
};

export default Home;
