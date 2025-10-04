import React from "react";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPasswordSchema } from "../../Utils/formValidator";
import { useState } from "react";
import { axiosInstance } from "../../Utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import { PiWarningCircle } from "react-icons/pi";

const ForgotPassword = () => {
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //call the useNavigate hook below
  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleForgotPassword = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/forgot-password", {
        ...data,
      });
      if (response.status === 200) {
        // redirect("/check-email");
        // store user mail / data in local storage
        localStorage.setItem("email", data.email);
        redirect("/check-email");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="layout">
      <div className="flex flex-col">
        <div className="">
          <img src={logo2} alt="..." className="" />
        </div>

        <article className="lg:min-h-screen flex items-center justify-center  ">
          <div className="">
            <div className="bg-white p-5 rounded-lg  w-full lg:max-w-[610px] h-[457px] ">
              <div className="lg:w-[442px]">
                <h1 className="text-[38px] font-[700]  mt-10">
                  Forgot password?
                </h1>
                <p className="text-[#000000] text-[16px] font-[500] ">
                  Enter your email address to reset password
                </p>
              </div>

              <form
                onSubmit={handleSubmit(handleForgotPassword)}
                className="mt-6"
              >
                <label
                  htmlFor="Email"
                  className="label mb-1.5 text-[#000000] font-[500]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Enter Email"
                  className="input w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
                {errorMessage && (
                  <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#FF37370D] border border-[#ff3737] text-[#ff3737] flex items-center gap-3">
                    <PiWarningCircle size={22} />
                    <p>{errorMessage}</p>
                  </div>
                )}
                <button
                  disabled={IsSubmitting}
                  type="submit"
                  className="h-[48px] text-[#FFFFFF]  bg-[#006F6A] w-full rounded-[8px] mt-5"
                >
                  {IsSubmitting ? (
                    <span className="loading loading-spinner loading-md text-white"></span>
                  ) : (
                    "Continue"
                  )}
                </button>
              </form>
              <p className="text-[#000000] text-[16px] font-[400] mt-5 flex items-center justify-center">
                <Link to={"/login"}>
                  <span className="text-black font-[400]">Back to Login</span>
                </Link>
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ForgotPassword;
