import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { useEventContext } from "../Hooks/useEventContext";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useAppContext } from "../Hooks/useAppContext";

const UpcomingEvent = () => {
  const { events, isLoading } = useEventContext();
  //  const navigate = useNavigate();
  //   const { user } = useAppContext();


  //  const handleGetTicket = () => {
  //    if (!user) {
  //      // optionally pass return location: { state: { from: location } }
  //      navigate("/auth/login");
  //      return;
  //    }
  //    // proceed to purchase/booking flow
  //    navigate(`/events/${events.id}/tickets`);
  //  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p className="text-[#006F6A] font-semibold text-lg">
          Loading events...
        </p>
      </div>
    );
  }

  const liveEvents = events.filter((event) => event.status === "live");

  if (liveEvents.length === 0) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <p className="text-gray-500 font-medium">No upcoming events yet.</p>
      </div>
    );
  }

  return (
    <div className="layout mt-5 lg:mt-20">
      <div className="lg:max-w-[422px] mx-auto">
        <h1 className="font-bold text-[23px] lg:text-[48px] text-center">
          Upcoming Events
        </h1>
        <p className="lg:text-[20px] text-center text-[#777777]">
          Stay ahead with what’s happening next
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-[27.5px] mt-5 lg:mt-10">
        {liveEvents.slice(0, 6).map((event, index) => (
          <div
            key={index}
            className="w-full max-w-[395px] h-[494px] border border-[#6BABA9] rounded-[25px] border-b-[6.27px]"
          >
            <img
              src={event.image}
              alt="events-pictures"
              className="object-cover h-[236px] w-full rounded-tl-[25.44px] rounded-tr-[25.44px]"
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
                      {new Date(event.startDate).toLocaleDateString("en-us", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <GoClock size={20} />
                    <p className="font-[400]">
                      {new Date(
                        `1970-01-01T${event.startTime}`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}{" "}
                      -{" "}
                      {new Date(
                        `1970-01-01T${event.endTime}`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center font-[700] mt-5">
                <h6 className="text-[20px]">
                  ${event.tickets?.[0]?.price || "N/A"}
                </h6>

                <Link to={`/eventDetails/${event._id}`}>
                  <button
                    // onClick={handleGetTicket}
                    className="w-[124px] h-[54px] rounded-[13px] 
                      border-[2.54px] border-[#006F6A] text-[#006F6A] text-[18px] cursor-pointer"
                  >
                    Get Tickets
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvent;
