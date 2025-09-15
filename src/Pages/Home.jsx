import React from "react";
import Hero from "../component/Hero";

import Discover from "../component/Discover";
import Testimonial from "../component/Testimonial";


import NavBar from "../component/layout/NavBar";
import Footer from "../component/layout/Footer";

import UpcomingEvent from "../component/UpcomingEvent";
import EventCategory from "../component/EventCategory";
import HowItWorks from "../component/HowItWorks";
import WhyChooseUs from "../component/WhyChooseUs";

const Home = () => {
  return (
    <div>

      <Testimonial/>
      <Discover />

      <div className="heroBG bg-no-repeat bg-cover w-full bg-bottom ">
        <Hero />
      </div>

      
      <Hero />
      <UpcomingEvent />
      <EventCategory />
      <HowItWorks />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
