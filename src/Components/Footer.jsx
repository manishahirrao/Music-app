import React from "react";
import music from "../assets/music.png";

const Footer = () => {
  return (
    <>
      <div className="px-5 md:px-20 pb-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img
            className="shadow-md shadow-amber-50 h-12"
            src={music}
            alt="Music Logo"
          />
        </div>
        <div className="text-lg md:text-xl font-light flex flex-col  gap-4  cursor-pointer">
          <p>Home</p>
          <p>Artist</p>
          <p>Event</p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right cursor-pointer">
          <p className="font-bold text-lg md:text-xl pb-4">Contact</p>
          <p>+12-26444641</p>
          <p>contact@gmail.com</p>
        </div>
      </div>
      <hr className="bg-white" />
      <p className="mt-4 mb-2 flex items-center justify-center text-center text-sm md:text-base">
        &copy;2025 Music Webpage. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
