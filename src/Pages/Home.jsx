import React from "react";
import Hero from "../component/Hero";

import NavBar from "../component/layout/NavBar";
import Footer from "../component/layout/Footer";
import UpcomingEvent from "../component/UpcomingEvent";
import EventCategory from "../component/EventCategory"
import ContactUs from "./ContactUs";
import HowItWorks from "../component/HowItWorks";
import WhyChooseUs from "../component/WhyChooseUs";



const Home = () => {
  return (
    <div>

      <NavBar />
      <Hero />
      <Footer />


      <div className="heroBG bg-no-repeat bg-cover w-full bg-bottom ">
        <Hero />
      </div>
      <UpcomingEvent />
      <EventCategory />

      <Hero />
      <ContactUs />
      <HowItWorks/>
      <WhyChooseUs/>
    </div>
  );
};

export default Home;
