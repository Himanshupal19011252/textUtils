// import React, { useState } from "react";
import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export default function About(props) {

  // const[myStyle,setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor:'white',
  //   border: '1px solid black'
  // })
  
//   const [btntext, setbtnText] = useState("Enable Dark Mode")

//   const toggleStyle=()=>{
//     if(myStyle.color ==='black'){
//     setMyStyle({
//       color:'white',
//       backgroundColor:'black',
//       border: '1px solid white'
//     })
//     setbtnText("Enable Light Mode")
//   }
//   else{
//     setMyStyle({
//       color:'black',
//       backgroundColor:'white',
//       border: '1px solid black'
//     })
//     setbtnText("Enable Dark Mode")
//   }
// }

let myStyle = {
  color: props.mode ==='dark'?'white':'black',
  backgroundColor: props.mode ==='dark'?'#13466e':'white', 
}

  return (
    <>
    <div className="container">
      <h1 className="my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
      <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="0" >
          <Accordion.Header >Analyze Your text</Accordion.Header>
          <Accordion.Body style={myStyle}>
          Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" >
          <Accordion.Header>Free to use</Accordion.Header>
          <Accordion.Body style={myStyle}>
          TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" >
          <Accordion.Header>Browser Compatible</Accordion.Header>
          <Accordion.Body style={myStyle}>
          This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <div className="container my-2">
      <button className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
      </div> */}
    </div>
    </>
  );
}
