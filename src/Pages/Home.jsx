import React from "react";
import Hero from "../component/Hero";
import UpcomingEvent from "../component/UpcomingEvent";
import EventCategory from "../component/EventCategory";
import ContactUs from "./ContactUs";
import HowItWorks from "../component/HowItWorks";
import WhyChooseUs from "../component/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <div className="heroBG bg-no-repeat bg-cover w-full bg-bottom ">
        <Hero />
      </div>
      <UpcomingEvent />
      <EventCategory />
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
