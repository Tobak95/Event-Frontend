import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import icon from "../../assets/Icon.png";
import icon2 from "../../assets/Icon2.png";
import drop from "../../assets/dropdown.png";
import drop2 from "../../assets/dropdown2.png";
import { useAppContext } from "../../Hooks/useAppContext";
import SearchBox from "../SearchBox";
import LogoutModal from "../../Pages/auth/modals/LogOutModal";

const NavBar = ({
  logoSrc = logo,
  textColor = "text-[#ffffff]",
  menuColor = "#ffffff",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { user, logout } = useAppContext();
  const dropdownRef = useRef(null);
  const location = useLocation();
  const redirect = useNavigate();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Change colors when search mode active
  const isSearchMode = showSearch;

  // let usernameColor = isSearchMode ? "text-black" : "text-[#ffffff]";
  // let iconLogo = isSearchMode ? icon2 : icon;
  // let dropDown = isSearchMode ? drop2 : drop;

  // Determine page context (e.g., Tickets)
  const isTicketsPage = location.pathname === "/tickets";

  let usernameColor =
    isTicketsPage || isSearchMode ? "text-black" : "text-[#ffffff]";
  let iconLogo = icon; // default
  let dropDown = drop;

  if (isTicketsPage) {
    iconLogo = icon2; // use icon2 for tickets
    dropDown = drop2;
  }
  if (isSearchMode) {
    iconLogo = icon2; // keep black icon in search mode
    dropDown = drop2;
  }

  // Handle logout
  const handleLogout = () => {
    // setDropdown(false);
    // redirect("/login");
    setIsLogoutModalOpen((prev) => !prev);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {showSearch && <div className="fixed inset-0 bg-white z-20"></div>}

      <div
        className={`fixed top-0 left-0 w-full z-30 transition-colors duration-900 
        ${
          isSearchMode
            ? "bg-white"
            : isScrolled
            ? "bg-black/40 backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <nav className="layout flex items-center justify-between h-[100px] px-4 md:px-8 relative z-40">
          <NavLink to="/">
            <img
              src={`${isSearchMode ? logo2 : logoSrc}`}
              alt="Logo"
              className="w-[120px] md:w-[150px]"
            />
          </NavLink>

          <div className="hidden md:flex items-center gap-15">
            <div className="flex items-center gap-10">
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${
                    isSearchMode ? "text-black" : textColor
                  } ${isActive ? "font-[700] underline" : ""}`
                }
              >
                Discover Events
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${
                    isSearchMode ? "text-black" : textColor
                  } ${isActive ? "font-[700] underline" : ""}`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `font-[400] text-[16px] ${
                    isSearchMode ? "text-black" : textColor
                  } ${isActive ? "font-[700] underline" : ""}`
                }
              >
                Contact
              </NavLink>
            </div>

            <div className="flex items-center gap-4">
              <Link>
                <img
                  src={iconLogo}
                  alt="search"
                  className="cursor-pointer"
                  onClick={() => setShowSearch((prev) => !prev)}
                />
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
                      <p className={`font-[500] text-[16px] ${menuColor}`}>
                        {user.firstname}.
                        {user.lastname?.charAt(0).toUpperCase()}
                      </p>
                      <img src={dropDown} alt="" className="w-5 h-3" />
                    </div>
                  </div>

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
                        to="/change-password"
                        className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                        onClick={() => setDropdown(false)}
                      >
                        Change Password
                      </NavLink>

                      {isLogoutModalOpen && (
                        <LogoutModal
                          isOpen={isLogoutModalOpen}
                          onClose={handleLogout}
                        />
                      )}
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

          {/* Mobile */}

          <div className="flex gap-5 md:hidden">
            <img src={iconLogo} alt="" className="block" />
            <button onClick={toggleMenu} className="md:hidden text-2xl">
              {isOpen ? (
                <FaTimes color={isSearchMode ? "black" : menuColor} />
              ) : (
                <FaBars color={isSearchMode ? "black" : menuColor} />
              )}
            </button>
          </div>
        </nav>
        {isOpen && (
          <div className="md:hidden absolute top-[100px] left-0 w-full bg-black/100 backdrop-blur-md z-20 p-6 flex flex-col gap-6">
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
              <div className="flex flex-col gap-4 ">
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
                  className="flex items-center justify-center gap-2 w-full text-white font-medium"
                >
                  {user.firstname}.{user.lastname?.charAt(0).toUpperCase()}
                  <span>{dropdown ? "▲" : "▼"}</span>
                </button>

                {dropdown && (
                  <div className="absolute right-25 bottom-13 mt-3 bg-white rounded-lg shadow-lg flex flex-col w-[190px] h-[190px] pt-9 z-40">
                    <NavLink
                      to="/tickets"
                      className="px-4 py-2 text-black hover:bg-gray-100 text-center"
                      onClick={() => {
                        setDropdown(false);
                        setIsOpen(true); // ✅ closes mobile menu if open
                      }}
                    >
                      My Tickets
                    </NavLink>

                    <NavLink
                      to="/change-password"
                      className="px-4 py-2 text-black hover:bg-gray-100 text-center"
                      onClick={() => {
                        setDropdown(false);
                        setIsOpen(false);
                      }}
                    >
                      Change Password
                    </NavLink>

                    <button
                      onClick={() => {
                        isLogoutModalOpen(); // open modal instead of immediate logout
                      }}
                      className="px-4 py-2 text-red-600 text-center hover:bg-gray-100"
                    >
                      Log Out
                    </button>
                    {isLogoutModalOpen && (
                      <LogoutModal
                        isOpen={isLogoutModalOpen}
                        onClose={handleLogout}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ✅ Search Box */}
      {showSearch && (
        <SearchBox open={showSearch} onClose={() => setShowSearch(false)} />
      )}
    </>
  );
};

export default NavBar;
