import React, { useState } from "react";
import { NotificationIcon } from "./Icons.tsx";

const NotificationDropdown = ({
  isOpen,
  onToggle,
  onClose,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) => {
  const notifications = [
    { id: 1, message: "Your last request is completed!" },
    { id: 2, message: "Your request is planned successfully!" },
    { id: 3, message: "Your request is planned successfully!" },
    { id: 4, message: "Your last request is completed!" },
  ];

  return (
    <div className="relative inline-block">
      {isOpen && (
        <div
          className="fixed left-0 top-0 w-full h-full"
          onClick={onClose}
        ></div>
      )}
      <button
        title="Notification"
        onClick={onToggle}
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none"
      >
        <span className="h-[44px] w-[44px] flex flex-col justify-center items-center rounded-[8px] bg-white md:dark:bg-lightGrey dark:bg-darkGrey dropdown_shadow">
          <NotificationIcon />
        </span>
        <span className="top-[15px] right-[15px] absolute w-[10px] h-[10px] bg-primary rounded-full"></span>
      </button>
      {isOpen && (
        <div className="absolute sm:right-0 right-[-200px] mt-2 w-[320px] bg-white dark:bg-darkGrey border dark:border-gray-700 rounded-lg shadow-lg z-10">
          <ul className="max-h-60 overflow-auto py-2 px-2">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                onClick={onClose}
                className="px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-offwhite dark:hover:text-[#000000] cursor-pointer rounded-[6px]"
              >
                {notification.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
