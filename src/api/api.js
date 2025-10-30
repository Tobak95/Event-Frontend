// src/api/api.js
import axios from "axios";
import { axiosInstance } from "../Utils/axiosInstance";


// const api = axios.create({
//   baseURL: "https://events-backend-6jv2.onrender.com", // ⬅️ replace with your real base URL
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export const getRevenueDataApi = async (part)=>{
  return await axiosInstance.get(part,{
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${localStorage.getItem('accessToken')}` 
    }
  })

}

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
