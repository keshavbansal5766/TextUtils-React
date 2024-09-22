// import About from "./components/About";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showALert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showALert('Dark Mode Has Been Enabled', 'success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showALert('Light Mode Has Been Enabled', 'success')
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="textUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
          {/* <Routes> */}
          {/* <About /> */}
           <TextForm showALert={showALert} heading="Enter text to analyze" mode={mode}/>
          {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
