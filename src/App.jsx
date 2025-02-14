import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import { Route, Routes } from "react-router";
import Event from "./pages/Event";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <hr className="bg-white my-8" />
        <Footer />
      </div>
    </>
  );
}

export default App;
