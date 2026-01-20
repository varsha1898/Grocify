import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const Card = ({ image, price, title }) => {
  return (
    // Product Card
    <div className="bg-zinc-100 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* card Icons */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-2xl text-zinc-400 hover:text-red-500 cursor-pointer transition-colors">
          <FaHeart />
        </span>
        <button className="flex items-center justify-center bg-linear-to-r from-orange-400 to-orange-500 text-white text-lg w-10 h-10 rounded-lg hover:scale-105 transition-transform">
          <FaPlus />
        </button>
      </div>

      {/* card image */}
      <div className="w-full h-48 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Card content */}
      <div className="text-center mt-4">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-lg md:text-xl font-bold text-orange-600">${price}</p>
        <div className="mt-3">
          <Button content="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default Card;
