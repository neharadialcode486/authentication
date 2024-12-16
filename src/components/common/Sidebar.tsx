import React from "react";
import curve from "../../assets/images/side-curve.png";
import logo from "../../assets/images/logo.png";
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
    <div className="h-screen w-[120px] sm:flex flex-col justify-center bg-white relative hidden">
      <img
        className="absolute top-[50%] translate-y-[-50%] left-0"
        src={curve}
        alt="curve"
      />
      <img
        className="absolute left-[50%] translate-x-[-50%] top-[25px] cursor-pointer"
        src={logo}
        alt="curve"
      />
      <div className="z-10 ps-6 flex flex-col gap-2">
        {icons.map((obj, i) => (
          <a className="cursor-pointer inline-block w-[24px] smoothness hover:scale-[1.2]">
            {obj.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
