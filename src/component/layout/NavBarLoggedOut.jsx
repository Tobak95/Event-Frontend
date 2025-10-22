import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import icon from "../../assets/Icon.png";
import icon2 from "../../assets/Icon2.png";
import SearchBox from "../SearchBox";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBarLoggedOut = ({
  logoSrc = logo,
  textColor = "text-[#ffffff]",
  menuColor = "#ffffff",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const redirect = useNavigate();

  const isSearchMode = showSearch;
  let iconLogo = isSearchMode ? icon2 : icon;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {showSearch && <div className="fixed inset-0 bg-white z-20"></div>}

      <div
        className={`fixed top-0 left-0 w-full z-30 transition-colors duration-900 ${
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
          </div>
        )}
      </div>

      {showSearch && (
        <SearchBox open={showSearch} onClose={() => setShowSearch(false)} />
      )}
    </>
  );
};

export default NavBarLoggedOut;
