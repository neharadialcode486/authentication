import React, { useEffect, useState } from "react";
import { MailIcon, SunIcon } from "./Icons";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="relative inline-block">
      <button className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none">
        <span
          className="h-[44px] w-[44px] flex flex-col justify-center items-center rounded-[8px] bg-white dropdown_shadow"
          onClick={() => setDarkMode(!darkMode)}
        >
          <SunIcon />
        </span>
      </button>
    </div>
  );
};

export default Theme;
