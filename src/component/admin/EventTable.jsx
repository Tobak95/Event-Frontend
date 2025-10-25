import React from "react";
import { useNavigate } from "react-router-dom";
import EventActionModal from "../../component/admin/EventActionModal";
import { useEventContext } from "../../Hooks/useEventContext";

const EventTable = ({ events, setEvents, eventType }) => {
  const redirect = useNavigate();
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const { updateEventStatus, deleteEvent, isSubmitting } = useEventContext();

  // Publish event
  const handlePublish = async (id) => {
    await updateEventStatus(id, "live");
    setSelectedEvent(null);
  };

  // Move to draft
  const handleUnpublish = async (id) => {
    await updateEventStatus(id, "draft");
    setSelectedEvent(null);
  };

  // Delete event
  const handleDelete = async (id) => {
    await deleteEvent(id);
    setSelectedEvent(null);
  };

  // ✏️ Edit event (redirect to create form)
  const handleEdit = (id) => {
    redirect(`/dashboard/admin/events/edit/${id}`);

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
                key={event._id}
                className="border-b border-[#00000020] hover:bg-[#F9FAFB] transition-colors"
              >
                <td
                  className="py-4 text-[#1B1B1B] font-medium truncate max-w-[200px] text-[20px] cursor-pointer"
                  onClick={() =>
                    redirect(`/dashboard/admin/events/${event._id}`)
                  }
                >
                  {event.title}
                </td>
                <td className="py-4 text-[#000000] text-[16px] font-[400]">
                  {new Date(event.startDate).toLocaleDateString("en-us", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="py-4 text-[#000000] text-[16px] font-[400]">
                  {event.tickets[0]?.type || "-"}
                </td>
                <td className="py-4 text-[#000000] text-[16px] font-[400]">
                  {event.sales || "0"}
                </td>
                <td className="py-4">
                  <span
                    className={`px-2 py-1 font-[500] text-[11px] rounded-[5px] ${
                      event.status === "live"
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
                  }}
                >
                  {eventType === "All Events" ? " " : "..."}
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

      {selectedEvent && (
        <EventActionModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onPublish={handlePublish}
          onUnpublish={handleUnpublish}
          onDelete={handleDelete}
          onEdit={handleEdit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

export default EventTable;
