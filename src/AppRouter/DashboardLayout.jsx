import React from "react";
import DashboardSidebar from "../pages/Dashboard/DashboardSidebar";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex w-full h-screen bg-darkGray overflow-hidden scrollbar-none">
      <DashboardSidebar />
      <main className="overflow-auto w-full">
        <DashboardNavbar />
        <div className="p-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
