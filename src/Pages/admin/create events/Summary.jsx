import React, { useEffect, useState } from "react";
import { useEventContext } from "./useEventContext";
import TicketCard from "./TicketCard";

export default function Summary({ onBack }) {
  const { event, isSubmitting, createEvent } = useEventContext();
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (event.image) {
      const url =
        typeof event.image === "string"
          ? event.image
          : URL.createObjectURL(event.image);
      setImagePreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [event.image]);

  return (
    <div className="flex-1 overflow-y-auto bg-white border-l border-[#8b8b8b]">
      <div className="p-[30px] max-w-[1107px] mx-auto">
        {event.tickets && event.tickets.length > 0 ? (
          event.tickets.map((ticket, i) => (
            <TicketCard
              key={i}
              type={ticket.name}
              price={
                ticket.type === "free" ? "Free" : `$${ticket.price.toFixed(2)}`
              }
              eventName={event.title || "Untitled Event"}
              location={event.address || "No location"}
              date={
                event.startDate
                  ? `${event.startDate} — ${event.endDate || ""}`
                  : "Date not set"
              }
              image={imagePreview}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-[20px]">
            No tickets created yet.
          </p>
        )}

        <div className="flex justify-between gap-[20px] mt-[50px]">
          <button
            onClick={onBack}
            className="border px-4 py-2 rounded w-[150px]"
          >
            Back
          </button>
          <button
            onClick={() => createEvent(event, false)}
            disabled={isSubmitting}
            className="bg-[#006f6a] text-white px-4 py-2 rounded w-[150px]"
          >
            {isSubmitting ? "Publishing..." : "Publish Event"}
          </button>
        </div>
      </div>
    </div>
  );
}
