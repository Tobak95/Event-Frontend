import React from "react";
import Hero from "../component/Hero";
import Discover from "../component/Discover";
import Testimonial from "../component/Testimonial";
import UpcomingEvent from "../component/UpcomingEvent";
import EventCategory from "../component/EventCategory";
import HowItWorks from "../component/HowItWorks";
import WhyChooseUs from "../component/WhyChooseUs";
import Footer from "../component/layout/Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
