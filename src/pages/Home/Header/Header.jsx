import React from "react";
import bgImageRight from "../../../assets/pianoTiles.jpeg";

const Header = () => {
  return (
    <header className="relative header-bg-image bg-darkBlack">
      <span className="bg-darkBlack w-[400px] h-1/2 z-10 top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]  absolute blur-[50px]"></span>
      <img
        className="absolute object-cover right-0 top-0 w-[771.625px] h-full"
        src={bgImageRight}
        alt="image right"
      />
      <main className="container relative font-stint  z-10 flex flex-col justify-center gap-5 h-[100vh]">
        <h1 className="uppercase font-medium text-4xl text-[#ffff] w-2/3">
          experience <br /> production grade <br /> audio system
        </h1>
        <p className="text-white w-2/3">
          Buy Production level microphones and audio <br /> equipment from us at
          a reasonable price!
          <br />
          <br /> Book your audio system now
        </p>
        <button className="w-[150px] h-[40px] text-center capitalize bg-lightWhite rounded-sm mt-10">
          book now!
        </button>
      </main>
      {/* green blue dot */}
      <span className="absolute green-blue-dot bg-green w-[375px] h-[375px] z-10 bottom-[-200px] left-0"></span>
    </header>
  );
};

export default Header;
