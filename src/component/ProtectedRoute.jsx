import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../Hooks/useAppContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAppContext();

  // if user not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // check if the user's role is allowed
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // if user is allowed, render the nested route
  return <Outlet />;
};

export default ProtectedRoute;


// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const getUser = () => {
//   const user = JSON.parse(localStorage.getItem("user")); // adjust to your auth logic
//   return user;
// };

// const ProtectedRoute = ({ allowedRoles }) => {
//   const user = getUser();

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />;
// };
// export default ProtectedRoute;

