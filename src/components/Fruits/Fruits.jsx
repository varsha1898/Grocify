import React from "react";
import CategoryPage from "../Banner/CategoryPage";
import BgFruits from "../../assets/Fruits-Banner.jpg";

const Fruits = () => {
  return (
    <div>
      <CategoryPage
        title="Fruits & Veggies"
        bgImage={BgFruits}
        categories={["Fruits", "Vegetables"]}
      />
    </div>
  );
};

export default Fruits;
