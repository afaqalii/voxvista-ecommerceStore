import React from "react";
import headset from "../../assets/headset.png";

const Card = () => {
  return (
    <div>
      <figure className="bg-gray200 rounded-[36px]">
        <img className="w-full h-full object-cover" src={headset} alt="headset" />
      </figure>
      <div className="flex items-center justify-between px-2 py-4">
        <h3>$55</h3>
        <button className="bg-green text-white font-bold text-lg w-full max-w-[83px] h-[40px] rounded-[36px]">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;
