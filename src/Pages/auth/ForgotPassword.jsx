import React from "react";
import AuthWrapper from "../../component/layout/AuthWrapper";
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
    <main>
      <article className="grid p-3 lg:p-0 lg:grid-cols-2 ">
        <div className="flex items-center justify-center">
          <div className="bg-white py-[29px] px-[26px] rounded-lg shadow-lg w-full max-w-[505px] h-[457px] ">
            <Link to="/login">
              <button className="flex items-center gap-1.5 mt-4">
                <FaArrowLeft /> Back
              </button>
            </Link>

            <h1 className="text-[30px] font-[400]  mt-10">
              Forgot your password?
            </h1>
            <p className="text-[#666] text-[16px]  font-normal">
              We will send instructions to your email to reset your password.
            </p>

            <form
              onSubmit={handleSubmit(handleForgotPassword)}
              className="mt-6"
            >
              <label htmlFor="Email" className="label mb-1.5">
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
                className="h-[48px]  bg-[#3D9970] w-full rounded-[15px] mt-5"
              >
                {IsSubmitting ? (
                  <span className="loading loading-spinner loading-md text-black"></span>
                ) : (
                  "Send Mail"
                )}
              </button>
            </form>
            <p className="text-[#666] text-[16px] font-normal mt-10 flex items-center justify-center">
              Remember you Password?{" "}
              <Link to={"/login"}>
                <span className="text-black font-bold"> Log in</span>
              </Link>
            </p>
          </div>
        </div>

        <section>
          <div className="hidden lg:block">
            <AuthWrapper />
          </div>
        </section>
      </article>
    </main>
  );
};

export default ForgotPassword;
