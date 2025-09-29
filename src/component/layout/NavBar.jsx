import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../assets/Icon.png";
import icon2 from "../../assets/Icon2.png";
import drop from "../../assets/dropdown.png";
import drop2 from "../../assets/dropdown2.png";
import { useAppContext } from "../../Hooks/useAppContext";

const NavBar = ({
  logoSrc = logo,
  textColor = "text-[#ffffff]",
  menuColor = "#ffffff",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAppContext();
  const dropdownRef = useRef(null);

  const location = useLocation();
  const redirect = useNavigate();

  let usernameColor = "text-[#ffffff]";
  let iconLogo = icon;
  let dropDown = drop;

  if (location.pathname === "/tickets") {
    usernameColor = "text-[#1b1b1b]";
    iconLogo = icon2;
    dropDown = drop2;
  }

  const handleLogout = () => {
    logout();
    setDropdown(false);
    redirect("/");
  };

  ///scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (

    <div className="bg-[#0000005C] backdrop-blur-md fixed top-0 z-30 right-0 left-0">
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

    <div className="relative">
      {/*  Fixed navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-30 backdrop-blur-md transition-colors duration-300 
        ${isScrolled ? "bg-black/70" : "bg-black/50"}`}
      >
        <nav className="layout flex items-center justify-between h-[100px] px-4 md:px-8">
          <NavLink to="/">
            <img src={logoSrc} alt="Logo" className="w-[120px] md:w-[150px]" />
          </NavLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-15">
            <div className="flex items-center gap-10">
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${textColor} ${
                    isActive ? "font-[700] underline" : ""
                  }`
                }
              >
                Discover Events
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${textColor} ${
                    isActive ? "font-[700] underline" : ""
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${textColor} ${
                    isActive ? "font-[700] underline" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* User Section */}
            <div className="flex items-center gap-4">
              <Link to={"/tickets"}>
                <img src={iconLogo} alt="" />
              </Link>
              {!user ? (
                <div className="flex items-center gap-4">
                  <NavLink
                    to="/login"
                    className={`font-[700] text-[18px] ${usernameColor}`}
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
              ) : (
                <div ref={dropdownRef} className="relative">
                  {/*  Toggle dropdown */}
                  <div
                    onClick={() => setDropdown((prev) => !prev)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <div className="bg-[#96C4C2] w-[23px] h-[23px] rounded-full flex items-center justify-center">
                      <p className="text-[10px] font-[400] text-[#006F6A]">
                        {user.firstname?.charAt(0)}.{user.lastname?.charAt(0)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className={`font-[500] text-[16px] ${usernameColor}`}>
                        {user.firstname}.
                        {user.lastname?.charAt(0).toUpperCase()}
                      </p>
                      <img src={dropDown} alt="" className="w-5 h-3" />
                    </div>
                  </div>

                  {/*  Dropdown Menu */}
                  {dropdown && (
                    <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-[12px] w-[160px] py-2">
                      <NavLink
                        to="/tickets"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        onClick={() => setDropdown(false)}
                      >
                        My Tickets
                      </NavLink>
                      <NavLink
                        to="/reset-password"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        onClick={() => setDropdown(false)}
                      >
                        Reset Password
                      </NavLink>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-5 md:hidden">
            <img src={iconLogo} alt="" className="block" />
            <button onClick={toggleMenu} className="md:hidden text-2xl">
              {isOpen ? (
                <FaTimes color={menuColor} />
              ) : (
                <FaBars color={menuColor} />
              )}
            </button>
          </div>
        </nav>
        {/*  Mobile Dropdown Menu (renders when isOpen = true) */}
        {isOpen && (
          <div className="md:hidden absolute top-[100px] left-0 w-full bg-black/80 backdrop-blur-md z-20 p-6 flex flex-col gap-6">
            {/* Page Links */}
            <NavLink
              to="/discover"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center text-[#ffffff] font-bold text-lg w-full"
            >
              Discover Events
            </NavLink>
            <NavLink
              to="/about-us"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center text-[#ffffff] font-bold text-lg w-full"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center text-[#ffffff] font-bold text-lg w-full"
            >
              Contact
            </NavLink>

            {/* ✅ Mobile User Section */}
            {!user ? (
              <div className="flex flex-col gap-4 mt-4 ">
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center font-bold  text-white text-lg w-full"
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/register"
                  className="flex justify-center items-center mx-auto bg-[#006F6A] text-[#FFFFFF] text-[14px] font-[700] cursor-pointer w-[146px] h-[49px] rounded-[8px]"
                >
                  Get Started
                </NavLink>
              </div>
            ) : (
              <div className="mt-4">
                <button
                  onClick={() => setDropdown((prev) => !prev)}
                  className="flex items-center justify-between w-full text-white font-medium"
                >
                  {user.firstname}.{user.lastname?.charAt(0).toUpperCase()}
                  <span>{dropdown ? "▲" : "▼"}</span>
                </button>

                {/* ✅ Mobile Dropdown (only when dropdown = true) */}
                {dropdown && (
                  <div className="absolute right-0 mt-3 bg-white rounded-lg shadow-lg flex flex-col w-[160px] z-40">
                    <NavLink
                      to="/tickets"
                      className="px-4 py-2 text-black hover:bg-gray-100 text-center"
                      onClick={() => {
                        setDropdown(false);
                        setIsOpen(false); // ✅ closes mobile menu if open
                      }}
                    >
                      My Tickets
                    </NavLink>

                    <NavLink
                      to="/reset-password"
                      className="px-4 py-2 text-black hover:bg-gray-100 text-center"
                      onClick={() => {
                        setDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Reset Password
                    </NavLink>

                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 text-red-600 text-center hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
