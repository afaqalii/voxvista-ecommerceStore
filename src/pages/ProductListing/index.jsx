import React, { useState } from "react";
import whiteHeadSet from "../../assets/headsetWhite.png";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import Select from "react-dropdown-select";
import ReactSlider from "react-slider";
import Card from "./Card";
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
  return (
    <div className="container text-white my-10">
      <h1 className="font-bold text-3xl my-5">Headphones</h1>
      <div className="flex gap-5 max-[900px]:flex-col">
        {/* left div */}
        <div className="w-full">
          <div className="productListing-container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
        {/* right div */}
        <div className="flex flex-col min-h-screen w-[380px] text-white bg-gray p-5 capitalize rounded-l-xl">
          <Select
            placeholder="Sort by"
            options={options}
            onChange={(values) => setValues(values)}
          />
          {/* total */}
          <div className="flex gap-10 my-10">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
