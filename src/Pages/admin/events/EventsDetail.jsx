import React, { useEffect } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import eventPic from "../../../assets/eventDetails.jpg";
import calender from "../../../assets/calendar.png";
import clock from "../../../assets/clock.png";
import location from "../../../assets/location.png";
import { TbShare3 } from "react-icons/tb";
import { useEventContext } from "../../../Hooks/useEventContext";
import SuspenseLoader from "../../../component/layout/SuspenseLoader";

const EventsDetail = () => {
  const { id } = useParams();
  const { getSingleEvent, singleEvent } = useEventContext();
  const redirect = useNavigate();

  useEffect(() => {
    if (id) {
      getSingleEvent(id);
    }
  }, [id]);

  if (!singleEvent?._id) {
    return <SuspenseLoader />;
  }

  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />

      <div className="flex overflow-hidden flex-col flex-1">
        <Header />
        <div className="overflow-y-auto flex-1">
          <section className="p-7 bg-[#FFFFFF]">
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-col">
                <h2 className="font-medium text-[32px] text-[#1B1B1B]">
                  Events details
                </h2>
                <div className="flex items-center gap-1">
                  <Link
                    className="font-[400] text-[16px] text-[#777777]"
                    to="/dashboard/admin/events"
                  >
                    Events
                  </Link>
                  <FaGreaterThan
                    color="#777777"
                    className="w-[10px] h-[10px]"
                  />
                  <Link className="text-[#1B1B1B] font-[400] text-[16px]">
                    Events details
                  </Link>
                </div>
              </div>
              <button
                onClick={() =>
                  redirect(`/dashboard/admin/events/edit/${singleEvent._id}`)
                }
                className="text-[#4A4A4A] font-[400] text-[16px] cursor-pointer border-[#4A4A4A] border w-[153px] h-[43px] rounded-[8px] flex items-center justify-center gap-2"
              >
                Edit Event <FaRegEdit />
              </button>
            </div>
            <div className="flex justify-between mb-5">
              <img
                src={singleEvent.image}
                alt=""
                className="w-[552px] h-[574px] rounded-[10px]"
              />
              <div className="w-[480px]">
                <h1 className="font-[700] text-[48px] text-[#1B1B1B]  leading-[67px] tracking-[0%]">
                  {singleEvent.title}
                </h1>
                <p>{singleEvent.description}</p>
                <div className="font-[400] text-[20px] flex items-center gap-2 text-[#1B1B1B] my-2">
                  <img src={calender} alt="" />
                  {/* <p>Thursday, September 25th 2025</p> */}
                  <p>
                    {singleEvent?.startDate &&
                      new Date(singleEvent.startDate).toLocaleDateString(
                        "en-US",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                  </p>
                </div>
                <div className="font-[400] text-[20px] flex items-center gap-2 text-[#1B1B1B] my-2">
                  <img src={clock} alt="" />
                  <p>
                    {`${new Date(
                      `1970-01-01T${singleEvent.startTime}`
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                      -
                      ${new Date(
                        `1970-01-01T${singleEvent.endTime}`
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })} WAT`}
                  </p>
                </div>
                <div className="font-[400] text-[20px] flex items-center gap-2 text-[#1B1B1B] mb-5">
                  <img src={location} alt="" />
                  <p>{singleEvent?.address}</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8899119932175!2d3.3634445749201167!3d6.535585093457214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dba7bad97cb%3A0xae0bc176821041e5!2sTech%20Studio%20Academy!5e0!3m2!1sen!2sng!4v1757937615048!5m2!1sen!2sng"
                  width="100%"
                  height="245px"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <Link
              to="/dashboard/admin/events/attendees"
              onClick={() => scrollTo(0, 0)}
              className="flex items-center gap-2 text-[#006F6A] underline text-[24px] font-[400] mb-7"
            >
              View Event Attendees
              <TbShare3 />
            </Link>
            <div>
              <h2 className="font-[400] text-[32px] text-[#000000]">
                Tickets Details
              </h2>
              <table className="w-full ">
                <thead>
                  <tr className="bg-[#F6F6F6] h-[50px] text-center text-[16px] text-[#4A4A4A] font-medium">
                    <th className="py-3 pl-3 text-left">Ticket Name</th>
                    <th className="py-3">Ticket Price</th>
                    <th className="py-3">Time and Date</th>
                    <th className="py-3">Sales</th>
                    <th className="py-3">Ticket Status</th>
                  </tr>
                </thead>
                <tbody>
                  {singleEvent.tickets.map((ticket) => (
                    <tr
                      key={ticket._id}
                      className="bg-[#F6F6F6] h-[50px] text-center text-[16px] text-[#4A4A4A] font-medium"
                    >
                      <td className="py-3 pl-3 text-left">{ticket.name}</td>
                      <td className="py-3">
                        {ticket.price === 0 ? "Free" : `$${ticket.price}`}
                      </td>
                      <td className="py-3">
                        {singleEvent.startDate
                          ? new Date(singleEvent.startDate).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )
                          : "No date"}{" "}
                        -{" "}
                        {singleEvent.startTime
                          ? new Date(
                              `1970-01-01T${singleEvent.startTime}`
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })
                          : "No date"}
                      </td>
                      <td className="py-3">{ticket.sales || 0}</td>
                      <td className="py-3">{ticket.status || "Unknown"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventsDetail;
