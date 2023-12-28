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
    { icons: [<FaInstagram />, <FaFacebook />, <FaTwitter />] },
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
    <footer className="relative grid place-content-center h-[600px] bg-darkBlack border-t-2 border-white">
      <figure className="absolute right-0 top-0">
        <img src={footerLogoRight} alt="logo" />
      </figure>
      <div className="container grid-container">
        {footerContent.map((div) => (
          <div>
            <h1 className="text-white font-bold capitalize">{div.title}</h1>
            <ul>
              {div.listItems.map((item) => (
                <li className="text-white py-2 capitalize cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h1>follow us</h1>
        </div>
      </div>
      {/* foooter copyright */}
      <div className="absolute bottom-0 w-full flex justify-between items-center px-5 bg-green">
        <h1>vox vista</h1>
        <img src={footerLogoCenter} alt="footer logo" />
        <h1>2023</h1>
      </div>
    </footer>
  );
};

export default Footer;
