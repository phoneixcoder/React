import "./App.css";
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#011029';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
    }
  return (
    <>
      <Navbar title = "TextUtils" about = "About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze below" mode = {mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
