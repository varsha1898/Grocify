import React from "react";

const Button = ({ content }) => {
  return (
    <button
      className="relative inline-block 
                 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500
                 text-white px-6 py-3 rounded-full font-semibold text-base tracking-wide
                 shadow-md transition-all duration-300 ease-in-out
                 hover:from-orange-500 hover:via-red-500 hover:to-pink-500
                 hover:scale-105 hover:shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2
                 active:scale-95"
    >
      {/* Glow effect behind text */}
      <span className="relative z-10">{content}</span>

      {/* Animated ripple effect */}
      <span className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-10 transition duration-500"></span>
    </button>
  );
};

export default Button;
