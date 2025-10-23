// src/pages/admin/events/useEventContext.js
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../../api/api";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [event, setEvent] = useState({
    tickets: [],
  });

  const createEvent = async (formData, isDraft = false) => {
    setIsSubmitting(true);
    try {
      const payload = {
        ...event,
        ...formData,
        status: isDraft ? "draft" : "live",
      };
      const response = await api.post("/eventra/create-event", payload);

      if (response?.data?.success) {
        toast.success(response.data.message || "Event created successfully");
        return response.data.event;
      } else {
        toast.error(response.data?.message || "Event creation failed");
        return null;
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to create event");
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EventContext.Provider
      value={{ event, setEvent, isSubmitting, createEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
