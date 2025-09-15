import React from "react";
import Hero from "../component/Hero";
import ContactUs from "./ContactUs";
import HowItWorks from "../component/HowItWorks";
import WhyChooseUs from "../component/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <ContactUs />
      <HowItWorks/>
      <WhyChooseUs/>
    </div>
  );
};

export default Home;
