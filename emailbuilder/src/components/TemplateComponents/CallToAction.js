import React from "react";

const CallToAction = () => {
  const stylebtn = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "8px 24px",
    gap: "8px",
    width: "122px",
    height: "44px",
    background: "#002C3F",
    borderRadius: "4px",
    order: "0",
    color: "white",
    flexGrow: "0",
    textAlign:"center",
    margin:"auto"
  };
  return <div draggable style={stylebtn}>CallToAction</div>;
};

export default CallToAction;
