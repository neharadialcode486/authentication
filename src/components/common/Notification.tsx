import React, { useState } from "react";
import { NotificationIcon } from "./Icons";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const notifications = [
    { id: 1, message: "You have a new message!" },
    { id: 2, message: "Your password was updated successfully." },
    { id: 3, message: "New login from another device." },
  ];

  return (
    <div className="relative inline-block">
      {/* Bell Icon */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
      >
        <span className="h-[44px] w-[44px] flex flex-col justify-center items-center rounded-[8px] bg-white dropdown_shadow">
          <NotificationIcon />
        </span>
        {/* Notification Count */}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
          <div className="py-2">
            <h3 className="text-sm font-bold text-gray-800 dark:text-white px-4">
              Notifications
            </h3>
          </div>
          <ul className="max-h-60 overflow-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li
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
          <div className="border-t dark:border-gray-700">
            <button
              className="w-full text-center py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => alert("View all notifications")}
            >
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
