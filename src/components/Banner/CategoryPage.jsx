import React from "react";
import Banner from "./Banner";
import ProductList from "../ProductList/ProductList";
import Card from "../Products/Card";
const CategoryPage = ({ title, bgImage, categories = [] }) => {
  let filterItems = categories.includes("All")
    ? ProductList
    : ProductList.filter((item) => categories.includes(item.category));
  const renderProduct = filterItems.map((product) => {
    return (
      <Card image={product.image} title={product.title} price={product.price} />
    );
  });
  return (
    <>
      <Banner title={title} bgImage={bgImage} />

      <div className="grid grid-col-1 gap-9 md:grid-cols-4 py-20 px-10 mx-w-[1400] mx-auto ">
        {renderProduct}
      </div>
    </>
  );
};

export default CategoryPage;
