import React from "react";
import Card from "../Products/Card";

const BestSellers = () => {
  return (
    <div className="container">
      <h1 className="text-white font-stint text-[40px] text-center uppercase my-14">
        best sellers
      </h1>
      <div className="grid-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default BestSellers;
