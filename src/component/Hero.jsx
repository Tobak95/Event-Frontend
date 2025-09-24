import React from "react";
import NavBar from "../component/layout/NavBar";

const Hero = () => {
  return (
    <div>
      <div className="relative h-[705px]  text-[#FFFFFF]  items-center heroBG  bg-bottom ">
        <div className="absolute inset-0 bg-black/50"></div>
        <NavBar />
        <div className="layout relative z-10 ">
          <div className="max-w-[944px] text-center mx-auto">
            <h1 className="font-bold text-[35px] lg:text-[64px] mt-15">
              Discover Events That Inspire and Connect
            </h1>
            <p className="text-[24px] mt-4">
              Your complete destination for discovering, booking, and
              experiencing events that truly matter to you.
            </p>
            <button className="bg-[#006F6A] w-[290px] h-[57px] mt-10 rounded-[8px]">
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
