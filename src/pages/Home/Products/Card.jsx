import React from "react";
import "./index.css"

const Card = ({ card }) => {
  const cardStyle = {
    backgroundImage:`url(${card?.bgImg})`,
    boxShadow: "3px 4px 4px 0px rgba(169, 169, 169, 0.31)",
    background: "rgba(231, 231, 231, 0.13)",
  };
  return (
    <div className="mx-auto">
      <figure style={cardStyle} className="grid place-content-center w-[268px] h-[460px] rounded-md">
        <img src={card?.img} alt={card?.title} />
        </figure>;
      <h1 className="text-white text-xl text-center">{card?.title}</h1>
    </div>
  );
};

export default Card;
