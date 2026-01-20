import React from "react";
import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 via-white to-green-50 py-20 mt-2">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left animate-fadeIn">
          <span className="bg-orange-100 text-orange-600 text-lg px-5 py-2 rounded-full shadow-md inline-block">
            Export Best Quality...
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold my-6 leading-tight">
            Tasty Organic{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Fruits
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent">
              Veggies
            </span>{" "}
            In Your City
          </h1>
          <p className="text-zinc-700 text-lg mt-5 mb-6 max-w-[530px] mx-auto md:mx-0">
            Bred for a high content of beneficial substances. Our products are
            always fresh, organic, and healthy.
          </p>

          <div className="mt-6">
            <Button
              content="Shop Now"
              className="bg-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={Grocery}
            alt="Hero image"
            className="w-full max-w-sm md:max-w-lg drop-shadow-2xl transform hover:scale-105 transition duration-500 animate-float"
          />
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-2xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
