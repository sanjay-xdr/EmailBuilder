import React, {useContext} from "react";
import { Contentcontext } from "../../context/Context";

const CallToAction = () => {
  const { setEditorBtn, setFormatting } = useContext(Contentcontext);
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
    textAlign: "center",
    margin: "auto",
  };
  return (
    <div
      draggable
      style={stylebtn}
      onClick={(e) => {
        e.stopPropagation();
        setEditorBtn("f");
        setFormatting("linkbutton");
      }}
    >
      CallToAction
    </div>
  );
};

export default CallToAction;
