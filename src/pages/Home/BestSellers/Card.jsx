import React from "react";

const BestSellerCard = ({ card, index }) => {
  return (
    <div
      className={`${
        index % 2 === 0 ? "bg-[#3A3838]" : "bg-[#D9D9D9]"
      } flex flex-col justify-center rounded-[30px] overflow-hidden w-[240px] mx-auto`}
    >
      <figure className="grid place-content-center h-[300px]">
        <img
          className={`${index % 2 === 0 ? "" : "mix-blend-multiply"}`}
          src={card?.img}
          alt={card?.title}
        />
      </figure>
      <div className="bg-green font-bold text-white p-5 text-center">
        <h1>{card?.title}</h1>
      </div>
    </div>
  );
};

export default BestSellerCard;
