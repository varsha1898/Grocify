import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      {/* Heading Component */}
      <div className="mx-auto w-fit">
        <h2 className=" text-zinc-800 md:text-5xl text-[2.5rem] font-bold  ">
          <span className="text-orange-500">{title}</span> {subtitle}
        </h2>
        <div className="w-34 h-1 bg-orange-300 md:mt-6 mt-4 ml-auto  "></div>
      </div>
    </>
  );
};

export default Heading;
