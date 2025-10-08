import React from "react";
import { Link } from "react-router-dom";

const DiscoverFooter = () => {
  return (
    <div
      style={{ fontFamily: " Helvetica" }}
      className="layout bg-cover bg-center py-5 mb-10 lg:mb-20 lg:mt-20 "
    >
      {/* Discover Events section */}
      <div className="relative mx-auto container DiscoverImg rounded-3xl shadow-lg p-6 md:p-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div> 
        <div className="relative z-10 lg:my-10 text-center space-y-6 md:space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <div className="w-full">
              <h1 className="text-[20px] md:text-[32px] lg:text-[48px] font-[700] text-white leading-tight">
                Discover Events That Match Your World
              </h1>
            </div>
            <p className="text-[12.77px] md:text-[16px] lg:text-[20px] text-center leading-relaxed text-[#CCCCCC] px-4 md:px-0">
              Step into a space where every moment counts. From live concerts
              and comedy nights to art showcases explore events tailored to your
              interests.
            </p>
          </div>
          <Link to={"/discover"}>
            <button className="w-[150px] md:w-[200px] lg:w-[290px] h-[40px] md:h-[48px] lg:h-[57px] bg-[#006F6A] hover:bg-[#005a55] text-white px-6 md:px-8 rounded-[8px] text-[12px] md:text-[16px] lg:text-[20px] transition-all duration-300 transform hover:scale-105 shadow-md">
              Discover Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoverFooter;