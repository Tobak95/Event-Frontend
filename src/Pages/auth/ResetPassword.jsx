import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "../../Utils/formValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { token } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  });

  //Reset Password

  const handleResetPassword = async (data) => {
    setSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/reset-password", {
        token,
        password: data.password,
      });
      if (response.status === 200) {
        redirect("/login");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setSubmitting(false);
    }
  };

  // const onSubmit = (data) => {
  //   setSubmitting(true);
  //   setErrorMessage("");

  //   setSubmitting(false);
  // };

  return (
    <main className="">
      <article className="flex h-screen justify-center items-center ">
        {/* section for form  */}
        <section className=" ">
          <div className="lg:p-10   w-fit  shadow lg rounded-lg bg-white">
            <Link to={"/"}>
              <div className="flex gap-3 items-center mb-10">
                <img src={logo2} alt="" />
              </div>
            </Link>
            <div className=" lg:w-[455px] lg:mt-25">
              <h1 className="font-semibold text-[30px] lg:text-[28px]">
                Reset Password
              </h1>
              <p className="text-[20px] lg:text-[16px]">
                Enter your new password to reset password
              </p>
            </div>

            <form onSubmit={handleSubmit(handleResetPassword)} className="mt-5">
              <div className="flex flex-col my-5 lg:my-0">
                <label htmlFor="password" className="font-[600]">
                  {" "}
                  New Password
                </label>
                <input
                  id="password"
                  placeholder="Enter Password"
                  type="password"
                  className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
                  {...register("password")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.password?.message}
                </p>
              </div>

              <div className="flex flex-col  my-5 lg:my-0">
                <label htmlFor="confirmPassword" className="font-[600]">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
                  {...register("confirmPassword")}
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword?.message}
                </p>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-center mt-2">{errorMessage}</p>
              )}

              <div className="flex flex-col justify-center">
                <button
                  disabled={submitting}
                  className="h-[48px] bg-[#96C4C2] w-full rounded-[15px] text-[#FFFFFF] font-[500] text-[18px] my-5"
                >
                  {submitting ? (
                    <ClipLoader size={20} color="#ffffff" />
                  ) : (
                    "Reset Password"
                  )}
                </button>
                <Link to={"/login"}>
                  <div className="flex items-center justify-center">
                    <IoIosArrowRoundBack size={32} />
                    <button className="text-[#2B8783] text-[16px] ">
                      {" "}
                      Back to sign in
                    </button>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ResetPassword;
