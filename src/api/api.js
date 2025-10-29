// src/api/api.js
import axios from "axios";
import { axiosInstance } from "../Utils/axiosInstance";

const api = axios.create({
  baseURL: "https://events-backend-6jv2.onrender.com", // ⬅️ replace with your real base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRevenueDataApi = async (part)=>{
  return await axiosInstance.get(part,{
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${localStorage.getItem('accessToken')}` 
    }
  })

}



export default api;
