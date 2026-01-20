import React from "react";
import Button from "../Button/Button.jsx";
import banner from "../../assets/fresh-fruits.png";

const Discount = () => {
  return (
    <section
      className="relative mt-12 rounded-2xl shadow-xl overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/80 via-white/70 to-transparent"></div>

      <div className="relative flex md:flex-row flex-col max-w-[1400px] mx-auto px-10 py-16 items-center gap-10">
        {/* Discount Percentage */}
        <span className="md:text-9xl text-6xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold md:self-center transform md:-rotate-90 drop-shadow-lg">
          20%
        </span>

        {/* Content */}
        <div className="max-w-[700px] text-center md:text-left animate-fadeIn">
          <h2 className="md:text-6xl text-4xl text-zinc-800 font-extrabold leading-tight">
            First Order <span className="text-orange-600">Discount</span>
          </h2>
          <p className="text-zinc-700 my-6 text-lg">
            Enjoy savings on your very first purchase! As a welcome gift, we’re
            offering an exclusive discount on your first order. Shop your
            favorite products today and make your first checkout extra special.
          </p>
          <Button
            content="Get a Discount"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Discount;
