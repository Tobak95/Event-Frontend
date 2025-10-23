import { axiosInstance } from "../Utils/axiosInstance";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../Hooks/useAppContext";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useAppContext();

  // Fetch events
  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/eventra/all-event");
      setEvents(response.data.allevents);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  //createEvent
  const createEvent = async (eventData, isDraft = true) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post(
        "/eventra/create-events",
        {
          ...eventData,
          status: isDraft ? "draft" : "live",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setEvents((prev) => [response.data.event, ...prev]);
      toast.success(response.data.message || "Event created successfully!");
      return response.data.event;
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error(
        error.response?.data?.message || "Failed to create event. Try again."
      );
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <EventContext.Provider
      value={{
        isLoading,
        events,
        isSubmitting,
        createEvent,
        setEvents,
        setIsLoading,
        fetchEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
