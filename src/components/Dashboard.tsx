import React, { useState } from "react";
import Message from "./common/Message.tsx";
import Sidebar from "./common/Sidebar.tsx";
import NotificationDropdown from "./common/Notification.tsx";
import Theme from "./common/Theme.tsx";
import LanguageSelector from "./common/LangualgeSelector.tsx";
import Profile from "./common/Profile.tsx";
import logo from "../assets/images/logo.png";
import {
  ContactIcon,
  FilterIcon,
  HomeIcon,
  ToggleIcon,
  TriangleIcon,
} from "./common/Icons.jsx";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="">
      <div className="flex sm:bg-[#F4F2F3] dark:bg-[#2C2646] dark:bg-opacity-50">
        <Sidebar />
        <div className="w-full">
          <div className="bg-white dark:bg-[#2C2646]  sm:h-[100px] h-[70px] md:flex justify-between items-center px-8 hidden ">
            <p className="text-[24px] font-semibold">Dashboard</p>
            <div className="flex items-center gap-2">
              <Message />
              <NotificationDropdown />
              <Theme />
              <LanguageSelector />
              <Profile />
            </div>
          </div>
          <div
            className={`fixed bottom-0 left-[50%] translate-x-[-50%] items-center gap-[9%] justify-center sm:hidden z-10 py-3  flex px-5 smoothness ${
              navOpen
                ? "w-full bg-primary"
                : " bg-white w-[70px] overflow-hidden"
            }`}
          >
            <Link className="hover:scale-[1.2] smoothness" to="#">
              <HomeIcon />
            </Link>
            <Link className="hover:scale-[1.2] smoothness" to="#">
              <TriangleIcon />
            </Link>
            <span
              className="cursor-pointer"
              onClick={() => setNavOpen(!navOpen)}
            >
              <ToggleIcon navOpen={navOpen} />
            </span>
            <Link className="hover:scale-[1.2] smoothness" to="#">
              <FilterIcon />
            </Link>
            <Link className="hover:scale-[1.2] smoothness" to="#">
              <ContactIcon />
            </Link>
          </div>
          <div className="sm:hidden flex justify-center py-5 mt-3">
            <img src={logo} alt="logo" />
          </div>
          <div className="custom_height py-5 px-8 mb-12 sm:mb-0">
            <p className="md:text-[90px] sm:text-[50px] text-[20px]">
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
