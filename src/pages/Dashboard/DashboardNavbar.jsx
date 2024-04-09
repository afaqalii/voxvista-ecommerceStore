import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import { toggleSidebar } from "../../store/reducers/UISlice";
const DashboardNavbar = () => {
  const { isSidebarOpen } = useSelector((state) => state.UI);
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="flex items-center gap-5 mt-5 mx-5">
        <span
          onClick={() => dispatch(toggleSidebar(!isSidebarOpen))}
          className="h-8 w-8 cursor-pointer rounded-full bg-gray66"
        >
          <HiOutlineBars3 className="w-full h-full text-white" />
        </span>
        <div className="searchBar flex items-center gap-5 w-full text-white h-[50px] rounded-2xl bg-gray100 px-5">
          <IoSearchOutline className="text-xl" />
          <input
            type="text"
            placeholder="Search for anything..."
            name="search"
            className="bg-transparent outline-none border-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
