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
import { BiArrowBack } from "react-icons/bi";
import { changePasswordSchema } from "../../Utils/formValidator";
import { Eye, EyeOff } from "lucide-react";
import { useAppContext } from "../../Hooks/useAppContext";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [IsSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { token, user } = useAppContext();

  const redirect = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const handleChangePassword = async (data) => {
    setIsSubmitting(true);
    try {
      const payload = {
        oldPassword: data.oldPass,
        newPassword: data.newPass,
      };

      const response = await axiosInstance.post(
        "/auth/change-password",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Password changed successfully!");
      console.log(response.data);
      if (user.role === "user") {
        redirect("/");
      } else {
        redirect("/dashboard/admin");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to change password");
      setErrorMessage(error?.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="layout">
      <div className="flex flex-col">
        <Link className="" to="/">
          <img src={logo2} alt="..." className="" />
        </Link>

        <article className="lg:min-h-screen flex items-center justify-center  ">
          <div className="">
            <div className="bg-white p-5 rounded-lg  w-full lg:max-w-[610px] h-[586px] ">
              <div className="lg:w-[442px]">
                <h1 className="text-[38px] font-[700]  mt-10 text-[#000000]">
                  Change Password
                </h1>
                <p className="text-[#4A4A4A] text-[16px] font-[400] ">
                  Update your password to keep your account secure
                </p>
              </div>

              <form
                onSubmit={handleSubmit(handleChangePassword)}
                className="mt-6"
              >
                <div className="relative">
                  <label
                    htmlFor="oldPass"
                    className="label mb-1.5 text-[#1B1B1B] font-[500]"
                  >
                    Old Password
                  </label>
                  <input
                    id="oldPass"
                    type={showPassword ? "text" : "password"}
                    {...register("oldPass")}
                    placeholder="Enter Password"
                    className="input w-full mb-3"
                  />
                  <div className="absolute inset-y-1 right-0 pr-5 mt-5 flex items-center">
                    <button
                      type="button"
                      className="text-black hover:text-gray-500 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {errors.oldPass && (
                  <p className="text-red-500 text-sm mt-1 ">
                    {errors.oldPass.message}
                  </p>
                )}

                <div className="relative">
                  <label
                    htmlFor="newPass"
                    className="label mb-1.5 text-[#1B1B1B] font-[500]"
                  >
                    New Password
                  </label>
                  <input
                    id="newPass"
                    type={showPassword ? "text" : "password"}
                    {...register("newPass")}
                    placeholder="Enter Password"
                    className="input w-full mb-3"
                  />
                  <div className="absolute inset-y-1 right-0 pr-5 mt-5 flex items-center">
                    <button
                      type="button"
                      className="text-black hover:text-gray-500 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {errors.newPass && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.newPass.message}
                  </p>
                )}
                <div className="relative">
                  <label
                    htmlFor="confirmPass"
                    className="label mb-1.5 text-[#1B1B1B] font-[500]"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPass"
                    {...register("confirmPass")}
                    placeholder="Enter Password"
                    className="input w-full"
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
                </div>
                {errors.confirmPass && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPass.message}
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
              <p className=" text-[16px] font-[400] mt-5 flex items-center justify-center gap-2">
                <BiArrowBack className="w-[30px] h-[28px]" />
                <Link to={"/"}>
                  <span className="text-[#2B8783] font-[400]">Back</span>
                </Link>
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ChangePassword;
