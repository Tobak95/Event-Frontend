// src/api/api.js
import axios from "axios";

// Axios instance
export const api = axios.create({
  baseURL: "https://events-backend-6jv2.onrender.com/api",
});

// Helper to set token dynamically
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Debug token
console.log(localStorage.getItem("token"));
