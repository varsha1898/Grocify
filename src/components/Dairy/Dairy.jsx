import React from "react";
import CategoryPage from "../Banner/CategoryPage";
import BgDairy from "../../assets/dairy-banner.jpg";

const Fruits = () => {
  return (
    <div>
      <CategoryPage
        title="Dairy & Eggs"
        bgImage={BgDairy}
        categories={["Dairy"]}
      />
    </div>
  );
};

export default Fruits;
