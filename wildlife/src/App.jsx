import { useState } from "react";
// import Land from "./Pages/Land/Land";
import Water from "./Pages/Water/Water";
import Wildlife from "./Pages/Wildlife/Wildlife";
import Home from "./Pages/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import "../src/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Pages/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Animal from "./Pages/Animal/Animal";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animal" element={<Animal/>}/>
          <Route path="/water" element={<Water />} />
          {/* <Route path="/land" element={<Land />} /> */}
          <Route path="/wildlife" element={<Wildlife />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
