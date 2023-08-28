import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      //document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Navbar title="TextUtils" /> */}
    {/* <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
    {/* <About mode={mode}/> */}
    {/* here we are using Routes instead of Switch because Switch is on oldest version (before v 5) */}
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
        <Routes> 
            <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </div>
    </BrowserRouter>
    </> 
  );
}
export default App;