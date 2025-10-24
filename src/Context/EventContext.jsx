import { axiosInstance } from "../Utils/axiosInstance";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../Hooks/useAppContext";
import SuspenseLoader from "../component/layout/SuspenseLoader";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useAppContext();

  if (isLoading) {
    <SuspenseLoader />;
  }

  // Fetch events
  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("/eventra/all-event");
      const sorted = response.data.allevents.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setEvents(sorted);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (isLoading) {
    <SuspenseLoader />;
  }

  //createEvent
  // const createEvent = async (eventData, isDraft = true) => {
  //   setIsSubmitting(true);
  //   try {
  //     const response = await axiosInstance.post(
  //       "/eventra/create-event",
  //       {
  //         ...eventData,
  //         status: isDraft ? "draft" : "live",
  //       },
  //       {
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );

  //     setEvents((prev) => [response.data.event, ...prev]);
  //     toast.success(response.data.message || "Event created successfully!");
  //     return response.data.event;
  //   } catch (error) {
  //     console.error("Error creating event:", error);
  //     toast.error(
  //       error.response?.data?.message || "Failed to create event. Try again."
  //     );
  //     return null;
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const createEvent = async (eventData, isDraft = true) => {
    setIsSubmitting(true);
    try {
      const data = new FormData();

      Object.keys(eventData).forEach((key) => {
        const value = eventData[key];

        if (value !== undefined && value !== null) {
          // 🧠 Check if value is an object/array, stringify it
          if (typeof value === "object" && key !== "image") {
            data.append(key, JSON.stringify(value));
          } else {
            data.append(key, value);
          }
        }
      });

      data.append("status", isDraft ? "draft" : "live");

      const response = await axiosInstance.post("/eventra/create-event", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

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
