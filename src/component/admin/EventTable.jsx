import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../component/admin/FilterModal";
import EventActionModal from "../../component/admin/EventActionModal";

const EventTable = ({ events, setEvents, eventType }) => {
  const redirect = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filters, setFilters] = useState({ type: "", status: "" });

  const handleApplyFilters = (newFilters) => {
    const updatedEvents = events.map((event) => {
      if (event.id === selectedEvent.id) {
        return {
          ...event,
          type:
            newFilters.type === "Paid"
              ? "Paid Event"
              : newFilters.type === "Free"
              ? "Free Event"
              : event.type,
          status: newFilters.status || event.status,
        };
      }
      return event;
    });

    setEvents(updatedEvents);
    setIsFilterOpen(false);
  };

  const handlePublish = (id) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === id ? { ...ev, status: "Live" } : ev))
    );
    setSelectedEvent(null);
  };

  const handleUnpublish = (id) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === id ? { ...ev, status: "Draft" } : ev))
    );
    setSelectedEvent(null);
  };

  const handleDelete = (id) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== id));
    setSelectedEvent(null);
  };

  return (
    <div className="relative">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#F6F6F6] text-left text-[16px] text-[#4A4A4A] font-medium">
            <th className="py-3 pl-3">Event Name</th>
            <th className="py-3">Event Date</th>
            <th className="py-3">Event Type</th>
            <th className="py-3">Sales</th>
            <th className="py-3">Status</th>
            <th className="py-3"></th>
          </tr>
        </thead>

        <tbody>
          {events.length > 0 ? (
            events.map((event) => (
              <tr
                key={event.id}
                className="border-b border-[#000000]/20 hover:bg-[#F9FAFB] transition-colors"
              >
                <td
                  className="py-4 text-[#1B1B1B] font-medium truncate max-w-[120px] text-[20px] cursor-pointer"
                  onClick={() =>
                    redirect(`/dashboard/admin/events/${event.id}`)
                  }
                >
                  {event.name}
                </td>
                <td className="py-4 text-[#000000] text-[16px] font-[400]">
                  {event.date}
                </td>
                <td className="py-4 text-[#000000] text-[16px] font-[400]">
                  {event.type}
                </td>
                <td className="py-4 text-[#000000] text-[16px] font-[400]">
                  {event.sales}
                </td>
                <td className="py-4">
                  <span
                    className={`w-[52px] h-[23px] p-[10px] font-[500] text-[11px] rounded-[5px] ${
                      event.status === "Live"
                        ? "bg-[#E6F1F0] text-[#004441]"
                        : "bg-[#FFFAE6] text-[#FFCF00]"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
                <td
                  className="py-4 text-[#000000] text-xl cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(event);

                    if (eventType === "All Events") {
                      setFilters({
                        type: event.type.includes("Paid") ? "Paid" : "Free",
                        status: event.status,
                      });
                      setIsFilterOpen(true);
                    }
                  }}
                >
                  ...
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-6 text-center text-[#777777]">
                No events found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {eventType === "All Events" && (
        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          onApply={handleApplyFilters}
        />
      )}

      {(eventType === "Live" || eventType === "Draft") && selectedEvent && (
        <EventActionModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onPublish={handlePublish}
          onUnpublish={handleUnpublish}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default EventTable;
