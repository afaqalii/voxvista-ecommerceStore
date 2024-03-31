import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// asssets
import logo from "../../assets/sidebarLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineBars3 } from "react-icons/hi2";
import { toggleSidebar } from "../../store/reducers/UISlice";
import isActive from "../../hooks/isActive";
import { CiCircleInfo } from "react-icons/ci";
import { HiMiniBellAlert } from "react-icons/hi2";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";

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
      title: "requests",
      icon: <CiCircleInfo />,
      path: "/requests",
    },
    {
      title: "notifications",
      icon: <HiMiniBellAlert />,
      path: "/notifications",
    },
  ];

  const sideLink2 = [
    {
      title: "dashboard",
      icon: <MdHomeFilled />,
      path: "/dashboard/tenants",
    },
    {
      title: "products",
      path: "/products",
      icon: <MdOutlineCategory />,
    },
    {
      title: "stats",
      path: "/stats",
      icon: <IoStatsChartSharp />,
    },
  ];

  return (
    <div
      className={`
      ${
        isSidebarOpen ? "w-full max-w-[256px]" : "hidden"
      } shadow-primary bg-gray100 overflow-y-auto  h-full max-h-full px-5
      ${isSmallScreen ? "fixed left-0 w-full max-w-full" : ""}
      `}
    >
      {isSidebarOpen &&
        isSmallScreen && ( // show only on small devices and when sidebar is open
          <span
            onClick={() => dispatch(toggleSidebar(false))}
            className="fixed top-[30px] right-[30px] h-8 w-8 cursor-pointer rounded-full bg-gray66 p-1"
          >
            <HiOutlineBars3 className="w-full h-full text-primary-blue" />
          </span>
        )}
      {/*logo */}
      <div className="flex items-center justify-center gap-1 h-[100px] p-5 mb-[24px]">
        <h1 className="text-primary-blue text-[27px]">Vox Vista</h1>
        <img src={logo} alt="logo" className="max-w-none w-[80px]" />
      </div>
      <div>
        {sideLinks?.map((linkItem, i) => (
          <NavLink
            onClick={() => {
              isSmallScreen ? dispatch(toggleSidebar(false)) : null;
            }}
            key={i}
            to={linkItem?.path}
          >
            <div className={``}>
              <span>{linkItem.icon}</span>
              <p className="ml-10">{linkItem?.title}</p>
            </div>
          </NavLink>
        ))}
      </div>
      <div>
        {sideLink2?.map((linkItem, i) => (
          <NavLink
            onClick={() => {
              isSmallScreen ? dispatch(toggleSidebar(false)) : null;
            }}
            key={i}
            to={linkItem?.path}
          >
            <div className={`flex items-center gap-4`}>
              <span>{linkItem.icon}</span>
              <p className="">{linkItem?.title}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
