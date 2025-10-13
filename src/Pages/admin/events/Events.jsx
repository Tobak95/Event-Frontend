import React, { useState } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import filter from "../../../assets/mi_filter.png";
import search from "../../../assets/search01.png";
import EventTable from "../../../component/admin/EventTable";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [eventsList, setEventsList] = useState([
    {
      id: 1,
      name: "Rhythm & Soul Tour: Etern...",
      date: "19 May 2025 5:00 pm",
      type: "Paid Event",
      sales: "200/300",
      status: "Draft",
    },
    {
      id: 2,
      name: "Utopia The 3rd",
      date: "16 May 2025 5:00 pm",
      type: "Free Event",
      sales: "200/300",
      status: "Draft",
    },
    {
      id: 3,
      name: "Heat Wave Block Party",
      date: "12 May 2025 5:00 pm",
      type: "Paid Event",
      sales: "200/300",
      status: "Live",
    },
    {
      id: 4,
      name: "Ilashizzy Water Rave",
      date: "20 May 2025 4:00 pm",
      type: "Paid Event",
      sales: "400/500",
      status: "Draft",
    },
    {
      id: 5,
      name: "Sky high roof top",
      date: "19 May 2025 5:00 pm",
      type: "Free Event",
      sales: "300/600",
      status: "Live",
    },
    {
      id: 6,
      name: "All black Emo Party",
      date: "30 June 2025 2:00 pm",
      type: "Free Event",
      sales: "500/800",
      status: "Live",
    },
    {
      id: 7,
      name: "Kataka Rangers Motion",
      date: "22 Sept 2025 5:00 pm",
      type: "Paid Event",
      sales: "600/700",
      status: "Draft",
    },
    {
      id: 8,
      name: "Valhalla Theme Party",
      date: "19 May 2025 5:00 pm",
      type: "Free Event",
      sales: "200/300",
      status: "Live",
    },
    {
      id: 9,
      name: "The Phantom of the Opera",
      date: "19 May 2025 5:00 pm",
      type: "Paid Event",
      sales: "200/300",
      status: "Live",
    },
  ]);

  const [eventType, setEventType] = useState("All Events");
  const [searchTerm, setSearchTerm] = useState("");
  const redirect = useNavigate();

  const filteredEvents = eventsList.filter((event) => {
    const matchesType =
      eventType === "All Events" ? true : event.status === eventType;

    const matchesSearch = event.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />
      <div className="flex overflow-hidden flex-col flex-1">
        <Header />
        <div className="overflow-y-auto flex-1">
          <section className="p-7 bg-[#FFFFFF]">
            <h2 className="text-[#000000] font-medium text-[48px] mb-4">
              Events
            </h2>

            {/* Filters and Actions */}
            <div className="flex items-center justify-between mb-5">
              {/* Type Filter */}
              <div className="font-medium text-[#777777] text-[20px] flex items-center gap-5">
                <button
                  onClick={() => setEventType("All Events")}
                  className={`${
                    eventType === "All Events"
                      ? "text-[#006F6A] underline underline-offset-4"
                      : ""
                  } cursor-pointer`}
                >
                  All Events
                </button>

                <button
                  onClick={() => setEventType("Live")}
                  className={`${
                    eventType === "Live"
                      ? "text-[#006F6A] underline underline-offset-4"
                      : ""
                  } cursor-pointer`}
                >
                  Live
                </button>

                <button
                  onClick={() => setEventType("Draft")}
                  className={`${
                    eventType === "Draft"
                      ? "text-[#006F6A] underline underline-offset-4"
                      : ""
                  } cursor-pointer`}
                >
                  Draft
                </button>
              </div>

              {/* Search + Buttons */}
              <div className="flex items-center gap-2">
                <div className="w-[199px] h-[43px] border border-[#ACACAC] bg-[#FFFFFF] rounded-[5px] flex items-center gap-1 py-[8.25px] px-[10.32px]">
                  <img src={search} alt="search" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-0 outline-0 placeholder:text-[#6F6F6F] placeholder:text-[14px] w-full"
                  />
                </div>

                <button className="border border-[#ACACAC] bg-[#FFFFFF] rounded-[5px] flex items-center gap-1 py-[8.25px] px-[12px] w-[73px] h-[43px] cursor-pointer">
                  <img
                    src={filter}
                    className="w-[17px] h-[17px]"
                    alt="filter"
                  />
                  <p className="text-[#777777] text-[14px] font-[400]">
                    Filter
                  </p>
                </button>

                <button
                  onClick={() => redirect("/dashboard/admin/create-events")}
                  className="rounded-[8px] w-[166px] h-[43px] bg-[#006F6A] font-medium text-[20px] text-[#FFFFFF] px-[14px] pr-[9px] cursor-pointer"
                >
                  New Event +
                </button>
              </div>
            </div>

            {/* Table */}
            <EventTable events={filteredEvents} setEvents={setEventsList} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Events;
