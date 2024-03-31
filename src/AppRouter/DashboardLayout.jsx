import React from "react";
import DashboardSidebar from "../pages/Dashboard/DashboardSidebar";
import DashboardNavbar from "../pages/Dashboard/DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex w-full h-screen">
      <DashboardSidebar />
      <main>
        <DashboardNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
