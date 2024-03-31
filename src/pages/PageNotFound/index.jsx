import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-screen grid place-content-center bg-blue500">
        <div className="text-center">
          <h1 className="font-bold text-white text-[7vmax]">Coming soon</h1>
          <NavLink to={() => navigate(-1)}>
            <button className="px-5 py-2 bg-white text-blue500 rounded-md my-5">
              Go Back Home
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
