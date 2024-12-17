import React from "react";
import Message from "./common/Message.tsx";
import Sidebar from "./common/Sidebar.tsx";
import NotificationDropdown from "./common/Notification.tsx";
import Theme from "./common/Theme.tsx";
import LanguageSelector from "./common/LangualgeSelector.tsx";
import Profile from "./common/Profile.tsx";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex bg-[#F4F2F3] dark:bg-[#2C2646] dark:bg-opacity-50">
        <Sidebar />
        <div className="w-full">
          <div className="bg-white dark:bg-[#2C2646]  sm:h-[100px] h-[70px] flex justify-between items-center px-8">
            <p className="text-[24px] font-semibold">Dashboard</p>
            <div className="flex items-center gap-2">
              <Message />
              <NotificationDropdown />
              <Theme />
              <LanguageSelector />
              <Profile />
            </div>
          </div>
          <div className="custom_height py-5 px-8">
            <p className="text-[100px]">
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
