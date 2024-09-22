import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showALert('Converted to UpperCase!', 'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showALert('Converted to LowerCase!', 'success')
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showALert('Text Cleared!', 'success')
  };

  const handleReverseClick = () => {
    let newArr = [];
    let textArr = text.split("");
    let textLength = textArr.length;
    for (let i = textLength; i > 0; i--) {
      newArr.push(textArr[i - 1]);
    }
    setText(newArr.join(""));
    props.showALert('Words are Reversed!', 'success')
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showALert('Copied to Clipboard!', 'success')
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showALert('Extra Spaces Removed!', 'success')
  };

  const handleUpChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here2");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleUpChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>
          Reverse Characters
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Summary</h2>
        <p>
          You have {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the above to preview it here"}
        </p>
      </div>
    </>
  );
}
