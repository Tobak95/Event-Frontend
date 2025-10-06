import React from "react";
import { Link } from "react-router-dom";

const DiscoverFooter = () => {
  return (
    <div
      style={{ fontFamily: " Helvetica" }}
      className="layout bg-cover bg-center py-5 mb-10 lg:mb-20 lg:mt-20 "
    >
      {/* Discover Events section */}
      <div className="relative mx-auto container DiscoverImg  rounded-3xl shadow-lg p-10 overflow-hidden ">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 my-10 text-center space-y-8 max-w-3xl mx-auto">
          <div className="w-[303.87px] lg:w-[0]">
            <div className="lg:w-[723px]">
              <h1 className="text-[20px] lg:text-[48px] font-[700] text-white leading-tight">
                Discover Events That Match Your World
              </h1>
            </div>
            <p className="text-[12.77px] lg:text-lg text-white max-w-2xl mx-auto leading-relaxed mt- lg:mt-0">
              Step into a space where every moment counts. From live concerts
              and comedy nights to art showcases explore events tailored to your
              interests.
            </p>
          </div>
          <Link to={"/discover"}>
            <button className="w-[290px] h-[57px] bg-[#006F6A] hover:bg-[#005a55] text-white  px-8 rounded-[8px] text-[10px] lg:text-[20px] transition-all duration-300 transform hover:scale-105 shadow-md">
              Discover Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFooter;
