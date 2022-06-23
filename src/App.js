import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title = "TextUtils" about = "About"/>
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze below"/>
      </div>
    </>
  );
}

export default App;
