import React from "react";
import Buasyo from "../assets/busayo.jpg";
import Fedrick from "../assets/fedrick.jpg";
import Gold from "../assets/gold.jpg";
import emoji1 from "../assets/emoji1.png";
import emoji2 from "../assets/emoji2.png";
import emoji3 from "../assets/emoji3.png";
import emoji4 from "../assets/emoji4.png";
import elipse from "../assets/EllipseTeam.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination"; // optional
import "swiper/css/navigation"; // optional

import { Pagination, Navigation } from "swiper/modules";

const team = [
  {
    name: "Busayo Abigeal",
    role: "CEO / Event Manager",
    image: Buasyo,
  },
  {
    name: "Fedrick Jasper",
    role: "Director",
    image: Fedrick,
  },
  {
    name: "Gold Bridget",
    role: "Finance Manager",
    image: Gold,
  },
];

const events = [
  {
    title: "Social Events",
    description: "Theme gatherings, small parties, team building activities",
    icon: emoji1,
  },
  {
    title: "Corporate Events",
    description: "Conferences, product launches, award galas & VIP events",
    icon: emoji2,
  },
  {
    title: "Lifestyle Events",
    description: "Fashion shows, art exhibitions, influencer brunch & pop-ups",
    icon: emoji3,
  },
  {
    title: "Festivals",
    description: "Music and food festivals, community fairs",
    icon: emoji4,
  },
];

const MeetTheTeamSection = () => {
  return (
    <section className="my-16">
      <section className="py-16 bg-[#F7F9FF]">
        {/* Meet the Team */}
        <div className="layout px-6 text-center">
          <h2 className="text-3xl font-bold text-[#006F6A] mb-10">
            Meet the Team
          </h2>

          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 }, // small screens
              640: { slidesPerView: 2 }, // tablets
              1024: { slidesPerView: 3 }, // desktops
            }}
          >
            <div className=" md:grid-cols-3 gap-10 ">
              {team.map((member, idx) => (
                <SwiperSlide key={idx} className="flex flex-col  items-center">
                  
                    <div className="w-50 h-50 flex mx-auto relative">
                      <img
                        src={elipse}
                        alt=""
                        className="absolute w-28 right-30 rotate-1"
                      />
                      <img
                        src={member.image}
                        alt={member.name}
                        className=" w-full h-full object-cover rounded-full z-10"
                      />
                    </div>
                

                  <h3 className="mt-4 text-lg font-semibold text-[#4A4A4A]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#4A4A4A]">{member.role}</p>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>

      {/* Signature Events */}
      <section className=""></section>
      <div className="max-w-6xl mx-auto px-6 text-center mt-20">
        <h2 className="text-3xl font-bold text-[#4A4A4A] mb-10">
          Signature Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#FEFCFB] shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-center">
                <img src={event.icon} alt="" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#4A4A4A]">
                {event.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
