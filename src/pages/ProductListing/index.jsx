import React, { useEffect, useRef, useState } from "react";
import whiteHeadSet from "../../assets/headsetWhite.png";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Select from "react-dropdown-select";
import Card from "./Card";
import "./productListing.css";
const options = [
  {
    value: 1,
    label: "Leanne Graham",
  },
  {
    value: 2,
    label: "Ervin Howell",
  },
];
const ProductListing = () => {
  const [values, setValues] = useState("");
  const [priceRange, setPriceRange] = useState(50);
  const inputValueRef = useRef();
  return (
    <div className="container text-white my-10">
      <h1 className="font-bold text-3xl my-5">Headphones</h1>
      <div className="flex gap-5 max-[900px]:flex-col">
        {/* left div */}
        <div className="w-full">
          <div className="productListing-container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        {/* right div */}
        <div className="flex flex-col min-h-screen w-[380px] text-white bg-gray p-5 capitalize rounded-l-xl">
          <Select
            placeholder="Sort by"
            options={options}
            value={values}
            onChange={(values) => setValues(values)}
          />
          {/* total */}
          <div className="flex flex-col gap-10 my-10">
            <h2 className="font-bold text-white text-lg">Price</h2>
            <div className="input-range">
              <div className="relative input-field">
                <input
                  className="w-full"
                  min={"50"}
                  max={"1000"}
                  type="range"
                  onClick={() => {
                    inputValueRef.current.classList.add("show");
                    let percentage = ((priceRange - 50) / (1000 - 50)) * 100; // Calculate percentage
                    inputValueRef.current.style.left = percentage + "%"; // Set left style with percentage
                    }}                  
                  onInput={() => {
                    let percentage = ((priceRange - 50) / (1000 - 50)) * 100; // Calculate percentage
                    inputValueRef.current.style.left = percentage + "%"; // Set left style with percentage
                    inputValueRef.current.classList.add("show");
                  }}
                  onBlur={() => {
                    inputValueRef.current.classList.remove("show");
                  }}
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                />
                <span ref={inputValueRef} className="inputValue">
                  ${priceRange}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <p>$50</p>
                <p>$1000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
