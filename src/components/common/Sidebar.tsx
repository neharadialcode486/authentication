import React from "react";
import curve from "../../assets/images/side-curve.png";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from "./Icons";

const Sidebar = () => {
  const icons = [
    {
      icon: <Icon1 />,
      url: "",
    },
    {
      icon: <Icon2 />,
      url: "",
    },
    {
      icon: <Icon3 />,
      url: "",
    },
    {
      icon: <Icon4 />,
      url: "",
    },
    {
      icon: <Icon5 />,
      url: "",
    },
    {
      icon: <Icon6 />,
      url: "",
    },
    {
      icon: <Icon7 />,
      url: "",
    },
  ];
  return (
    <div className="h-screen w-[130px] flex flex-col justify-center bg-white">
      <img
        className="absolute top-[50%] translate-y-[-50%] left-0"
        src={curve}
        alt="curve"
      />
      <div className="z-10 ps-6 flex flex-col gap-2">
        {icons.map((obj, i) => (
          <span className="cursor-pointer">{obj.icon}</span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
