import React, { useState, useEffect } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isTimerRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isTimerRunning]);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
}

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
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
    props.showAlert("Converted to Capitalized", "success");
  };

  const startTimer = () => {
    setIsTimerRunning(true);
    props.showAlert("Timer start", "success");
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
    setSeconds(0);
    props.showAlert("Timer Stop", "success");
  };

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary " onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleCapitalizedClick}>
        Convert into Capitalized
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={clearText}>
        Clear
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={startTimer}>
        Start Timer
      </button>
      <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={stopTimer}>
        Stop Timer
      </button>
      <div className="mb-3 my-2"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <p>Elapsed time: {seconds} seconds</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </div>
    </>
  );
}









// import React, { useState } from "react";

// export default function TextForms(props) {
//   const [text, setText] = useState("Enter text here");
//     //text="new text"; //wrong way to change the state
//     //setText("new text"); //correct way to change the state
//   const [seconds, setSeconds] = useState(0);
//   const [isTimerRunning, setIsTimerRunning] = useState(false);
//   const timeer=()=>{
//     setIsTimerRunning(true);
//     let timer;
//     if (isTimerRunning) {
//     timer = setInterval(() => {
//       setSeconds((prevSeconds) => prevSeconds + 1);
//     }, 1000);
//    }

//     return () => {
//       clearInterval(timer);
//     };
//   } 

//   const handleUpClick = () => {
//     //console.log("Uppercase was clicked"+ text);
//     let newText = text.toUpperCase();
//     setText(newText);
//   };
//   const handleOnChange = (event) => {
//     //console.log("On change");
//     setText(event.target.value);
//   };
//   const handleLoClick = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//   };
//   const clearText=()=>{
//     setText("");
//   }
//   const timeerStop=()=>{
//     setIsTimerRunning(false);
//     setSeconds(0);
//   }

//   const handleCapitalizedClick = () => {
//     let newText;
//     let newTextArr = text.split(" ");
//     let capitalizedTextArr = [];

//     for (let i = 0; i < newTextArr.length; i++) {
//       capitalizedTextArr.push(
//         newTextArr[i].charAt(0).toUpperCase() + newTextArr[i].slice(1)
//       );
//     }

//     newText = capitalizedTextArr.join(" ");
//     setText(newText);
//   };
//   return (
//     <> 
//     <div>
//       <h1>{props.heading}</h1>
//       <div className="mb-3">
//         <textarea
//           className="form-control"
//           value={text}
//           onChange={handleOnChange}
//           id="myBox"
//           rows="8"
//         ></textarea>
//       </div>
//       <button className="btn btn-primary" onClick={handleUpClick}>
//         convert to Uppercase
//       </button>
//       <button className="btn btn-primary mx-1" onClick={handleLoClick}>
//         convert to Lowercase
//       </button>
//       <button className="btn btn-primary mx-1" onClick={handleCapitalizedClick}>
//         convert into Capitalized
//       </button>
//       <button className="btn btn-primary mx-1" onClick={clearText}>
//         clear
//       </button>
//       <button className="btn btn-primary mx-1" onClick={timeer}>
//         Speed
//       </button>
//       <button className="btn btn-primary" onClick={timeerStop}>
//         Timer Stop
//       </button>
//       <div className="container my-2">
//         <h1>Your text summary</h1>
//         <p>
//           {text.split(" ").length} words and {text.length} characters
//         </p>
//         <p>{0.008*text.split(" ").length} Minutes read</p>
//         <p>Elapsed time: {seconds} seconds</p>
//         <h2>Preview</h2>
//         <p>{text}</p>
//       </div>
//     </div>
//     </>
//   );
  
// }
