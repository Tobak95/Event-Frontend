import React from "react";
import Hero from "../component/Hero";
import Discover from "../component/Discover";
import Testimonial from "../component/Testimonial";
import UpcomingEvent from "../component/UpcomingEvent";
import EventCategory from "../component/EventCategory";
import HowItWorks from "../component/HowItWorks";
import WhyChooseUs from "../component/WhyChooseUs";
import Footer from "../component/layout/Footer";
import Nav from "../component/layout/Nav";

const HomeLoggedIn = () => {
  return (
    <div>
      <div>
        <div className="relative h-[705px]  text-[#FFFFFF]  items-center heroBG  bg-bottom ">
          <div className="absolute inset-0 bg-black/50"></div>
          <Nav />
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
      <UpcomingEvent />
      <EventCategory />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonial />
      <Discover />
      <Footer />
    </div>
  );
};

export default HomeLoggedIn;
