import React, { useState } from "react";
import { NotificationIcon } from "./Icons";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const notifications = [
    { id: 1, message: "Your last request is completed!" },
    { id: 2, message: "Your request is planned successfully!" },
    { id: 3, message: "Your request is planned successfully!" },
    { id: 4, message: "Your last request is completed!" },
  ];

  return (
    <div className="relative inline-block">
      {/* Bell Icon */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-300  focus:outline-none"
      >
        <span className="h-[44px] w-[44px] flex flex-col justify-center items-center rounded-[8px] bg-white dropdown_shadow">
          <NotificationIcon />
        </span>
        <span className="top-[15px] right-[15px] absolute w-[10px] h-[10px] bg-primary rounded-full"></span>

        {/* Notification Count */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[320px] bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
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

export default NotificationDropdown;
