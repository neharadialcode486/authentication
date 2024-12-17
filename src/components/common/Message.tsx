import React, { useState } from "react";
import { MailIcon, TopTriangleIcon } from "./Icons";

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const notifications = [
    { id: 1, message: "You have a new message!" },
    { id: 2, message: "You have a new message!" },
  ];

  return (
    <div className="relative inline-block">
      {/* Bell Icon */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none"
      >
        <span className="h-[44px] w-[44px] flex flex-col justify-center items-center rounded-[8px] bg-white dropdown_shadow">
          <MailIcon />
        </span>
        <span className="top-[15px] right-[15px] absolute w-[10px] h-[10px] bg-primary rounded-full"></span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
          {/* <span className="top-[-10px] inline-block  right-[22px] absolute">
            <TopTriangleIcon />
          </span> */}
          <ul className="max-h-60 overflow-auto py-2">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li
                  onClick={() => setIsOpen(false)}
                  key={notification.id}
                  className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                >
                  {notification.message}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                No new notifications
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Message;
