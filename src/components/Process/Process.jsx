import React from "react";
import Heading from "../Heading.jsx";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: (
      <TbCircleNumber1Filled className="text-5xl bg-gradient-to-r from-green-500 to-lime-500 bg-clip-text text-transparent" />
    ),
    title: "Sourcing",
    para: "We carefully source raw materials to ensure sustainability and quality.",
    icon: <PiPlant className="text-6xl text-green-500" />,
    color: "from-green-50 to-green-100",
  },
  {
    id: 2,
    number: (
      <TbCircleNumber2Filled className="text-5xl bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent" />
    ),
    title: "Manufacturing",
    para: "Our advanced facilities transform raw materials into finished products.",
    icon: <PiFactory className="text-6xl text-blue-500" />,
    color: "from-blue-50 to-blue-100",
  },
  {
    id: 3,
    number: (
      <TbCircleNumber3Filled className="text-5xl bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent" />
    ),
    title: "Quality Control",
    para: "Every product undergoes strict quality checks before reaching customers.",
    icon: <SlBadge className="text-6xl text-yellow-500" />,
    color: "from-yellow-50 to-yellow-100",
  },
  {
    id: 4,
    number: (
      <TbCircleNumber4Filled className="text-5xl bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent" />
    ),
    title: "Logistics",
    para: "We ensure safe and timely delivery through efficient logistics.",
    icon: <BsTruck className="text-6xl text-red-500" />,
    color: "from-red-50 to-red-100",
  },
];

const Process = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="mr-auto w-fit mb-16 text-center md:text-left">
          <Heading title="Our" subtitle="Process" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-center text-center p-10 rounded-3xl shadow-lg bg-gradient-to-br ${step.color} transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105`}
            >
              {/* Number */}
              <div className="mb-6">{step.number}</div>

              {/* Icon with glow */}
              <div className="mb-6 bg-white p-6 rounded-full shadow-lg ring-4 ring-orange-100 hover:ring-orange-300 transition">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-extrabold mb-3 text-gray-800">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{step.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
