import React, { useState } from "react";
import Heading from "../Heading.jsx";
import ProductList from "../ProductList/ProductList";
import Card from "../Products/Card";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // example icons
const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [isActive, setActiveTab] = useState("All");

  let filteredItems =
    isActive === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === isActive);

  const renderCards = filteredItems.slice(0, 8).map((product, index) => {
    return (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-5"
      >
        <Card
          image={product.image}
          title={product.title}
          price={product.price}
        />
      </div>
    );
  });

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-green-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Heading title="Our" subtitle="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 text-lg rounded-full font-semibold transition-all duration-300 ${
                isActive === category
                  ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg scale-105"
                  : "bg-zinc-100 text-gray-700 hover:bg-zinc-200"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
          {renderCards}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-16 flex justify-center">
        <Link
          to="/allproducts"
          className="inline-flex items-center gap-3 group
             bg-gradient-to-r from-orange-700 via-orange-500 to-red-500
             text-white px-8 py-3  font-semibold text-lg
             shadow-lg transition-all duration-300 ease-in-out
             hover:from-orange-600 hover:via-orange-400 hover:to-red-500
             hover:scale-110 hover:shadow-xl
             focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2
             active:scale-95"
        >
          <span className="tracking-wide">View All</span>
          <FaArrowRight className="text-xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        </Link>
      </div>
    </section>
  );
};

export default Products;
