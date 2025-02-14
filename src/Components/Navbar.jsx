import React, { useState } from "react";
import music from "../assets/music.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-w-screen-2xl shadow shadow-amber-50 px-5 md:px-20 flex items-center justify-between py-4 ">
        <div>
          <img
            className="shadow-md shadow-amber-50 h-12"
            src={music}
            alt="Music Logo"
          />
        </div>
        <div className="hidden md:flex items-center justify-between gap-12 text-2xl">
          <NavLink to="/" className="text-white" activeClassName="font-bold">
            Home
          </NavLink>
          <NavLink
            to="/event"
            className="text-white"
            activeClassName="font-bold"
          >
            Event
          </NavLink>
          <NavLink
            to="/artists"
            className="text-white"
            activeClassName="font-bold"
          >
            Artists
          </NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
          >
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white text-black font-bold text-2xl py-4 ">
          <NavLink
            to="/"
            className="py-2 shadow shadow-gray-500 w-full px-18"
            activeClassName="font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/event"
            className="py-2 shadow shadow-gray-500 w-full px-18"
            activeClassName="font-bold"
          >
            Event
          </NavLink>
          <NavLink
            to="/artists"
            className="py-2 shadow shadow-gray-500 w-full px-18"
            activeClassName="font-bold"
          >
            Artists
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
