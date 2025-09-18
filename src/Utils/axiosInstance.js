import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://events-backend-6jv2.onrender.com/api",
});
