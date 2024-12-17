import React, { useState } from "react";
import { EnglishIcon, MailIcon, SunIcon } from "./Icons";

const LanguageSelector = () => {
  return (
    <div className="relative inline-block">
      <button className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none">
        <span className="h-[44px] w-[44px] flex flex-col justify-center items-center rounded-[8px] bg-white dropdown_shadow">
          <EnglishIcon />
        </span>
      </button>
    </div>
  );
};

export default LanguageSelector;
