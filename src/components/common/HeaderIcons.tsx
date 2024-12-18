import React, { useState } from "react";
import Message from "./Message.tsx";
import NotificationDropdown from "./Notification.tsx";
import LanguageSelector from "./LangualgeSelector.tsx";
import Profile from "./Profile.tsx";
import Theme from "./Theme.tsx";

const HeaderIcons = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="flex items-center sm:gap-2">
      <Message
        isOpen={openDropdown === "message"}
        onToggle={() => toggleDropdown("message")}
        onClose={() => setOpenDropdown(null)}
      />
      <NotificationDropdown
        isOpen={openDropdown === "notification"}
        onToggle={() => toggleDropdown("notification")}
        onClose={() => setOpenDropdown(null)}
      />
      <Theme />
      <LanguageSelector
        isOpen={openDropdown === "language"}
        onToggle={() => toggleDropdown("language")}
        onClose={() => setOpenDropdown(null)}
      />
      <Profile
        isOpen={openDropdown === "profile"}
        onToggle={() => toggleDropdown("profile")}
        onClose={() => setOpenDropdown(null)}
      />
    </div>
  );
};

export default HeaderIcons;
