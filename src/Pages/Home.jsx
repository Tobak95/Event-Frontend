import React from "react";
import Hero from "../component/Hero";
import Discover from "../component/Discover";
import Testimonial from "../component/Testimonial";
import UpcomingEvent from "../component/UpcomingEvent";
import EventCategory from "../component/EventCategory";
import HowItWorks from "../component/HowItWorks";
import WhyChooseUs from "../component/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <UpcomingEvent />
      <EventCategory />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonial />
      <Discover />
      
    </div>
  );
};

export default Home;
