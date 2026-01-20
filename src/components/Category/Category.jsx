import React from "react";
import Heading from "../Heading.jsx";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import MeatSeafoodCat from "../../assets/meat-and-seafood.png";
import DairyProductsCat from "../../assets/dairy-and-eggs.png";
import { FaArrowRight } from "react-icons/fa"; // example icons

import { Link } from "react-router-dom";
const Category = () => {
  const cards = categories.map((category) => {
    return (
      <div
        key={category.id}
        className="group p-8 bg-gradient-to-br from-orange-50 via-white to-green-50 
                   shadow-lg rounded-2xl text-center transition-all duration-300 
                   hover:-translate-y-2 hover:shadow-2xl"
      >
        {/* Image container */}
        <div className="w-full h-48 sm:h-56 md:h-64 flex items-center justify-center mb-6 relative">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-contain drop-shadow-md transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Decorative circle behind image */}
          <div className="absolute w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-40 -z-10"></div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
          {category.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          {category.description}
        </p>

        {/* Button */}
        {/* <Button content="See All" /> */}
        <Link
          to={category.path}
          className="inline-flex items-center gap-2 group
             bg-gradient-to-r from-orange-400 via-orange-500 to-red-500
             text-white px-6 py-3 rounded-full font-semibold text-base tracking-wide
             shadow-md transition-all duration-300 ease-in-out
             hover:from-orange-500 hover:via-red-500 hover:to-pink-500
             hover:scale-105 hover:shadow-lg
             focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2
             active:scale-95"
        >
          <span className="tracking-wide">See All</span>
          <FaArrowRight className="text-xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        </Link>
      </div>
    );
  });

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24">
      <Heading title="Shop" subtitle="by Category" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {cards}
      </div>
    </section>
  );
};

export default Category;

const categories = [
  {
    id: 1,
    title: "Fruits & Vegetables",
    description:
      "Discover a wide variety of fresh, organic fruits and vegetables sourced directly from local farms. Perfect for healthy meals and daily nutrition.",
    image: FruitsCat,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Meat & Seafood",
    description:
      "Premium cuts of meat and sustainably sourced seafood, carefully selected to ensure freshness, flavor, and quality for your family.",
    image: MeatSeafoodCat,
    path: "/seafood",
  },
  {
    id: 3,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and farm-fresh eggs, packed with essential nutrients to keep your meals delicious and balanced.",
    image: DairyProductsCat,
    path: "dairy",
  },
];
