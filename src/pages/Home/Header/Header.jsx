import React from "react";
import bgImageRight from "../../../assets/pianoTiles.jpeg";

const Header = () => {
  return (
    <header className="relative header-bg-image bg-darkBlack">
      {/* black blue dot */}
      <span className="bg-darkBlack max-w-[400px] h-1/2 z-10 top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]  absolute blur-[50px]"></span>
      <img
        className="absolute object-cover right-0 top-0 w-[771.625px] h-full"
        src={bgImageRight}
        alt="image right"
      />
      <main className="container relative font-stint  z-10 flex flex-col justify-center gap-5 h-[100vh]">
        <h1 className="uppercase font-medium text-2xl min-[450px]:text-4xl text-[#ffff] w-2/3">
          experience <br /> production grade <br /> audio system
        </h1>
        <p className="text-white w-2/3">
          Buy Production level microphones and audio <br /> equipment from us at
          a reasonable price!
          <br />
          <br /> Book your audio system now
        </p>
        <button className="relative z-20 w-[150px] h-[40px] text-center capitalize bg-lightWhite rounded-sm mt-10">
          book now!
        </button>
      </main>
      {/* green blue dot */}
      <span className="absolute max-lg:hidden green-blue-dot blur-[50px] bg-green rounded-full w-[475px] h-[500px] z-[1] bottom-[-250px] left-[-200px]"></span>
    </header>
  );
};

export default Header;
