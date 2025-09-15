import React from "react";
import Hero from "../component/Hero";
import UpcomingEvent from "../component/UpcomingEvent";
import EventCategory from "../component/EventCategory";

const Home = () => {
  return (
    <div>
      <div className="heroBG bg-no-repeat bg-cover w-full bg-bottom ">
        <Hero />
      </div>
      <UpcomingEvent />
      <EventCategory />
    </div>
  );
};

export default Home;
