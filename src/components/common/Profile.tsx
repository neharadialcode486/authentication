import React, { useState } from "react";
import avatar from "../../assets/images/avatar.png";
import {
  BottomArrow,
  DropdownContactIcon,
  DropdownDashboardIcon,
  DropdownLogoutIcon,
  DropdownSubscriptionIcon,
  DropdownSunIcon,
} from "./Icons";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const notifications = [
    {
      id: 1,
      message: "Profile",
      icon: <DropdownContactIcon />,
    },
    {
      id: 2,
      message: "Dashboard",
      icon: <DropdownDashboardIcon />,
    },
    {
      id: 3,
      message: "Subscription",
      icon: <DropdownSubscriptionIcon />,
    },
    {
      id: 4,
      message: "Settings",
      icon: <DropdownSunIcon />,
    },
    {
      id: 5,
      message: "Log out",
      icon: <DropdownLogoutIcon />,
    },
  ];

  return (
    <div className="relative inline-block">
      {isOpen && (
        <div
          className="fixed left-0 top-0 w-full h-full "
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Bell Icon */}
      <button
        title="Profile"
        onClick={toggleDropdown}
        className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 focus:outline-none flex items-center gap-3"
      >
        <img
          className="w-[44px] h-[44px] rounded-[8px]"
          src={avatar}
          alt="avatar"
        />
        <BottomArrow />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-50 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
          <ul className="max-h-60 overflow-auto px-2 py-2">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <li
                  onClick={() => setIsOpen(false)}
                  key={notification.id}
                  className="px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer rounded-[8px] flex items-center gap-2"
                >
                  <span>{notification.icon}</span>
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

export default Profile;
