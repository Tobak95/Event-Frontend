import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import icon from "../../assets/Icon.png";
import icon2 from "../../assets/Icon2.png";
import drop from "../../assets/dropdown.png";
import { useNavigate, useLocation } from "react-router-dom";
import drop2 from "../../assets/dropdown2.png";

const NavBar = ({
  bgColor = "bg-[#0000005C]",
  logoSrc = logo,
  textColor = "text-[#ffffff]",
  menuColor = "#ffffff",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const redirect = useNavigate();

  const location = useLocation();

  let iconLogo = icon;

  if (location.pathname === "/tickets") {
    iconLogo = icon2;
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div
        className={`${bgColor} backdrop-blur-md sticky top-0 z-30 right-0 left-0`}
      >
        <nav className="layout flex items-center justify-between h-[100px] px-4 md:px-8">
          <NavLink to="/">
            <img src={logoSrc} alt="Logo" className="w-[120px] md:w-[150px]" />
          </NavLink>

          <div className="hidden md:flex items-center gap-15">
            <div className="flex items-center gap-10">
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${textColor}  ${
                    isActive ? "font-[700] underline" : ""
                  }`
                }
              >
                Discover Events
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${textColor}  ${
                    isActive ? "font-[700] underline" : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${textColor}  ${
                    isActive ? "font-[700] underline" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
            <div className="flex items-center gap-4">
              <Link to={"/tickets"}>
                <img src={iconLogo} alt="" />
              </Link>

              <div className="flex items-center gap-4">
                <NavLink
                  to="/login"
                  className={`font-[700] text-[18px] text-[#ffffff]`}
                >
                  Sign in
                </NavLink>
                <button
                  onClick={() => redirect("/register")}
                  className="bg-[#006F6A] text-[#FFFFFF] text-[14px] font-[700] cursor-pointer w-[146px] h-[49px] rounded-[8px]"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-5 md:hidden">
            <img src={iconLogo} alt="" className="block " />
            <button
              onClick={toggleMenu}
              className=" md:hidden text-white text-2xl cursor-pointer"
            >
              {isOpen ? (
                <FaTimes color={menuColor} />
              ) : (
                <FaBars color={menuColor} />
              )}
            </button>
          </div>

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

              <div className="flex flex-col items-center gap-3">
                <NavLink
                  to="/login"
                  onClick={toggleMenu}
                  className="font-[700] text-[18px] text-[#FFFFFF]"
                >
                  Sign in
                </NavLink>

                <Link to={"/login"}>
                  <button className="bg-[#006F6A] text-[#FFFFFF] text-[14px] font-[700] cursor-pointer w-[146px] h-[49px] rounded-[8px]">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
