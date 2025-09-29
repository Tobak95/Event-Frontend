import React from "react";
import { Cards } from "../Pages/Discover";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Words = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl text-[#1B1B1B] font-bold text-center lg:text-start">
        {title}
      </h2>
      <p className="text-center lg:text-start ">{paragraph}</p>
    </div>
  );
};

const OtherEvents = () => {
  const cardData = [
    {
      id: 1,
      h2: "Rhythm & Soul Tour: ",
      pTag1: "Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      time: "9:00 PM - 12:00PM",
      date: "Sept 25, 2025",
      img: img1,
      price: "$90.00",
    },
    {
      id: 2,
      h2: "The Vibe Tour:",
      pTag1: "Genesis Night",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img2,
      price: "$135.00",
    },
    {
      id: 3,
      h2: "Visions in Motion Tour:",
      pTag1: "Bridge of Culture",
      location: "National Museum Lagos (Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img3,
      price: "$50.00",
    },
  ];
  return (
    <div className="px-4">
      <h2 className="text-2xl text-[#1B1B1B] font-bold mb-10 mt-10">
        Other events you may like
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-12 ">
        {cardData.map((data) => (
          <Cards
            key={data.id}
            date={data.date}
            h2={data.h2}
            img={data.img}
            location={data.location}
            pTag1={data.pTag1}
            price={data.price}
            time={data.time}
          />
        ))}
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div className="mt-8 my-10 lg:w-[40%] px-4">
      <h2 className="text-2xl  font-bold text-[#000000] mb-4">Directions</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8899119932175!2d3.3634445749201167!3d6.535585093457214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dba7bad97cb%3A0xae0bc176821041e5!2sTech%20Studio%20Academy!5e0!3m2!1sen!2sng!4v1757937615048!5m2!1sen!2sng"
        width="100%"
        height="423.05364990234375"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

function EventDetailsAbout({
  price,
  title1,
  title2,
  paragraph1,
  paragraph2,
  time,
}) {
  return (
    <div className="container mx-auto mt-12 mb-12">
      <div className="flex flex-col-reverse lg:flex-row lg:items-start items-center justify-between px-4 gap-4">
        <div className="lg:w-[40%] flex flex-col gap-6">
          <Words paragraph={paragraph1} title={title1} />

          <Words paragraph={paragraph2} title={title2} />
        </div>
        <div className="flex items-center justify-between w-full lg:w-[40%] border border-[#E5E5E5] p-4 rounded-[10px] gap-4">
          <div className="flex flex-col lg:gap-4">
            <div className="flex items-center gap-2">
              <span className="hidden lg:block lg:text-2xl"> From</span>
              <p className="text-2xl lg:text-4xl text-[#1B1B1B] font-bold">
                {price}
              </p>
            </div>
            <p className="text-[12px] lg:text-[18px]">{time}</p>
          </div>
          <button className="text-[#fff] bg-[#2B8783] hover:bg-[#277773] cursor-pointer py-3  lg:py-4 px-8 lg:px-4 rounded-[5px]">
            Get a Ticket
          </button>
        </div>
      </div>
      <Map />

      <div className="divider hidden lg:block" />

      <OtherEvents />
    </div>
  );
}

export default EventDetailsAbout;
