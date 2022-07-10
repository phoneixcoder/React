import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    if (newtext.length > 0) {
      props.showAlert("Converted to Upper Case!", "success");
    }else{
      props.showAlert("Enter something to convert", "danger");
    }
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    if (newtext.length > 0) {
      props.showAlert("Converted to Lower Case!", "success");
    }else{
      props.showAlert("Enter something to convert", "danger");
    }
  };
  const handleClearClick = () => {
    setText("");
    if (text.length > 0) {
      props.showAlert("Everthing cleared!", "success");
    }else{
      props.showAlert("Nothing to clear!", "danger");
    }
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyClick = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    if (text.length > 0) {
      props.showAlert("Copied to clipboard!", "success");
    }else{
      props.showAlert("Nothing to copy!", "danger");
    }
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Removed successfuly!", "success")
  }

  const [text, setText] = useState("");

  const style = {
    resize: 'none'
  }

  return (
    <>
      <div className={`container text-${props.mode === 'light' ? 'dark' : 'light' }`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="15"
            style = {style}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-light mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className={`container my-4 text-${props.mode === 'light' ? 'dark' : 'light' }`}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in above text box to preview it here."}</p>
      </div>
    </>
  );
}
