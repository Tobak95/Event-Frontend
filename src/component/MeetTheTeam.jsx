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
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation
            modules={[Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 }, // small screens
              640: { slidesPerView: 2 }, // tablets
              1024: { slidesPerView: 3 }, // desktops
            }}
            className="pb-10"
          >
            {team.map((member, idx) => (
              <SwiperSlide key={idx} className="flex flex-col items-center">
                <div className="w-[333px] h-[333px] flex mx-auto relative">
                  <img
                    src={elipse}
                    alt=""
                    className="absolute h-75 w-38 top-5 -left-12 rotate-1"
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top  rounded-full z-10"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#4A4A4A]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#4A4A4A]">{member.role}</p>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Pagination dots here */}
          <div className="custom-pagination flex justify-center mt-6"></div>
        </div>
      </section>

      {/* Signature Events */}
      <section className=""></section>
      <div className="max-w-6xl mx-auto px-6 text-center mt-20">
        <h2 className="text-[25px] text-black lg:text-[48px] font-bold mb-10">
          Signature Events
        </h2>

        <Swiper
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Pagination]} // ✅ removed Navigation module
          breakpoints={{
            320: { slidesPerView: 1 }, // mobile
            640: { slidesPerView: 2 }, // tablets
            1024: { slidesPerView: 4 }, // desktops
          }}
          className="pb-12" // ✅ extra padding so dots sit below cards
        >
          {events.map((event, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#FEFCFB] shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 flex flex-col items-center text-center h-full">
                {/* Icon container */}
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-[#F5F5F5]">
                  <img
                    src={event.icon}
                    alt={event.title}
                    className="w-10 h-10 object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-[#4A4A4A]">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-[#4A4A4A] text-sm mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
