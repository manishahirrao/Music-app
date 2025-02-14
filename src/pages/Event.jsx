import React from "react";
import arijit from "../assets/arijit.jpg";

const Event = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row px-5 md:px-20 justify-between items-center mt-12">
        <img
          className="w-full md:w-[800px] cursor-pointer mb-8 md:mb-0"
          src={arijit}
          alt="Arijit Singh"
        />
        <p className="text-white w-full md:w-[400px] text-xl md:text-2xl">
          Get ready for the musical experience of a lifetime as Arijit Singh,
          India’s most beloved and streamed artist, embarks on his highly
          anticipated 5-city concert tour! This isn't just another concert—it's
          an epic journey of emotion, passion, and pure magic, bringing Arijit’s
          timeless voice to your city like never before. Known for his
          soul-stirring melodies and unparalleled ability to connect with
          audiences, Arijit Singh has redefined Indian music over the last
          decade, becoming the heartbeat of millions worldwide.
        </p>
      </div>
      <p className="px-5 md:px-20 text-lg md:text-2xl font-light mt-8">
        Whether it’s the haunting romance of “Tum Hi Ho,” the infectious energy
        of “Channa Mereya,” or the soulful depth of “Agar Tum Saath Ho,”
        Arijit’s voice has soundtracked the lives of fans across generations.
        But this tour is different. This isn’t just Arijit singing your favorite
        songs—it’s Arijit like you’ve never seen him before.
      </p>
    </>
  );
};

export default Event;
