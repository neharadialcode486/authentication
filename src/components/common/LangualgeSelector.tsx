import React, { useState } from "react";
import { EnglishIcon, LanguageIcon2, LanguageIcon3 } from "./Icons.tsx";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const languages = [
    { name: "English", icon: <EnglishIcon /> },
    { name: "French", icon: <LanguageIcon2 /> },
    { name: "Spanish", icon: <LanguageIcon3 /> },
  ];

  return (
    <div className="relative inline-block">
      {isOpen && (
        <div
          className="fixed left-0 top-0 w-full h-full "
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Language Selector Button */}
      <button
        title="Language selector"
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none"
      >
        <span className="h-[44px] w-[44px] flex flex-col justify-center items-center rounded-[8px] bg-white shadow-md">
          {languages.find((lang) => lang.name === selectedLanguage)?.icon}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-[50px] bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10 py-2">
          {languages
            .filter((lang) => lang.name !== selectedLanguage) // Exclude selected language
            .map((lang) => (
              <li
                key={lang.name}
                onClick={() => handleLanguageChange(lang.name)}
                className="flex justify-center items-center gap-2 px-2 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {lang.icon}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
