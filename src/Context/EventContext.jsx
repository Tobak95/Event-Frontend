import { axiosInstance } from "../Utils/axiosInstance";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "../Hooks/useAppContext";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const { token } = useAppContext();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get("/events");
      //   console.log(response.data);
      setEvents(response.data.events);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [events]);

  // const getSingleEvent = async () => {};

  return (
    <EventContext.Provider
      value={{
        isLoading,
        events,
        isSubmitting,
        setIsSubmitting,
        setEvents,
        setIsLoading,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
