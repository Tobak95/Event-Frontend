import React from "react";
import { events } from "../../data";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { useEventContext } from "../Hooks/useEventContext";
import dateFormat from "../Utils/dateFormat";
import { Link } from "react-router-dom";

const UpcomingEvent = () => {
  const { events } = useEventContext();

  return (
    <div className="layout mt-5 lg:mt-20">
      <div className="lg:max-w-[422px] mx-auto">
        <h1 className="font-bold text-[23px] lg:text-[48px] text-center">
          Upcoming Events
        </h1>
        <p className="lg:text-[20px] text-center text-[#777777]">
          Stay ahead with what’s happening next
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-[27.5px] mt-5 lg:mt-10">
        {events
          .filter((event) => event.status === "live")
          .slice(0, 6)
          .map((event, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-[395px] h-[494px] border border-[#6BABA9] rounded-[25px] border-b-[6.27px]"
              >
                <img
                  src={event.image}
                  alt="events-pictures"
                  className="object-cover h-[236px] w-full rounded-tl-[25.44px] rounded-tr-[25.44px] rounded-bl-[6.69px] rounded-br-[6.69px]"
                />

                <div className="max-w-[355px] w-full mx-auto pt-[10px] px-[20px]">
                  <div className="pr-[20px]">
                    <h1 className="text-[24px] font-[700] text-[#4A4A4A]">
                      {event.title}
                    </h1>

                    <div className="flex items-center text-[#777777] font-[400] gap-1 mt-2">
                      <GrLocation size={22} />
                      <p className="text-[16px] tracking-[0%] leading-[100%]">
                        {event.address}
                      </p>
                    </div>

                    <div className="flex gap-3 text-[#777777] text-[13px] font-[400] mt-2">
                      <div className="flex items-center gap-1">
                        <MdOutlineCalendarMonth size={20} />
                        <p>
                          {new Date(event.startDate).toLocaleDateString(
                            "en-us",
                            {
                              month: "short",
                              day: "2-digit",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-1">
                        <GoClock size={20} />
                        <p className="font-[400]">
                          {event.startTime} - {event.endTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center font-[700] mt-5">
                    <h6 className="text-[20px]">${event.tickets[0].price}</h6>

                    <Link to={"/eventDetails"}>
                      <button
                        className="w-[124px] h-[54px] rounded-[13px] 
                border-[2.54px] border-[#006F6A] text-[#006F6A] text-[18px] cursor-pointer"
                      >
                        Get Tickets
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UpcomingEvent;
