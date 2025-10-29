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
  const [singleEvent, setSingleEvent] = useState({});

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

  const getSingleEvent = async (id) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/eventra/single-event/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(response.data.event);
      setSingleEvent(response.data.event);
    } catch (error) {
      console.error("Error fetching event:", error);
      toast.error(error.response?.data?.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEvent = async (id) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.delete(
        `/eventra/delete-event/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(response.data.message || "Event deleted successfully!");

      setEvents((prevEvents) => prevEvents.filter((event) => event._id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error(
        error.response?.data?.message || "Failed to delete event. Try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const updateEventStatus = async (id, status) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.patch(
        `/eventra/update-event/${id}`,
        { status },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event._id === id ? response.data.event : event
        )
      );

      setSingleEvent((prev) =>
        prev && prev._id === id ? response.data.event : prev
      );

      toast.success(response.data.message || "Event updated successfully!");
      return response.data.event;
    } catch (error) {
      console.error("Error updating event status:", error);
      toast.error(
        error.response?.data?.message || "Failed to update event status."
      );
      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateEvent = async (id, formData) => {
    try {
      setIsSubmitting(true);

      const payload = new FormData();

      for (const key in formData) {
        if (key === "image") {
          if (formData.image && formData.image instanceof File) {
            payload.append("image", formData.image);
          }
        } else if (Array.isArray(formData[key])) {
          formData[key].forEach((item, index) => {
            if (typeof item === "object") {
              for (const field in item) {
                payload.append(`${key}[${index}][${field}]`, item[field]);
              }
            } else {
              payload.append(`${key}[${index}]`, item);
            }
          });
        } else {
          payload.append(key, formData[key]);
        }
      }

      const res = await axiosInstance.patch(
        `/eventra/update-event/${id}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Event updated successfully ✅");

      setEvents((prev) =>
        prev.map((ev) => (ev._id === id ? res.data.event : ev))
      );
      setSingleEvent(res.data.event);

      return res.data.event;
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error.response?.data?.message || "Failed to update event ❌");
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
        singleEvent,
        getSingleEvent,
        deleteEvent,
        updateEventStatus,
        updateEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
