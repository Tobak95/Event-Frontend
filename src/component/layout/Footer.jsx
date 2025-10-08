import React from "react";
import logo from "../../assets/logobottom.png";
import icon1 from "../../assets/whatsapp.png";
import icon2 from "../../assets/linkedin.png";
import icon3 from "../../assets/instagram.png";
import icon4 from "../../assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { link: "Home", to: "/" },
    { link: "Events", to: "/discover" },
    { link: "How It Works", to: "#howitworks" },
    { link: "About Us", to: "/about-us" },
    { link: "Contact", to: "/contact-us" },
  ];

  const support = ["FAQs", "Help Center", "Terms of Service", "Privacy Policy"];

  return (
    <div
      style={{ fontFamily: " Helvetica" }}
      className="bg-[#006F6A]  pt-[50px] pb-[20px]"
    >
      <footer
        style={{ fontFamily: " Helvetica" }}
        className="layout flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 "
      >
        <div className="">
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Logo" className="mb-2" />
          </div>

          <p className="max-w-[440px] w-full font-[400] text-center md:text-start p-2 text-[16px] md:text-[20px] text-[#FFFFFF] lg:mb-6">
            EVENTRA connects you to unforgettable events and experiences.
            Discover, book, and enjoy with ease, anytime and anywhere.
          </p>
          <p className="hidden lg:block lg:text-[#F1F1F1] font-[700] text-center md:text-start text-[16px] md:text-[20px] mb-2">
            Follow Us
          </p>
          <div className="hidden lg:flex items-center justify-center md:justify-start gap-3">
            <img src={icon1} alt="WhatsApp" />
            <img src={icon2} alt="LinkedIn" />
            <img src={icon3} alt="Instagram" />
            <img src={icon4} alt="Twitter" />
          </div>
        </div>
        <div>
          <h2 className="text-[20px] md:text-[24px] text-center md:text-start text-[#FFFFFF] font-[700] mb-2">
            Contact Us
          </h2>
          <p className="text-[#E6F1F0] font-[400] text-[16px] md:text-[20px] mb-2">
            eventra@gmail.com
          </p>
          <p className="text-[#E6F1F0] font-[400] text-[16px] md:text-[20px]">
            +234 7081981212
          </p>
        </div>
        <div>
          <h2 className="text-[20px] md:text-[24px] text-center md:text-start text-[#FFFFFF] font-[700] mb-2">
            Quick Links
          </h2>
          <div className="flex flex-col gap-1 items-center md:items-start">
            {quickLinks.map((item, index) =>
              item.link === "How It Works" ? (
                <span
                  key={index}
                  className="text-[#E6F1F0] font-[400] text-[16px] md:text-[20px] mb-2 block cursor-not-allowed opacity-60"
                >
                  {item.link}
                </span>
              ) : (
                <Link
                  key={index}
                  to={item.to}
                  className="text-[#E6F1F0] font-[400] text-[16px] md:text-[20px] mb-2 block hover:text-gray-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {item.link}
                </Link>
              )
            )}
          </div>
        </div>
        <div>
          <h2 className="text-[20px] md:text-[24px] text-center md:text-start text-[#FFFFFF] font-[700] mb-2">
            Support
          </h2>
          {support.map((item, index) => (
            <ul
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              <li className="text-[#E6F1F0] font-[400] text-[16px] md:text-[20px] mb-2">
                {item}
              </li>
            </ul>
          ))}

          <p className="lg:hidden text-[20px] md:text-[24px] text-center md:text-start text-[#FFFFFF] font-[700] mb-2 mt-5">
            Follow Us
          </p>
          <div className="lg:hidden flex items-center justify-center md:justify-start gap-3 mt-2 ">
            <img src={icon1} alt="WhatsApp" />
            <img src={icon2} alt="LinkedIn" />
            <img src={icon3} alt="Instagram" />
            <img src={icon4} alt="Twitter" />
          </div>
        </div>
      </footer>
      <hr className="lg:hidden mt-10 text-[#FFFFFF]" />
      <p className="text-center text-[#FFFFFF] font-[400] text-[18px] mt-10 mb-6">
        &copy; 2025 Eventra - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
