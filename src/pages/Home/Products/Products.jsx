import React from "react";
import Card from "./Card";
import img from "../../../assets/headsetWhite.png";
import bgImg from "../../../assets/headsetShadow.png";
import "../home.css"
const Products = () => {
  const card = {
    img,
    title: "Product Title",
    bgImg,
  };
  return (
    <section className="container py-10">
      <h1 className="text-white text-4xl text-center uppercase my-14">
        Products
      </h1>
      <div className="products-box">
        <Card card={card} />
        <Card card={card} />
        <Card card={card} />
      </div>
    </section>
  );
};

export default Products;
