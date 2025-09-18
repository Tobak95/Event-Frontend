import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#0000005C] backdrop-blur-md sticky top-0 z-30 right-0 left-0">
      <nav className="layout flex items-center justify-between h-[100px] px-4 md:px-8">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-[120px] md:w-[150px]" />
        </NavLink>

        <div className="hidden md:flex items-center gap-15">
          <div className="flex items-center gap-8">
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                `font-[400] text-[16px] text-[#ffffff]  ${
                  isActive ? "font-[700] underline" : ""
                }`
              }
            >
              Discover Events
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `font-[400] text-[16px] text-[#ffffff]  ${
                  isActive ? "font-[700] underline" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `font-[400] text-[16px] text-[#ffffff]  ${
                  isActive ? "font-[700] underline" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <NavLink
              to="/login"
              className="font-[700] text-[16px] text-[#FFFFFF]"
            >
              Sign in
            </NavLink>
            <button className="bg-[#006F6A] text-[#FFFFFF] text-[14px] font-[700] cursor-pointer w-[146px] h-[49px] rounded-[8px]">
              Get Started
            </button>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-[#000000d9] flex flex-col items-center gap-6 py-8 md:hidden">
            <NavLink
              to="/discover"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `font-[400] text-[18px] text-[#ffffff] hover:font-[700] hover:underline ${
                  isActive ? "font-[700] underline" : ""
                }`
              }
            >
              Discover Events
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `font-[400] text-[18px] text-[#ffffff] hover:font-[700] hover:underline ${
                  isActive ? "font-[700] underline" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `font-[400] text-[18px] text-[#ffffff] hover:font-[700] hover:underline ${
                  isActive ? "font-[700] underline" : ""
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              onClick={toggleMenu}
              className="font-[700] text-[18px] text-[#FFFFFF]"
            >
              Sign in
            </NavLink>
            <button className="bg-[#006F6A] text-[#FFFFFF] text-[14px] font-[700] cursor-pointer w-[146px] h-[49px] rounded-[8px]">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
