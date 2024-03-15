import React from "react";
import blueheadset from "../../../assets/featuredBlueHeadset.png";
import mike from "../../../assets/featuredMike.png";
import whiteheadset from "../../../assets/featuredHeadphone.png";
import { NavLink } from "react-router-dom";

const Featured = () => {
  const customStyle = {
    fill: "#E7E7E7",
    filter: "drop-shadow(3px 4px 4px rgba(169, 169, 169, 0.31))",
  };

  return (
    <NavLink to="/productListing">
      <div
        style={customStyle}
        className="container px-0 relative flex bg-darkGray rounded-lg my-10"
      >
        <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] uppercase text-green font-extrabold font-poppins text-center text-4xl min-[450px]:text-[56px]">
          featured!
        </h1>
        <figure className="flex-1">
          <img
            src={blueheadset}
            className="w-full object-cover h-full"
            alt="featured image"
          />
        </figure>
        <figure className="flex-1">
          <img
            src={mike}
            className="w-full h-full object-cover"
            alt="featured image"
          />
        </figure>
        <figure className="flex-1">
          <img
            src={whiteheadset}
            className="w-full object-cover h-full"
            alt="featured image"
          />
        </figure>
      </div>
    </NavLink>
  );
};

export default Featured;
