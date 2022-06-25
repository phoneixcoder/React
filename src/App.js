import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title = "TextUtils" about = "About"/>
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
