import { axiosInstance } from "../Utils/axiosInstance";
import { createContext } from "react";
import { useState, useEffect } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchEvents = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get("/events?page=1&limit=6");
      //   console.log(response.data);
      setEvents(response.data.events);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDiscover = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/events/upcoming?page=${page}`);
      console.log(response.data);
      setDiscover(response.data.events);
      setPage(response.data.page);
      setTotalPages(response.data.totalUpcomingEvents);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [events]);

  useEffect(() => {
    fetchDiscover();
  }, []);

  return (
    <EventContext.Provider
      value={{
        isLoading,
        events,
        isSubmitting,
        setIsSubmitting,
        setEvents,
        setIsLoading,
        discover,
        setDiscover,
        page,
        setPage,
        totalPages,
        setTotalPages,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
