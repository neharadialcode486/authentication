import React from "react";
import { Link } from "react-router-dom";
import curve from "../../assets/images/side-curve.png";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  LogoIcon,
} from "./Icons";

const Sidebar = () => {
  const icons = [
    {
      icon: <Icon1 />,
      url: "",
      title: "Search",
    },
    {
      icon: <Icon2 />,
      url: "",
      title: "Filter",
    },
    {
      icon: <Icon3 />,
      url: "",
      title: "Play",
    },
    {
      icon: <Icon4 />,
      url: "",
      title: "Contact",
    },
    {
      icon: <Icon5 />,
      url: "",
      title: "Mailbox",
    },
    {
      icon: <Icon6 />,
      url: "",
      title: "Person List",
    },
    {
      icon: <Icon7 />,
      url: "",
      title: "Solution",
    },
  ];
  return (
    <div className="h-screen w-[120px] sm:flex flex-col justify-between items-center bg-white dark:bg-[#2C2646] relative hidden py-3 px-5">
      <img
        className="absolute top-[50%] translate-y-[-50%] left-0"
        src={curve}
        alt="curve"
      />
      <div className="pt-4">
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <div className="z-10 pe-10 flex flex-col gap-2">
        {icons.map((obj, i) => (
          <Link
            title={obj.title}
            to={obj.url}
            className="cursor-pointer inline-block w-[24px] smoothness hover:scale-[1.2]"
            key={i}
          >
            {obj.icon}
          </Link>
        ))}
      </div>
      <div className="text-center">
        <p className="text-xs font-bold ff_rubik text-center">v1.19</p>
        <p className="text-xxs font-bold ff_rubik text-center pb-2">
          justgetleads Inc.
        </p>
        <Link
          className="text-xxs font-normal ff_rubik text-center text-nowrap block h-[6px] hover:text-primary smoothness"
          to="#"
        >
          Terms & Condition
        </Link>
        <Link
          className="text-xxs font-normal ff_rubik text-center h-0 hover:text-primary smoothness"
          to="#"
        >
          Privacy
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
