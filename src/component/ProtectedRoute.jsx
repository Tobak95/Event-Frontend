import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../Hooks/useAppContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAppContext();

  // if user not logged in, redirect to login
  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  // // check if the user's role is allowed
  // if (!allowedRoles.includes(user.role)) {
  //   return <Navigate to="/" replace />;
  // }

  // if user is allowed, render the nested route
  return <Outlet />;
};

export default ProtectedRoute;


