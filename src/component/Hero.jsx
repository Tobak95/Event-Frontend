import React from "react";
import NavBar from "../component/layout/NavBar";

const Hero = () => {
  return (
    <div>
      <div className="relative  lg:h-[705px]  text-[#FFFFFF]  items-center heroBG  bg-bottom ">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="layout relative z-10  ">
          <div className="lg:max-w-[944px] text-center mx-auto  ">
            <h1 className="mt-10 lg:mt-25 font-bold text-[24px] lg:text-[35px] lg:text-[64px] pt-20 md:mt-30">
              Discover Events That Inspire and Connect
            </h1>
            <p className="text-[16px] lg:text-[24px] mt-1 lg:mt-4">
              Your complete destination for discovering, booking, and
              experiencing events that truly matter to you.
            </p>
            <button className="bg-[#006F6A] w-[150px] lg:w-[290px] h-[46px] lg:h-[57px] mb-5 mt-7 lg:mt-10 rounded-[8px]">
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
