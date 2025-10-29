import { useContext } from "react";
import { appContext } from "../Context/appContext";

export const useAppContext = () => useContext(appContext);