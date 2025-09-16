
import React from 'react'
import Vision from '../component/Vision'

import React from "react";
import NavBar from "../component/layout/NavBar";


const AboutUs = () => {
  return (
    <div>
      <div className="about-bg h-screen max-h-[557px]">
        <NavBar />
        <div className="flex items-center justify-center mt-20">
          <div>
            <h1 className="text-[#FEFCFB] text-[35px] md:text-[45px] lg:text-[64px] text-center font-[700] ">
              About Eventra
            </h1>
            <p className="text-[#FFFFFF] text-center text-[18px] md:text-[20px] max-[648.34375px] w-full">
              We’re on a mission to make attending and organizing events
              seamless, <br /> memorable, and inspiring.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
