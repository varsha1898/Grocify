import React from "react";
import CategoryPage from "../Banner/CategoryPage";
import BgSeaFood from "../../assets/Seafood-banner.jpg";

const Fruits = () => {
  return (
    <div>
      <CategoryPage
        title="Meat & SeaFood"
        bgImage={BgSeaFood}
        categories={["SeaFood"]}
      />
    </div>
  );
};

export default Fruits;
