import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../Hooks/useAppContext";
import SuspenseLoader from "./layout/SuspenseLoader";
import { toast } from "react-toastify";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, loading } = useAppContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <SuspenseLoader />
      </div>
    );
  }

  if (!user) {
    toast.error("Login to Continue");
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  const role = String(user.role || "").toLowerCase();
  const allowed = (allowedRoles || []).map((r) => String(r).toLowerCase());
  if (allowed.length > 0 && !allowed.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
