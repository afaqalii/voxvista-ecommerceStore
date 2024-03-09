import React from "react";
import whitePods from "../../../assets/whitePods.jpg";
import BestSellerCard from "./Card";
const BestSellers = () => {
  const summyData = [
    { id: 1, title: "WIRELESS EARBUDS", img: whitePods },
    { id: 1, title: "WIRELESS EARBUDS", img: whitePods },
    { id: 1, title: "WIRELESS EARBUDS", img: whitePods },
    { id: 1, title: "WIRELESS EARBUDS", img: whitePods },
  ];
  return (
    <div className="container">
      <h1 className="text-white font-stint text-3xl min-[450px]:text-[40px] text-center uppercase my-14">
        best sellers
      </h1>
      <div className="grid-container pb-[120px]">
        {summyData.map((item, index) => (
          <BestSellerCard card={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
