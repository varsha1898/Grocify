import React from "react";
import Heading from "../Heading.jsx";
import basket from "../../assets/basket.png";
import { FaHeart, FaLeaf, FaShieldAlt, FaSeedling } from "react-icons/fa";

const Values = () => {
  const LeftValues = value.slice(0, 2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col md:flex-row-reverse items-center gap-7 p-6 rounded-xl bg-linear-to-r from-orange-50 to-orange-100 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
      >
        <div>
          <span className="flex justify-center items-center text-white bg-gradient-to-b from-orange-500 to-orange-300 w-16 h-16 rounded-full shadow-lg">
            {item.icon}
          </span>
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-zinc-800 text-2xl md:text-3xl font-bold">
            {item.title}
          </h4>
          <p className="text-zinc-600 mt-2">{item.desc}</p>
        </div>
      </div>
    );
  });

  const rightValues = value.slice(2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex flex-col md:flex-row items-center gap-7 p-6 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
      >
        <div>
          <span className="flex justify-center items-center text-white bg-gradient-to-b from-orange-500 to-orange-300 w-16 h-16 rounded-full shadow-lg">
            {item.icon}
          </span>
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-zinc-800 text-2xl md:text-3xl font-bold">
            {item.title}
          </h4>
          <p className="text-zinc-600 mt-2">{item.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading title="Our" subtitle="Values" />
        <div className="flex md:flex-row flex-col md:gap-10 mt-12 items-center">
          {/* Left values */}
          <div className="flex flex-col gap-10 w-full md:w-1/3">
            {LeftValues}
          </div>
          {/* middle image */}
          <div className="md:flex w-full md:w-1/3 justify-center hidden">
            <img
              src={basket}
              alt="Basket"
              className="w-80 h-auto drop-shadow-xl hover:scale-105 transition duration-300"
            />
          </div>
          {/* Right values */}
          <div className="flex flex-col gap-10 w-full md:w-1/3">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    desc: "We uphold the highest standards of integrity in all of our actions.",
    icon: <FaHeart className="text-2xl" />,
  },
  {
    id: 2,
    title: "Always Fresh",
    desc: "We develop relationships that make a positive difference in our customers' lives.",
    icon: <FaLeaf className="text-2xl" />,
  },
  {
    id: 3,
    title: "Food Safety & Quality",
    desc: "We provide outstanding products and unsurpassed service that deliver premium value to our customers.",
    icon: <FaShieldAlt className="text-2xl" />,
  },
  {
    id: 4,
    title: "100 % Organic",
    desc: "We work together, across boundaries, to meet the needs of our customers and to help our Company win.",
    icon: <FaSeedling className="text-2xl" />,
  },
];
