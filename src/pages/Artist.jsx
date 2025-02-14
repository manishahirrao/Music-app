import React from "react";
import singers from "../Components/singer.jsx";

const Artist = () => {
  return (
    <div className="px-5 md:px-20 mt-20">
      <p className="text-3xl md:text-5xl font-bold text-center md:text-left">
        Popular Indian Artists
      </p>
      <hr className="bg-white my-4 shadow-md" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {singers.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <img
              className="hover:scale-105 cursor-pointer h-32 w-32 object-cover rounded-full mx-auto"
              src={item.image}
              alt={item.name}
            />
            <h1 className="text-xl py-2 text-center text-black">{item.name}</h1>
            <h2 className="text-sm text-center text-black">{item.song}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artist;
