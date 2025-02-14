import React from "react";
import side from "../assets/side.jpg";
import head from "../assets/head.jpg";

const Home = () => {
  return (
    <>
      <div className="px-5 md:px-20 flex flex-col md:flex-row justify-between mt-2">
        <div className="w-full md:w-[600px]">
          <p className="text-3xl md:text-5xl py-10 md:py-20 mt-10 md:mt-20 font-bold">
            Let's dive into the World of Music
          </p>
          <p className="text-xl md:text-3xl font-semibold mb-4 md:mb-8">
            Explore genres, artists, and the latest music trends.
          </p>
          <p className="text-lg md:text-xl font-medium">
            Discover the magic of melodies and rhythms. Stay updated with the
            latest news, reviews, and trends in the music world. Explore our
            featured artists, albums.
          </p>
          <div className="flex justify-evenly items-center mt-14 md:mt-28">
            <button className="bg-white cursor-pointer hover:bg-gray-500 hover:text-white text-black rounded-full text-lg md:text-2xl p-3 md:p-4 font-semibold">
              Sign Up
            </button>
            <button className="bg-white cursor-pointer hover:bg-gray-500 hover:text-white text-black rounded-full text-lg md:text-2xl p-3 md:p-4 px-6 font-semibold">
              Login
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto mt-8">
          <img className="w-full" src={head} alt="Music" />
        </div>
      </div>
    </>
  );
};

export default Home;
