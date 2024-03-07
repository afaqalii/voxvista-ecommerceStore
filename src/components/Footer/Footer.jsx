import React from "react";
// assets
import { FaInstagram } from "react-icons/fa6";
import footerLogoRight from "../../assets/footerLogoRight.png";
import footerLogoCenter from "../../assets/footerLogoCenter.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const shopListItems = [
    "speakers",
    "headphones",
    "microphones",
    "vr headsets",
  ];
  const supportListItems = [
    "Buy Authentic",
    "Authorized Dealers",
    "Shipping Information",
    "Order Status",
    "Bulk Order",
  ];
  const aboutListItems = ["our company"];
  const followUsListItems = [
    {
      icons: [
        <FaInstagram style={{ fontSize: "24px", color: "white" }} />,
        <FaFacebook style={{ fontSize: "24px", color: "white" }} />,
        <FaTwitter style={{ fontSize: "24px", color: "white" }} />,
      ],
    },
    { text: "contact us" },
    { text: "support center" },
  ];

  const footerContent = [
    { title: "SHOP", listItems: shopListItems },
    { title: "SUPPORT", listItems: supportListItems },
    { title: "ABOUT US", listItems: aboutListItems },
  ];
  const style = {
    title: `font-semibold text-base text-white`,
    listItem: ``,
  };
  return (
    <footer className=" flex flex-col items-center bg-darkBlack border-t-2 border-white">
      <div className="relative w-full h-[600px]">
        <div className="relative z-10 container footer-grid py-20 border-b-green border-b-2">
          {/* footer items */}
          {footerContent.map((div) => (
            <div>
              <h1 className="text-white font-bold capitalize">{div.title}</h1>
              <ul>
                {div.listItems.map((item) => (
                  <li className="text-white py-2 capitalize cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h1 className="text-white font-bold capitalize">follow us</h1>
            <div>
              <div className="flex gap-3 mt-3">
                {followUsListItems[0].icons.map((icon) => (
                  <span>{icon}</span>
                ))}
              </div>
              {followUsListItems.map((item) => (
                <p className="text-white capitalize mt-3">{item?.text}</p>
              ))}
            </div>
          </div>
        </div>
        {/* footer rightside image */}
        <figure className="absolute h-full right-0 top-0">
          <img
            className="w-full h-full mix-blend-color-burn"
            src={footerLogoRight}
            alt="logo"
          />
        </figure>
      </div>
      {/* foooter copyright */}
      <div className="flex justify-between items-center px-5 bg-green w-full">
        <h1 className="text-xl min-[600px]:text-3xl font-stint uppercase font-extrabold">
          vox vista
        </h1>
        <img
          className="max-[500px]:w-[90px] max-[600px]:w-[120px]"
          src={footerLogoCenter}
          alt="footer logo"
        />
        <h1 className="text-xl min-[600px]:text-3xl font-stint uppercase font-extrabold">
          2023
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
