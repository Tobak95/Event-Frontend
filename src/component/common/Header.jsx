import React, { useState } from "react";
import { FaSearch, FaBell, FaSync, FaBars } from "react-icons/fa";
import { SlRefresh } from "react-icons/sl";
import { BsBell } from "react-icons/bs";
import dashboardProfile from "../../assets/dashboardProfile.png";
import { RiArrowDropDownLine } from "react-icons/ri";
// import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ onToggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");

 
  const handleNotifications = () => {
    // Handle notifications
    console.log("Notifications clicked");
  };

  return (
    <header className="px-3 py-2 w-[-webkit-fill-available]  border-b border-neutral/20  sm:px-6 lg:px-4 2xl:px-6 2xl:py-6 ">
      <div className="flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={onToggleSidebar}
          className="btn btn-ghost btn-circle lg:hidden"
          title="Toggle Menu"
        >
          <FaBars className="w-4 h-4" />
        </button>

        {/* Search Bar */}
        <div className="flex flex-1 lg:w-full">
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 z-10 w-3 h-3 transform -translate-y-1/2 text-base-content/40 sm:w-4 sm:h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 w-[452px] border-b input focus:input-primary input-xs sm:input-sm sm:pl-10 2xl:input-md"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-1 sm:space-x-2 2xl:space-x-4">
          {/* Theme Switcher */}
          {/* <ThemeSwitcher className="2xl:w-5 2xl:h-5" /> */}

          {/* Notifications */}
          <button
            onClick={handleNotifications}
            className="relative btn btn-ghost btn-circle btn-xs sm:btn-sm lg:btn-md"
            title="Notifications"
          >
            <BsBell className="w-3 h-3 sm:w-4 sm:h-4 2xl:w-5 2xl:h-5" />
            {/* Notification badge */}
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full sm:w-2.5 sm:h-2.5 2xl:w-3 2xl:h-3 bg-error"></span>
          </button>

          {/* Add Patient Button - Hidden on mobile, visible on larger screens */}
          <button className="w-[150px] h-[35px] flex items-center gap-2">
            <div>
              <img
                src={dashboardProfile}
                alt="profile"
                className="w-[35px] h-[35px] rounded-full  "
              />
            </div>
            <div className="flex items-center">
              <div>
                <p>David S</p>
              </div>
              <div>
                <RiArrowDropDownLine size={40} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
