import { useState } from "react";
import { Eye, EyeOff, X, CheckCircle } from "lucide-react";
import signup from "../../assets/SignUp.jpg";
import google from "../../assets/google.png";
import Brandlogo from "../../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Utils/axiosInstance";
import { signUpSchema } from "../../Utils/formValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");
  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleRegister = async (data) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/auth/register", { ...data });
      if (response.status === 201) {
        localStorage.setItem("email", email);
        console.log(response.data);
        toast.success("Registration Successful, Kindly check your email for verification")
        redirect("/verify");
      }
    } catch (error) {
      setErrorMsg(error?.response?.data?.message);
      toast.error("Registration failed, Please try again")
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className=" ">
      {/* Modal */}
      {/* <SuccessModal /> */}
      <article className="grid p-3 lg:p-0 lg:grid-cols-2 lg:h-screen ">
        {/* Form  */}
        <section className=" flex justify-center items-center ">
          <div className="lg:p-10 w-fit lg:w-[527px] rounded-lg bg-white">
            <Link to={"/"}>
              <div className="flex gap-3 items-center mb-10">
                <img src={Brandlogo} alt="" />
              </div>
            </Link>
            <div className="lg:w-[455px]">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                Create an Account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Create your account to explore events, grab tickets, and never
                miss out on the moments that matter.
              </p>

              <form
                onSubmit={handleSubmit(handleRegister)}
                className="mt-6 space-y-4"
              >
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1B1B1B]">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firstname"
                        type="text"
                        {...register("firstname")}
                        className={`py-2 px-3 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                          errors.firstname
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter Name"
                      />
                      {errors.firstname && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstname.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1B1B1B]">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastname"
                        type="text"
                        {...register("lastname")}
                        className={`py-2 px-3 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                          errors.lastname ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter Name"
                      />
                      {errors.lastname && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastname.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1B1B1B]">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`py-2 px-3 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your Email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1B1B1B]">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      id="phoneNumber"
                      type="text"
                      {...register("phoneNumber")}
                      className={`py-2 px-3 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1B1B1B]">
                    Create Password*
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      className={`py-2 px-3 pr-10 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
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
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1B1B1B]">
                    Confirm Password*
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword")}
                      className={`py-2 px-3 pr-10 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Confirm your password"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center  pt-1">
                  <input
                    id="agreeToTerms"
                    type="checkbox"
                    className="h-4 w-4 mt-0.5 cursor-pointer rounded"
                  />
                  <p className="ml-2 text-xs leading-4">
                    I agree to{" "}
                    <span className="text-[#2B8783]">Terms of Service</span> and{" "}
                    <span className="text-[#2B8783]">Privacy Policies</span>
                  </p>
                </div>
                {/* {errors.agreeToTerms && (
              <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
            )} */}
                {errorMsg && (
                  <div className="w-full rounded-xl py-2 my-2.5 px-4 bg-[#ff37370d] border-[#ff3737] text-[#ff3737] flex items-center gap-3">
                    <PiWarningCircle size={22} />
                    <p>{errorMsg}</p>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center cursor-pointer py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#006F6A] disabled:cursor-not-allowed hover:bg-[#005a55] transition-colors"
                  >
                    {isLoading ? (
                      <ClipLoader size={20} color="#FFFFFF" />
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </div>
              </form>

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
                        <img src={google} alt="Google" />
                      </div>
                      <p className="text-[#1B1B1B]">Continue with Google</p>
                    </div>
                  </button>
                </div>

                <div className="mt-4">
                  <div className="flex gap-1 items-center justify-center text-center">
                    <p className="text-sm text-[#1B1B1B]">
                      Already have an account?
                    </p>
                    <Link to="/Login">
                      <button className="text-[#006F6A] hover:text-[#005a55] text-sm font-medium cursor-pointer transition-colors">
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section>
          <div className="h-full hidden lg:block rounded-[10px]">
            <img
              src={signup}
              alt="AuthWrapper"
              className="object-cover rounded-[10px] h-[100%] w-[100%]"
            />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Register;
