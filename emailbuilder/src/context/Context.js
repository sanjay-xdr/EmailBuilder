import React, { createContext, useState } from "react";

export const Contentcontext = createContext();

const Context = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [editorBtn, setEditorBtn] = useState('s');
  const onClickHandler = (e) => {
    const temp = arr;
    temp.push(e.currentTarget.innerText);
    setArr(temp);
    console.log(arr);
  };
  return (
    <Contentcontext.Provider
      value={{
        arr,
        setArr,
        onClickHandler,
        setEditorBtn, 
        editorBtn,
      }}
    >
      {children}
    </Contentcontext.Provider>
  );
};

export default Context;
