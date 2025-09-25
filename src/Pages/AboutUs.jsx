import React from "react";
import Vision from "../component/Vision";
import NavBar from "../component/layout/NavBar";
import WhyChooseUs from "../component/WhyChooseUs"
import Testimonial from "../component/Testimonial";
import Discover from "../component/Discover";
import MeetTheTeamSection from "../component/MeetTheTeam";
import Footer from "../component/layout/Footer";

const AboutUs = () => {
  return (
    <div className="">
      {/* ✅ Added padding-top to offset fixed navbar */}
      <div className="about-bg h-screen  pt-[100px]">
        <div className="flex items-center justify-center">
          <div className="my-10 text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-[#FEFCFB] text-[35px] md:text-[45px] lg:text-[64px] text-center font-[700]">
              About Eventra
            </h1>
            <p className="text-[#FFFFFF] text-center text-[18px] md:text-[20px] w-full">
              We’re on a mission to make attending and organizing events
              seamless, <br /> memorable, and inspiring.
            </p>
          </div>
        </div>
      </div>

      <Vision />
      <WhyChooseUs />
      <MeetTheTeamSection />
      <Testimonial />
      <Discover />
    </div>
  );
};


export default AboutUs;
