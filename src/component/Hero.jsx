import React from "react";
import NavBar from "../component/layout/NavBar";

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero
    <div className="h-[705px] text-[#FFFFFF] flex items-center">
      <div className="layout">
        <div className="max-w-[944px] text-center mx-auto">
          <h1 className="font-bold text-[35px] lg:text-[64px]">
            Discover Events That Inspire and Connect
          </h1>
          <p className="text-[24px] mt-4">
            Your complete destination for discovering, booking, and experiencing
            events that truly matter to you.
          </p>
          <button className="bg-[#006F6A] w-[290px] h-[57px] mt-10 rounded-[8px]">
            Explore Events
          </button>
    <div>
      <NavBar/>
      <div className="h-[705px] text-[#FFFFFF] flex items-center heroBG bg-no-repeat bg-cover w-full bg-bottom ">
        <div className="layout ">
          <div className="max-w-[944px] text-center mx-auto">
            <h1 className="font-bold text-[35px] lg:text-[64px]">
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
