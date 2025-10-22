/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../../../assets/logoutIcon.png";
import { useAppContext } from "../../../Hooks/useAppContext";

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { logout } = useAppContext();

  const handleLogout = () => {
    // Clear any stored auth data
    // localStorage.removeItem("authToken");
    // localStorage.removeItem("user");

    // Navigate to login page
    navigate("/login");
    logout();

    // Close modal
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  // if (!isOpen) return null;

  return (
    <div className="flex fixed inset-0 z-50 justify-center items-center w-[100vw] h-screen">
      {/* Backdrop */}
      <div
        className="fixed inset-0 w-[100vw] h-screen bg-black/80 bg-opacity-50"
        onClick={handleCancel}
      />

      {/* Modal */}
      <div className="relative z-10 mx-4 h-[356px] w-[516px] shadow-xl card bg-base-100">
        <div className="flex items-center justify-center">
          <img src={logoutIcon} alt="" className="mt-10" />
        </div>
        <div className="flex justify-center">
          <div className="p-6 w-[516px] h-[356px] ">
            {/* Header */}
            <div className="text-center">
              <h2 className="mb-4 text-xl font-semibold text-black">
                Log out?
              </h2>
              <p className="mb-6 text-sm text-base-content/70 2xl:font-semibold">
                Are you sure you want to log out?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-outline w-[188px]  h-[61px]"
              >
                No
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="  text-white bg-red-600 border-red-600 btn btn-error  w-[188px] h-[61px]"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
