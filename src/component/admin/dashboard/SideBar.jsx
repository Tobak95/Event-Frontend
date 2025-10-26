import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { LiaUsersSolid } from "react-icons/lia";
import { GrPerformance } from "react-icons/gr";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import Logo2 from "../../../assets/logo2.png";
import LogoutModal from "../../../Pages/auth/modals/LogOutModal"
import { useState } from "react";

const SideBar = () => {
  const location = useLocation();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
 const handleLogout = () => {
   setIsLogoutModalOpen((prev) => !prev);
 };



  const menuItems = [
    {
      icon: LuLayoutDashboard,
      label: "Dashboard",
      path: "/dashboard/admin",
      active: location.pathname === "/dashboard/admin",
    },
    {
      icon: FaCalendarAlt,
      label: "Events",
      path: "/dashboard/admin/events",
      active: location.pathname === "/dashboard/admin/events",
    },
    {
      icon: MdOutlineEditCalendar,
      label: "Create Events",
      path: "/dashboard/admin/create-events",
      active: location.pathname === "/dashboard/admin/create-events",
    },
    {
      icon: LiaUsersSolid,
      label: "User Managements",
      path: "/dashboard/admin/userManagements",
      active: location.pathname === "/dashboard/admin/userManagements",
    },
    {
      icon: HiOutlineChartSquareBar,
      label: "Revenue",
      path: "/dashboard/admin/revenue",
      active: location.pathname === "/dashboard/admin/revenue",
    },
  ];

  const MenuItem = ({ icon: Icon, label, path, active }) => (
    <Link
      to={path}
      className={`flex items-center space-x-3 px-4 py-3 text-[20px] text-[#1D1D1D] font-medium rounded-lg transition-colors ${
        active
          ? "bg-[#E6F1F0] text-[#006F6A]"
          : "text-base-content/70 hover:bg-[#E6F1F0] hover:text-[#006F6A] hover:font-[600]"
      }`}
    >
      <Icon className="w-6 h-6" />
      <span>{label}</span>
    </Link>
  );

  return (
    <div className="flex flex-col w-[273px] h-screen ">
      <div className="px-4 py-6   border-b border-neutral/20 ">
        <Link to={"/"}>
          <div className="flex ">
            <img src={Logo2} alt="eventra-Logo" className=" w-auto h-10 " />
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-2  space-y-2  lg:py-4  border-r border-neutral/20 ">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            path={item.path}
            active={item.active}
          />
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 space-y-2 border-t border-base-300  border-r border-neutral/20 ">
        <Link
          to="/dashboard/admin/settings"
          className="flex items-center px-4 py-3 space-x-3 text-sm font-medium rounded-lg transition-colors text-base-content/70 hover:bg-base-200 hover:text-base-content"
        >
          <GrPerformance className="w-5 h-5" />
          <span className="text-[20px]">Settings</span>
        </Link>
        {isLogoutModalOpen && (
          <LogoutModal isOpen={isLogoutModalOpen} onClose={handleLogout} />
        )}
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-3 space-x-3 w-full text-sm font-medium text-left rounded-lg transition-colors text-base-content/70 hover:bg-base-200 hover:text-base-content"
        >
          <BiLogOut className="w-5 h-5" />
          <span className="text-[20px]">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
