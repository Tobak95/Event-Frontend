import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../Utils/formValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthWrapper from "../../component/layout/AuthWrapper";
import { FcGoogle } from "react-icons/fc";
import { axiosInstance } from "../../Utils/axiosInstance";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setErrorMessage("");
    // Your login logic here
    try {
      const response = await axiosInstance.post("/auth/login");
    } catch (error) {}
    setSubmitting(false);
  };

  return (
    <main className="">
      <article className="grid p-3 lg:p-0 lg:grid-cols-2 ">
        {/* Section for form  */}
        <section className=" flex justify-center items-center ">
          <div className=" lg:p-10 w-fit lg:w-[527px] shadow lg rounded-lg bg-white">
            <Link to={"/"}>
              <div className="flex gap-3 items-center mb-10">
                <img src={logo2} alt="" />
              </div>
            </Link>
            <div className=" lg:w-[455px] lg:mt-25">
              <h1 className="font-semibold text-[30px] lg:text-[28px]">
                Welcome Back!
              </h1>
              <p className="text-[20px] lg:text-[16px]">
                continue with email address you used to create account
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-[600]">
                  {" "}
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Martinsjemima2021@gmail.com"
                  className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
                  {...register("email")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              </div>

              <div className="flex flex-col  my-3">
                <label htmlFor="password" className="font-[600]">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
                  {...register("password")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.password?.message}
                </p>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-center mt-2">{errorMessage}</p>
              )}
              <div className="flex items-center  justify-between">
                <button className="flex flex-row items-center gap-1 my-3">
                  <div className="">
                    <input
                      type="checkbox"
                      id="terms&condition"
                      className="w-[15px] h-[17px] mt-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="T&C">Remember Me</label>
                  </div>
                </button>

                <Link to={"/reset-password"}>
                  <div className="my-3">
                    <p className="text-[#EC5E5E] font-[600]">
                      forgot Password?
                    </p>
                  </div>
                </Link>
              </div>

              <div className="flex justify-center text-[#FFFFFF]">
                <button
                  disabled={submitting}
                  className="h-[48px]  bg-[#3D9970] w-full rounded-[15px]"
                >
                  {submitting ? (
                    <ClipLoader size={20} color="#ffffff" />
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>

              <div className="mt-5">
                <button className="flex items-center justify-center gap-2 py-5 border w-full rounded-[15px]">
                  <div>
                    <FcGoogle size={16} />
                  </div>
                  <h1>Continue with Google</h1>
                </button>
                <Link to={"/register"}>
                  <p className="mt-5 t">
                    New User? <span className="text-[#006F6A]">Sign Up</span>{" "}
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </section>

        {/* section for background */}
        <section>
          <div className="hidden lg:block">
            <AuthWrapper />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Login;
