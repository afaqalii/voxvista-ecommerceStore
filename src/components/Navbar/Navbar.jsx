import React from "react";
// assets
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../assets/Logo.jpg";

const Navbar = () => {
  const iconSpan = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
  };
  const iconStyle = {
    fontSize: "30px",
  };

  const menuItems = [
    { id: 1, item: "all products" },
    { id: 2, item: "featured" },
    { id: 3, item: "speakers" },
    { id: 4, item: "microphones" },
    { id: 5, item: "sound bars" },
    { id: 6, item: "specialty audio" },
    { id: 7, item: "earbuds" },
  ];

  return (
    <>
      <section className="relative font-stint flex flex-col justify-center items-center bg-green h-[106px] w-full">
        <span className="black-stripe-up relative bg-black w-full h-[21px]"></span>
        <nav className="container flex items-center justify-between bg-green h-[60px]">
          {/* logo section */}
          <div className="flex items-center gap-2 sm:gap-5 cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="absolute top-[50%] translate-y-[-50%] bottom-[-1px] z-[1]"
            />
            <h1 className="text-3xl uppercase font-extrabold ml-[140px]">vox vista</h1>
          </div>
          {/* navbar right div */}
          <div className="flex items-center gap-5">
            <span style={iconSpan}>
              <FiSearch style={iconStyle} />
            </span>
            <span style={iconSpan}>
              <FaCircleUser style={iconStyle} />
            </span>
            <span style={iconSpan}>
              <MdOutlineShoppingCart style={iconStyle} />
            </span>
          </div>
        </nav>
        <span className="black-stripe-down relative bg-black w-full h-[25px]"></span>
      </section>
      {/* navbar items  */}
      <div className="flex justify-center bg-lightWhite pl-10">
        <ul className="container flex items-center gap-7 font-poppins">
          {menuItems.map((item) => (
            <li className="capitalize text-[13px] cursor-pointer mx-3 py-3 hover:text-orange">{item.item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
