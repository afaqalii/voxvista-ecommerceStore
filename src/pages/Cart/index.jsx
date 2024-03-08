import React, { useState } from "react";
import whiteHeadSet from "../../assets/headsetWhite.png";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  let price = 50; // placeholder value for now
  return (
    <div className="container text-white my-10">
      <h1 className="font-bold text-3xl my-5">Shopping Cart</h1>
      <div className="flex gap-5 max-[900px]:flex-col">
        {/* left div */}
        <div className="w-full overflow-x-scroll">
          <table className="w-full min-w-[500px]">
            <thead className=" border-t-2 border-b-2 border-green h-[50px]">
              <tr>
                <td className="text-[17px]">Product</td>
                <td className="text-[17px]">Price</td>
                <td className="text-[17px]">Quantity</td>
                <td className="text-[17px]">Total</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* first td */}
                <td className="p-5">
                  <div className="flex gap-5">
                    {/* img div*/}
                    <figure className="w-[70px]">
                      <img src={whiteHeadSet} alt="headset white" />
                    </figure>
                    {/* content div */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h1 className="text-lg">Product Name</h1>
                        <span className="text-sm inline-flex gap-2 opacity-50 capitalize">
                          <p>color</p>
                          <p>white</p>
                        </span>
                      </div>
                      <button className="bg-white text-[9px] text-black rounded-[18px] font-semibold block w-[60px] h-[20px]">
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                {/* price */}
                <td className="py-5">${price}</td>
                {/* Quantity */}
                <td className="py-5">
                  <div className="flex items-center gap-5">
                    <FaChevronUp
                      className="w-[10px] cursor-pointer"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    />
                    {quantity}
                    <FaChevronDown
                      className="w-[10px] cursor-pointer"
                      onClick={() =>
                        setQuantity((prev) => {
                          if (prev > 1) {
                            return prev - 1;
                          } else {
                            return prev; // or return 0 if you want to prevent negative values
                          }
                        })
                      }
                    />
                  </div>
                </td>
                {/* total price */}
                <td className="py-5">${price * quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* right div */}
        <div className="flex flex-col min-h-screen w-[380px] text-white bg-gray p-5 capitalize rounded-l-xl">
          <h1 className="py-5 mb-10 border-t-2 border-b-2 border-green">
            order summary
          </h1>
          {/* item and shipping cost */}
          <div className="mb-5">
            <div className="flex items-center gap-10">
              <p className="opacity-50">item sub total</p>
              <p>$300</p>
            </div>
            <div className="flex items-center gap-10">
              <p className="opacity-50">shipping tax</p>
              <p>$150</p>
            </div>
          </div>
          {/* total */}
          <div className="flex gap-10 my-10">
            <p>total</p>
            <p>$450</p>
          </div>
          {/* checkout button */}
          <button className="rounded-[36px] uppercase text-white bg-green font-black h-[40px] text-lg">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
