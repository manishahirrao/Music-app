import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Artist from "./Pages/Artist";
import { Route, Routes } from "react-router";
import Event from "./Pages/event";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artist />} />
          <Route path="/event" element={<Event />} />
        </Routes>
        <hr className="bg-white my-8" />
        <Footer />
      </div>
    </>
  );
}

export default App;
