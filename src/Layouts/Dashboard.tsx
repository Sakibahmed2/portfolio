import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaInbox, FaLightbulb } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="flex items-center gap-2 bg-gray-600 py-1 px-2 rounded-md bg-opacity-25 border border-gray-600 drawer-button lg:hidden absolute top-5 left-5"
        >
          <span>
            <CiMenuBurger />
          </span>
          Menu
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <Link to="/">
            <div className="flex-shrink-0 flex items-center my-5 text-center border border-gray-500 bg-slate-800 w-full py-2">
              <div className="md:w-full">
                <h1 className="text-4xl primary-text font-bold custom-font">
                  Sa .
                </h1>
              </div>
            </div>
          </Link>

          {/* Sidebar content here */}
          <li>
            <Link
              to={"/dashboard/skills"}
              className="flex items-center text-lg gap-3"
            >
              <span>
                <FaLightbulb />
              </span>
              <p>Skills</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/projects"}
              className="flex items-center text-lg gap-3"
            >
              <span>
                <FaFile />
              </span>
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/blogs"}
              className="flex items-center text-lg gap-3"
            >
              <span>
                <FaInbox />
              </span>
              <p>Blogs</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
