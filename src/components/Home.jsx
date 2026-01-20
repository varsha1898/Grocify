import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Category from "./Category/Category";
import Values from "./Values/Values";
import Products from "./Products/Products";
import Discount from "./Discounts/Discount";
import Process from "./Process/Process";
import Testimonals from "./Testomonials/Testimonals";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonals />
    </div>
  );
};

export default Home;
