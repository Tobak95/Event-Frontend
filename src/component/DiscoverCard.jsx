// DiscoverCard.jsx or Card.jsx
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarDays, LuClock4 } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Card = ({ h2, pTag1, location, time, date, price, img }) => {
  const sizes = [
    "31px",
    "20px",
    "43px",
    "53px",
    "64px",
    "74px",
    "84px",
    "94px",
    "104px",
    "114px",
    "124px",
    "134px",
    "144px",
    "154px",
    "164px",
    "174px",
    "184px",
  ];

  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row rounded-2xl overflow-hidden bg-white border border-[#6BABA9] border-b-[6.27px]">
        <div className="flex flex-col justify-between p-4 flex-1 w-full lg:w-[50%]">
          <div>
            <h2 className="text-xl font-bold text-[#000000]">{h2}</h2>
            <p className="text-lg font-bold text-[#000000]">{pTag1}</p>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p className="flex items-center gap-1">
                <CiLocationOn /> {location}
              </p>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1">
                  <LuCalendarDays />
                  {date}
                </p>
                <p className="flex items-center gap-1">
                  <LuClock4 />
                  {time}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold">{price}</span>

            <Link to={"/tickets"}>
              <button className="px-4 py-2 rounded-lg border border-[#6E706B] cursor-pointer text-[#006F6A] font-bold">
                Get Tickets
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Ticket Stub with Image) */}
        <div className="relative w-full lg:w-[50%] p-4">
          {sizes.map((size, i) => (
            <div
              key={i}
              className="absolute left-2 w-4 h-2 bg-white rounded-full"
              style={{ top: size }}
            />
          ))}
          <img
            src={img}
            alt="Event"
            className="w-full h-[180.7861328125px] object-cover rounded-tr-xl rounded-br-xl"
          />

          {/* Ticket cutout effect */}
          <div className="absolute top-1/2 -right-4 w-14 h-14 bg-white rounded-full -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
