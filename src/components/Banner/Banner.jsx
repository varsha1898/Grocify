import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, bgImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative h-[50vh] mt-20 flex items-center justify-center bg-center bg-cover"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          {title}
        </h2>

        <Link
          to="/"
          className="inline-block mt-6
             bg-orange-500 text-white 
             px-6 py-3 rounded-md 
             font-semibold text-base 
             shadow-md
             hover:bg-orange-600 hover:scale-105 transition-transform duration-300
             focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Banner;
