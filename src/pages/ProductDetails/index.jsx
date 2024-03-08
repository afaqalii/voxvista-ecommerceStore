import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const colors = [
  {
    bgColor: "bg-[#000000]",
    borderColor: "border-[#000000]",
    colorName: "black",
  },
  {
    bgColor: "bg-white",
    borderColor: "border-[#000000]",
    colorName: "white",
  },
  {
    bgColor: "bg-[#4285F4]",
    borderColor: "border-[#000000]",
    colorName: "blue",
  },
  {
    bgColor: "bg-[#31A36C]",
    borderColor: "border-[#000000]",
    colorName: "green",
  },
];
const ProductDetails = () => {
  const [activeColor, setActiveColor] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      setSmallScreen(window.innerWidth >= 850);
    };
    // Initial check on mount
    handleResize();
    // Event listener for screen size changes
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="container flex justify-between gap-10 max-[850px]:flex-wrap my-10">
      {/* product image slider div*/}
      <div className="w-full min-[850px]:max-w-[400px]">
        <Carousel showThumbs={smallScreen} showStatus={false}>
          <div>
            <img
              className="mix-blend-difference"
              src="https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg"
            />
          </div>
          <div>
            <img
              className="mix-blend-difference"
              src="https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg"
            />
          </div>
          <div>
            <img
              className="mix-blend-difference"
              src="https://i5.walmartimages.com/asr/78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg"
            />
          </div>
        </Carousel>
      </div>
      {/* product details div */}
      <div className="w-full min-[850px]:max-w-[450px] text-white capitalize mx-auto">
        <div>
          <h1 className="text-5xl mb-3 mt-5">product name</h1>
          <p className="text-xl">category</p>
        </div>
        <p className="text-xl font-bold mt-5">color</p>
        {/* colors options */}
        <div className="flex mt-2">
          {colors.map((item, index) => (
            <span
              onClick={() => setActiveColor(index)}
              className={`${
                activeColor === index
                  ? "border-2 border-white"
                  : `border-2 ${item.borderColor}`
              } w-[20px] h-[20px] rounded-[3px] ml-1 cursor-pointer mb-2 ${
                item.bgColor
              }`}
            ></span>
          ))}
        </div>
        <p className="text-sm ">{colors[activeColor].colorName}</p>
        <h1 className="font-semibold text-3xl text-center my-5">$99.99</h1>
        <button className="grid place-content-center capitalize h-[40px] max-h-[40px] w-full bg-white text-black font-bold">
          add to cart
        </button>
        {/* product description */}
        <div className="my-5">
          <h1 className="capitalize text-lg">description</h1>
          <p className="text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            dolorem libero quibusdam? Praesentium doloribus exercitationem
            corporis aliquam, laborum pariatur ad!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
