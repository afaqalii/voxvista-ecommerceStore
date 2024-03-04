import React from "react";
import "./index.css";

const Card = ({ card }) => {
  const cardStyle = {
    backgroundImage: `url(${card?.bgImg})`,
    boxShadow: "3px 4px 4px 0px rgba(169, 169, 169, 0.31)",
    background: "rgba(231, 231, 231, 0.13)",
  };
  return (
    <div className="mx-auto">
      {/* background mask */}
      <main className="relative overflow-hidden">
        <figure className="absolute left-0 top-0 w-full h-full scale-[1.3]">
          <img src={card?.mask} alt="image mask" />
        </figure>
        {/* img */}
        <figure
          style={cardStyle}
          className="grid place-content-center relative w-[268px] h-[460px] rounded-md"
        >
          <img src={card?.img} alt={card?.title} />
        </figure>
      </main>
      <h1 className="text-white text-xl mt-5 text-center">{card?.title}</h1>
    </div>
  );
};

export default Card;
