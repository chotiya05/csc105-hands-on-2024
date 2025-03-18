import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      </>
  );
}

export default App;

