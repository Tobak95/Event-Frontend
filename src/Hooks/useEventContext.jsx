import { useContext } from "react";
import { EventContext } from "../Context/EventContext";


export const useEventContext = () => useContext(EventContext)