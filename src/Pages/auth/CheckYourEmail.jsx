import React from "react";
import AuthWrapper from "../../component/layout/AuthWrapper";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const CheckYourEmail = () => {
  const email = localStorage.getItem("email");
  const maskEmail = (email) => {
    const [username, domain] = email.split("@");
    const maskedUsername =
      username.slice(0, 2) + "*".repeat(username.length - 2);
    return `${maskedUsername}@${domain}`;
  };
  return (
    <section className="grid p-3 lg:p-0 lg:grid-cols-2 ">
      <div className="flex items-center justify-center">
        <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full lg:w-[453px]">
          <Link to="/forgot-password">
            <button className="flex items-center gap-1.5">
              <FaArrowLeft /> Back
            </button>
          </Link>
          <div className="max-w-[332px] mt-4">
            <h1 className="text-2xl lg:text-[30px] font-[600] text-[#000000]">
              Check Your Email
            </h1>
            <p className="text-[16px] font-[400] text-[#666666] ">
              Check the email address{" "}
              <span className="font-[700]">{maskEmail(email)}</span> for
              instructions to reset your password.
            </p>

            <Link
              to="/forgot-password"
              className="font-semibold mt-2.5 btn btn-active text-black"
            >
              {" "}
              Didn’t get a link, resend mail
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <AuthWrapper />
      </div>
    </section>
  );
};

export default CheckYourEmail;
