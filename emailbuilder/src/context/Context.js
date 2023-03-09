import React, { createContext, useState } from "react";

export const Contentcontext = createContext();

const Context = ({ children }) => {
  const [arr, setArr] = useState(["Image", "Content"]);
  const [ctaName, setCtaName] = useState('Click Here');
  const [editorBtn, setEditorBtn] = useState("s");
  const [formatting, setFormatting] = useState("selecttheme");
  return (
    <Contentcontext.Provider
      value={{
        arr,
        setArr,
        setEditorBtn,
        editorBtn,
        formatting,
        setFormatting,
        ctaName,
        setCtaName,
      }}
    >
      {children}
    </Contentcontext.Provider>
  );
};

export default Context;
