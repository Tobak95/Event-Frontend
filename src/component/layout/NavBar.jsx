import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../assets/Icon.png";
import icon2 from "../../assets/Icon2.png";
import drop from "../../assets/dropdown.png";
import { useNavigate, useLocation } from "react-router-dom";
import drop2 from "../../assets/dropdown2.png";
import { useAppContext } from "../../Hooks/useAppContext";

const NavBar = ({
  bgColor = "bg-[#0000005C]",
  logoSrc = logo,
  textColor = "text-[#ffffff]",
  menuColor = "#ffffff",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user, logout } = useAppContext();

  const location = useLocation();

  let usernameColor = "text-[#ffffff]";
  let iconLogo = icon;
  let dropDown = drop;

  if (location.pathname === "/tickets") {
    usernameColor = "text-[#1b1b1b]";
    iconLogo = icon2;
    dropDown = drop2;
  }

  const redirect = useNavigate();

  const handleLogout = () => {
    logout();
    setDropdown(false);
    redirect("/login");
  };
  useEffect(() => {
    if (!user) {
      redirect("/")
    }
  }, [user, redirect]);

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
                <div
                  onClick={() => setDropdown(true)}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <div className="bg-[#96C4C2] w-[23px] h-[23px] rounded-[200px] flex items-center justify-center">
                    <p className="text-[10px] font-[400] text-[#006F6A]">
                      {user.firstname?.charAt(0)}.{user.lastname?.charAt(0)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className={`font-[500] text-[16px] ${usernameColor}`}>
                      {user.firstname}.{user.lastname?.charAt(0).toUpperCase()}
                    </p>
                    <img src={dropDown} alt="" className="w-5 h-3 " />
                  </div>
                </div>
              )}
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

              {!user ? (
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
              ) : (
                <div className="relative">
                  <div
                    onClick={() => setDropdown(!dropdown)}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <div className="bg-[#96C4C2] w-[23px] h-[23px] rounded-full flex items-center justify-center">
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

                  {dropdown && (
                    <div className="absolute top-full text-center mt-2 right-0 bg-[#FFFFFF] w-[100px] rounded-[12px] text-[16px] font-[400] shadow-md">
                      <NavLink
                        className="text-[#E21A1A] block p-3"
                        onClick={handleLogout}
                      >
                        Log Out
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
      {dropdown && (
        <div className="hidden md:block bg-[#FFFFFF] w-[167px] h-[137px] rounded-[12px] text-[14px] font-[400] absolute top-[100px] right-[50px]">
          <NavLink className="text-[#000000] block border-b-[0.2px] border-[#000000] p-3 ">
            My Tickets
          </NavLink>
          <NavLink to={"/reset-password"} className="text-[#000000] block border-b-[0.2px] border-[#000000] p-3">
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
