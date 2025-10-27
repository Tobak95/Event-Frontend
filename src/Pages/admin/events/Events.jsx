import React, { useState, useEffect } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import filterIcon from "../../../assets/mi_filter.png";
import search from "../../../assets/search01.png";
import EventTable from "../../../component/admin/EventTable";
import { useNavigate } from "react-router-dom";
import { useEventContext } from "../../../Hooks/useEventContext";
import FilterModal from "../../../component/admin/FilterModal";
import { RiseLoader } from "react-spinners";

const Events = () => {
  const { events, isLoading, fetchEvents, setEvents } = useEventContext();
  const [eventType, setEventType] = useState("All Events");
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({ type: "" });

  const redirect = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  // Filter events based on selected event type, search term, and paid/free filter
  const filteredEvents = events.filter((event) => {
    const matchesType =
      eventType === "All Events"
        ? true
        : event.status.toLowerCase() === eventType.toLowerCase();

    const matchesSearch = event.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesFilter =
      filters.type === ""
        ? true
        : filters.type === "Paid"
        ? event.tickets[0].type.toLowerCase() === "paid"
        : event.tickets[0].type.toLowerCase() === "free";

    return matchesType && matchesSearch && matchesFilter;
  });

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    setIsFilterOpen(false);
  };

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

            {/* Filters */}
            <div className="flex items-center justify-between mb-5">
              <div className="font-medium text-[#777777] text-[20px] flex items-center gap-5">
                {["All Events", "Live", "Draft"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setEventType(type)}
                    className={`${
                      eventType === type
                        ? "text-[#006F6A] underline underline-offset-4"
                        : ""
                    } cursor-pointer`}
                  >
                    {type}
                  </button>
                ))}
              </div>

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

                {/* Filter Button */}
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="border border-[#ACACAC] bg-[#FFFFFF] rounded-[5px] flex items-center gap-1 py-[8.25px] px-[12px] w-[73px] h-[43px] cursor-pointer"
                >
                  <img
                    src={filterIcon}
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
            {isLoading ? (
              <div className="flex items-center justify-center mt-50 ">
                <RiseLoader size={20} color="#006F6A" />
              </div>
            ) : (
              <EventTable
                events={filteredEvents}
                setEvents={setEvents}
                eventType={eventType}
              />
            )}
          </section>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApply={handleApplyFilters}
      />
    </div>
  );
};

export default Events;
