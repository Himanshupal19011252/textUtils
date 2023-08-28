import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText=()=>{
    let newText = ""
    setText(newText);
  }

  const timer = () => {
    const [seconds, setSeconds] = React.useState(0);
  
    React.useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    return <div>{seconds} seconds</div>;
  };
  
  const handleCapitalizedClick = () => {
    let newText;
    let newTextArr = text.split(" ");
    let capitalizedTextArr = [];

    for (let i = 0; i < newTextArr.length; i++) {
      capitalizedTextArr.push(
        newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1)
      );
    }

    newText = capitalizedTextArr.join(" ");
    setText(newText);
  };
  const [text, setText] = useState("Enter text here");
  //text="new text"; //wrong way to change the state
  //setText("new text"); //correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCapitalizedClick}>
        convert into Capitalized
      </button>
      <button className="btn btn-primary" onClick={clearText}>
        clear
      </button>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
