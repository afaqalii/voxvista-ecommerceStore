import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// asssets
import { HiDotsHorizontal } from "react-icons/hi";
import logo from "../../assets/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineBars3 } from "react-icons/hi2";
import { toggleSidebar } from "../../store/reducers/UISlice";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import isActive from "../../hooks/isActive";

const DashboardSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.UI);
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(() => {
    return window.innerWidth < 600; // initially sets to  true if screen size less than 600px
  });
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sideLinks = [
    {
      title: "Orders",
      icon: <MdProductionQuantityLimits  className="w-full h-full" />,
      path: "/dashboard/orders",
    },
    {
      title: "Listing",
      icon: <FaList  className="w-full h-full" />,
      path: "/dashboard/listing",
    },
  ];

  const sideLink2 = [
    {
      title: "dashboard",
      icon: <MdHomeFilled className="w-full h-full" />,
      path: "/dashboard",
    },
    {
      title: "products",
      path: "/dashboard/products",
      icon: <MdOutlineCategory className="w-full h-full" />,
    },
    {
      title: "stats",
      path: "/dashboard/stats",
      icon: <IoStatsChartSharp className="w-full h-full" />,
    },
  ];

  return (
    <div
      className={`
      ${
        isSidebarOpen ? "w-full max-w-full min-[600px]:max-w-[256px]" : "max-w-0"
      } shadow-primary bg-gray100 overflow-y-auto  h-full max-h-full
      ${isSmallScreen ? "fixed left-0" : "relative"}
      transition-all`}
    >
      {isSidebarOpen &&
        isSmallScreen && ( // show only on small devices and when sidebar is open
          <span
            onClick={() => dispatch(toggleSidebar(false))}
            className="fixed top-[50px] right-[30px] h-8 w-8 cursor-pointer rounded-full bg-gray66 p-1"
          >
            <HiOutlineBars3 className="w-full h-full text-white" />
          </span>
        )}
      {/*logo */}
      <div
        className="flex items-center h-[100px] mb-[24px] mt-5"
        onClick={() => dispatch(toggleSidebar(true))}
      >
        <img
          src={logo}
          alt="logo"
          className="relative max-w-none object-cover h-[80px] w-[80px]"
        />
        <span className="grid place-content-center font-orbitron ml-[-20px] leading-4 font-extrabold text-base text-black h-[70px] bg-green w-1/2 rounded-tr-full rounded-br-full">
          Vox <br /> Vista
        </span>
      </div>
      <section>
        <div className={"mb-8"}>
          {sideLinks?.map((linkItem, i) => (
            <NavLink
              onClick={() => {
                isSmallScreen ? dispatch(toggleSidebar(false)) : null;
              }}
              key={i}
              to={linkItem?.path}
            >
              <div
                className={`flex items-center gap-4 pt-[6px] pb-[12px] px-5 ${
                  isActive(linkItem.path) ? " bg-gray50 " : ""
                }`}
              >
                <span className="h-[24px] w-[24px] text-green">
                  {linkItem.icon}
                </span>
                <p className="text-[22px] text-white capitalize">
                  {linkItem?.title}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
        <hr className="text-white" />
        <div className="mt-8">
          {sideLink2?.map((linkItem, i) => (
            <NavLink
              onClick={() => {
                isSmallScreen ? dispatch(toggleSidebar(false)) : null;
              }}
              key={i}
              to={linkItem?.path}
            >
              <div
                className={`flex items-center gap-4 px-5 pt-[6px] pb-[12px] ${
                  isActive(linkItem.path) ? " bg-gray50" : ""
                }`}
              >
                <span className="h-[24px] w-[24px] text-green">
                  {linkItem.icon}
                </span>
                <p className="text-[22px] text-white capitalize">
                  {linkItem?.title}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
      <section className="absolute bottom-0 w-full flex justify-between items-center gap-5 p-5 border-t-[2px] border-white">
        <div className="flex items-start gap-3">
          <span className="h-[35px] w-[35px] rounded-full bg-white"></span>
          <div className="text-white">
            <h3 className="text-sm">Username</h3>
            <p className="text-[10px]">Manager</p>
          </div>
        </div>
        <HiDotsHorizontal className="text-green text-xl" />
      </section>
    </div>
  );
};

export default DashboardSidebar;
