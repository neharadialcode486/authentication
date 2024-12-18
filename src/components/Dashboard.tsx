import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderIcons from "./common/HeaderIcons.tsx";
import {
  ContactIcon,
  FilterIcon,
  HomeIcon,
  LogoIcon,
  ToggleIcon,
  TriangleIcon,
} from "./common/Icons.tsx";
import Sidebar from "./common/Sidebar.tsx";

const Dashboard = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="">
      <div className="flex sm:bg-[#F4F2F3] dark:bg-[#555555] ">
        <Sidebar />
        <div className="w-full">
          <div className="bg-white dark:bg-[#3C3C3C]  sm:h-[100px] h-[70px] md:flex justify-between items-center px-8 hidden ">
            <p className="text-[24px] font-semibold">Dashboard</p>
            <HeaderIcons />
          </div>
          <div
            className={`fixed bottom-0 left-[50%] translate-x-[-50%] items-center gap-[9%] justify-center sm:hidden z-10 py-3  flex px-5 smoothness ${
              navOpen
                ? "w-full bg-primary"
                : " bg-white dark:bg-[#555555] w-[40px] overflow-hidden"
            }`}
          >
            <Link className="hover:scale-[1.2] smoothness" to="#" title="Home">
              <HomeIcon />
            </Link>
            <Link
              className="hover:scale-[1.2] smoothness"
              to="#"
              title="Trianlge"
            >
              <TriangleIcon />
            </Link>
            <span
              title="Toggle Icon"
              className="cursor-pointer"
              onClick={() => setNavOpen(!navOpen)}
            >
              <ToggleIcon navOpen={navOpen} />
            </span>
            <Link
              className="hover:scale-[1.2] smoothness"
              to="#"
              title="Filter"
            >
              <FilterIcon />
            </Link>
            <Link
              className="hover:scale-[1.2] smoothness"
              to="#"
              title="Contact"
            >
              <ContactIcon />
            </Link>
          </div>
          <div className="md:hidden   py-5 mt-3">
            <Link className="sm:hidden justify-center flex mb-5 sm:mb-8" to="/">
              <LogoIcon />
            </Link>
            <div className="md:hidden flex justify-center">
              <HeaderIcons />
            </div>
          </div>
          <div className="custom_height py-5 px-8 mb-12 sm:mb-0">
            <p className="md:text-[90px] sm:text-[50px] text-[20px] text-center sm:text-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              hic, amet quae soluta rem iure incidunt aspernatur eaque dicta
              perspiciatis, eius ratione vitae libero quis officia odio
              molestiae porro unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
