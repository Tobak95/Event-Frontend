import React from "react";
import { events } from "../../data";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { useEventContext } from "../Hooks/useEventContext";
import dateFormat from "../Utils/dateFormat";

const UpcomingEvent = () => {
  const { isLoading, events, isSubmitting } = useEventContext();

  return (
    <div className="layout mt-10 lg:mt-20">
      <div className="lg:max-w-[422px] mx-auto">
        <h1 className="font-bold text-[35px] lg:text-[48px] text-center">
          Upcoming Events
        </h1>
        <p className="lg:text-[20px] text-center">
          Stay ahead with what’s happening next
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-[27.5px] mt-10">
        {events.map((event, index) => {
          return (
            <div
              key={index}
              className="w-full lg:w-[440px] lg:h-[494px] border border-[#6BABA9] rounded-[25px] border-b-[6.27px] "
            >
              <img
                src={event.eventImage}
                alt="events-pictures"
                className="object-cover h-[236px] w-full rounded-tl-[25.44px] rounded-tr-[25.44px] rounded-bl-[6.69px] rounded-br-[6.69px] "
              />

              <div className="px-2 py-4 lg:pl-9">
                <div className="w-[355px]">
                  <h1 className="text-[24px] font-[700]">{event.title}</h1>
                  <div className="flex items-center text-[#777777] font-[400] gap-2 mt-2">
                    <GrLocation size={22} />
                    <p className="text-[16px]">{event.location}</p>
                  </div>

                  <div className="flex gap-8  text-[#777777] font-[400] mt-2">
                    <div className="flex items-center gap-1">
                      <MdOutlineCalendarMonth size={20} />
                      <p>
                        {new Date(event.eventDate).toLocaleDateString("en-us", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <GoClock size={20} />
                      <p>
                        {dateFormat(event.eventStart)} -{" "}
                        {dateFormat(event.eventEnd)}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 lg:px-1 flex justify-between items-center font-[700] mt-8">
                    <h6 className="text-[20px]">${event.price}</h6>
                    <button
                      className="px-1 lg:w-[123px] h-[54px] rounded-[13px] 
                    border-[2.54px] border-[#006F6A] text-[#006F6A] text-[18px] cursor-pointer "
                    >
                      Get Tickets
                    </button>
                  </div>
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
