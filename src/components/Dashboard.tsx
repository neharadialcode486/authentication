import React from "react";
import Sidebar from "./common/Sidebar.tsx";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex bg-[#F4F2F3]">
        <Sidebar />
        <div className="w-full">
          <div className="bg-white h-[100px]"></div>
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
