import React, { useRef, useState } from "react";
// assets
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../assets/Logo.jpg";
import { IoMdMenu } from "react-icons/io";
import useClickOutsideDetector from "../../hooks/useClickAwayListner";

// local data
const iconSpan = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  cursor: "pointer",
};
const iconStyle = {
  fontSize: "30px",
  width: "30px",
  height: "30px",
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(); // use ref for opening closing menu items in mobile version
  const excludedRef = useRef();
  // using click away custom hook
  useClickOutsideDetector(
    menuRef,
    () => {
      setIsOpen(false);
    },
    excludedRef
  );

  return (
    <>
      <section className="relative font-stint flex flex-col justify-center items-center bg-green h-[106px] w-full">
        {/* black stripe up */}
        <span className="black-stripe-up relative bg-black w-full h-[21px]"></span>
        <nav className="container flex items-center justify-between bg-green h-[60px]">
          {/* logo section */}
          <div className="flex items-center gap-2 sm:gap-5 cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="absolute top-[50%] translate-y-[-50%] bottom-[-1px] z-[1]"
            />
            <h1 className="text-xl uppercase font-extrabold ml-[140px] max-[430px]:hidden min-[750px]:text-3xl">
              vox vista
            </h1>
          </div>
          {/* menu icon right */}
          <span ref={excludedRef}>
            <IoMdMenu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-2xl min-[600px]:hidden"
            />
          </span>
          {/* navbar right div */}
          <div
            className={`${
              isOpen ? "left-0" : "left-[-100%]"
            } max-[600px]:absolute flex   max-[600px]:flex-col min-[600px]:items-center max-[600px]:items-left  gap-5  max-[600px]:h-fulll max-[600px]:w-full max-[600px]:bg-green top-[122px]  z-[100] px-4 py-5 transition-all`}
            ref={menuRef}
          >
            <span style={iconSpan}>
              <FiSearch style={iconStyle} />
              <p className="text-[12px] text-black font-medium font-poppins capitalize min-[600px]:hidden">
                search
              </p>
            </span>
            <span style={iconSpan}>
              <FaCircleUser style={iconStyle} />
              <p className="text-[12px] text-black font-medium font-poppins capitalize min-[600px]:hidden">
                profile
              </p>
            </span>
            <span style={iconSpan}>
              <MdOutlineShoppingCart style={iconStyle} />
              <p className="text-[12px] text-black font-medium font-poppins capitalize min-[600px]:hidden">
                cart
              </p>
            </span>
          </div>
        </nav>
        <span className="black-stripe-down relative bg-black w-full h-[25px]"></span>
      </section>
      {/* navbar items  */}
      <div className="flex justify-center bg-lightWhite pl-10 max-[600px]:hidden">
        <ul className="container flex items-center font-poppins max-[860px]:flex-wrap max-[860px]:justify-center">
          {menuItems.map((item) => (
            <li className="capitalize whitespace-nowrap text-[13px] cursor-pointer mx-4 py-2 min-[860px]:py-3 hover:text-orange">
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
