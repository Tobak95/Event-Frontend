// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://events-backend-6jv2.onrender.com/api", // ⬅️ replace with your real base URL
  headers: {
    "Content-Type": "application/json",
  },
});



export default api;
