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
import { useAppContext } from "../../Hooks/useAppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, X, CheckCircle } from "lucide-react";
import partySpray from "../../assets/partySpray.jpg";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAppContext();

  const navigate = useNavigate();

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
    // console.log("login data:", { data });

    // try {
    //   const response = await axiosInstance.post("/auth/login", { ...data });
    //   const { data: mydata } = response;
    //   if (response.data === 200) {
    //     console.log(mydata);
    //   }
    //   login(mydata.token, mydata.user);
    //   toast.success("Login Successful");
    //   if (mydata.user.role === "admin" && mydata.user.role === "superAdmin") {
    //     navigate("/dashboard/admin");
    //   } else {
    //     navigate("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   setErrorMessage(error?.response?.data?.message || "Login Failed");
    // }
    // setSubmitting(false);
    try {
      const { data: mydata } = await axiosInstance.post("/auth/login", {
        ...data,
      });
      login(mydata.token, mydata.user);

      console.log(mydata);
      toast.success("Welcome");
      if (mydata.user.role === "user") {
        navigate("/");
      } else {
        navigate("/dashboard/admin");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data.message);
      // setErrorMsg(error?.response?.data.message || "Login Failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="h-">
      <article className="grid p-3 lg:p-0 lg:grid-cols-2 ">
        {/* Section for form  */}
        <section className="flex justify-center items-center h-screen">
          <div className=" lg:p-10 w-fit lg:w-[527px]  rounded-lg bg-white">
            <Link to={"/"}>
              <div className="flex gap-3 items-center mb-10">
                <img src={logo2} alt="" />
              </div>
            </Link>
            <div className=" lg:w-[455px] lg:mt-20">
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
                  className="border border-[#777777] h-[54.3px] px-2 rounded-[5px] mt-1  focus:border-gray-700 focus:outline-gray-400 placeholder:italic "
                  {...register("email")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              </div>

              <div className="flex flex-col  my-3 relative">
                <label htmlFor="password" className="font-[600]">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="border border-[#777777] h-[54.3px] px-2 rounded-[5px] mt-1  focus:border-gray-700 focus:outline-gray-400 placeholder:italic"
                  {...register("password")}
                />
                <div className="absolute inset-y-1 right-0 pr-5 mt-5 flex items-center">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
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

                <Link to={"/forgot-password"}>
                  <div className="my-3">
                    <p className="text-[#EC5E5E] font-[600]">
                      Forgot Password?
                    </p>
                  </div>
                </Link>
              </div>

              <div className="flex justify-center text-[#FFFFFF]">
                <button
                  disabled={submitting}
                  className="h-[48px]  bg-[#006F6A] w-full rounded-[10px] mt-5"
                >
                  {submitting ? (
                    <ClipLoader size={20} color="#ffffff" />
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-[#000000]">Or</span>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2.5 px-4 border rounded-md shadow-sm bg-white text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex gap-2 cursor-pointer items-center">
                      <div className="w-4 h-4 rounded-sm flex items-center justify-center text-xs">
                        <FcGoogle size={20} />
                      </div>
                      <p className="text-[#1B1B1B]">Continue with Google</p>
                    </div>
                  </button>
                </div>

                <div className="mt-4">
                  <div className="flex gap-1 items-center justify-center text-center">
                    <p className="text-sm text-[#1B1B1B]">New User?</p>
                    <Link to="/register">
                      <button className="text-[#006F6A] hover:text-[#005a55] text-sm font-medium cursor-pointer transition-colors">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* section for background */}
        <section>
          <div className="h-full hidden lg:block rounded-[10px]">
            <img
              src={partySpray}
              alt="AuthWrapper"
              className="object-cover rounded-[10px] h-[100%] w-[100%]"
            />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Login;
