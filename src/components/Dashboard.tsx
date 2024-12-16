import React from "react";
import Sidebar from "./common/Sidebar.tsx";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[100px] bg-primary h-screen hidden sm:block">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="bg-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            placeat reprehenderit voluptas doloremque illum cum fugiat a
            voluptatem sequi sit eligendi aliquam reiciendis deleniti laborum
            perspiciatis distinctio, hic minima! Veniam!
          </div>
          <div className="custom_height">
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
