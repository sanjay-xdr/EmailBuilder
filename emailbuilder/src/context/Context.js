import React, { createContext, useState } from "react";

export const Contentcontext = createContext();

const Context = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [editorBtn, setEditorBtn] = useState('s');
  const [formatting, setFormatting] = useState('selecttheme');
  
  return (
    <Contentcontext.Provider
      value={{
        arr,
        setArr,
        setEditorBtn, 
        editorBtn,
        formatting,
        setFormatting
      }}
    >
      {children}
    </Contentcontext.Provider>
  );
};

export default Context;
