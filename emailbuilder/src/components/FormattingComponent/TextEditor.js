import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import * as Emoji from "quill-emoji";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";

Quill.register("modules/emoji", Emoji);

const TextEditor = () => {
  const [value, setValue] = useState("");
  const reactQuillRef = useRef(null);
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "link"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["emoji"],
    ["clean"],
  ];
  return (
    <Box>
      <ReactQuill
        ref={reactQuillRef}
        theme="snow"
        placeholder="Start writing..."
        modules={{
          toolbar: {
            container: TOOLBAR_OPTIONS,
          },
          "emoji-toolbar": true,
          "emoji-textarea": false,
          "emoji-shortname": true,
        }}
        value={value}
        onChange={changeHandler}
      />
      
    </Box>
  );
};

export default TextEditor;
