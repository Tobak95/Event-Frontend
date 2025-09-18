import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../assets/icon.png";
import drop from "../../assets/dropdown.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState({
    firstName: "David",
    lastName: "Saskey",
  });

  const handleLogout = () => {
    setUser(!user);
    setDropdown(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <div className="bg-[#0000005C] backdrop-blur-md sticky top-0 z-30 right-0 left-0">
        <nav className="layout flex items-center justify-between h-[100px] px-4 md:px-8">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="w-[120px] md:w-[150px]" />
          </NavLink>

          <div className="hidden md:flex items-center gap-15">
            <div className="flex items-center gap-10">
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
              <img src={icon} alt="" />
              {!user ? (
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
              ) : (
                <div
                  onClick={() => setDropdown(true)}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <div className="bg-[#96C4C2] w-[23px] h-[23px] rounded-[200px] flex items-center justify-center">
                    <p className="text-[10px] font-[400] text-[#006F6A]">
                      {user.firstName.charAt(0)}.{user.lastName.charAt(0)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-[500] text-[16px] text-[#FFFFFF] ">
                      {user.firstName}.{user.lastName.charAt(0).toUpperCase()}
                    </p>
                    <img src={drop} alt="" className="w-5 " />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-5 md:hidden">
            <img src={icon} alt="" className="block " />
            <button
              onClick={toggleMenu}
              className="md:hidden text-white text-2xl cursor-pointer"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
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
          )}
        </nav>
      </div>
      {dropdown && (
        <div className="bg-[#FFFFFF] w-[167px] h-[137px] rounded-[12px] text-[14px] font-[400] absolute top-[100px] right-[50px]">
          <NavLink className="text-[#000000] block border-b-[0.2px] border-[#000000] p-3 ">
            My Tickets
          </NavLink>
          <NavLink className="text-[#000000] block border-b-[0.2px] border-[#000000] p-3">
            Reset Password
          </NavLink>
          <NavLink className="text-[#E21A1A] block p-3" onClick={handleLogout}>
            Log Out
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
