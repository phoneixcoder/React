import "./App.css";
import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      },1500);
    }

    const toggleMode = () => {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#011029';
        showAlert("Dark mode has been enabled", "success");
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
    }
  return (
    <>
      <Navbar title = "TextUtils" about = "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze below" mode = {mode} showAlert = {showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
