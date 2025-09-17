import { useState } from "react";
import { Eye, EyeOff, X, CheckCircle } from "lucide-react";
import signup from "../../assets/SignUp.jpg";
import google from "../../assets/google.png";
import Brandlogo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setShowSuccessModal(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign-up clicked");
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const handleSignIn = () => {
    setShowSuccessModal(false);
    navigate("/login");
  };

  const SuccessModal = () => {
    if (!showSuccessModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Content */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Account Created Successfully!
            </h3>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-1">
                Thank you for registering with Eventra.
              </p>
              <p className="text-sm text-gray-600">
                Please check your email at{" "}
                <span className="font-medium text-[#006F6A]">
                  {formData.email}
                </span>{" "}
                to verify your account.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleSignIn}
                className="w-full px-4 py-3 bg-[#006F6A] text-white rounded-lg font-medium hover:bg-[#005a55] transition-colors"
              >
                Continue to Sign In
              </button>

              <button
                onClick={handleCloseModal}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Didn't receive the email?{" "}
              <button className="text-[#006F6A] hover:underline">Resend</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col lg:flex-row">
      {/* Modal */}
      <SuccessModal />

      {/* Form  */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center py-6 px-4 sm:px-6 lg:px-16 mt-10 lg:mt-0">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-6">
            <a href="/">
              <div className="flex items-center gap-2">
                <img
                  className="h-7 w-auto"
                  src={Brandlogo}
                  alt="Eventra Logo "
                />
              </div>
            </a>
          </div>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your account to explore events, grab tickets, and never miss
            out on the moments that matter.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-4">
              <div>
                <label className="block text-sm font-medium text-[#1B1B1B]">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`py-2 px-3 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter Name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName}
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
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`py-2 px-3 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter Name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName}
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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`py-2 px-3 text-sm block w-full border-2 rounded-md focus:ring-green-500 focus:border-green-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your Email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1B1B1B]">
                Create Password*
              </label>
              <div className="mt-1 relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
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
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1B1B1B]">
                Confirm Password*
              </label>
              <div className="mt-1 relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start pt-1">
              <input
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className={`h-4 w-4 mt-0.5 cursor-pointer rounded text-green-600 focus:ring-green-500 accent-green-600 ${
                  errors.agreeToTerms ? "border-red-500" : "border-gray-300"
                }`}
              />
              <p className="ml-2 text-xs leading-4">
                I agree to{" "}
                <span className="text-[#2B8783]">Terms of Service</span> and{" "}
                <span className="text-[#2B8783]">Privacy Policies</span>
              </p>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center cursor-pointer py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#006F6A] disabled:cursor-not-allowed hover:bg-[#005a55] transition-colors"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
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
                onClick={handleGoogleSignUp}
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

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center justify-center w-full h-full">
          <img
            src={signup}
            alt="Sign up"
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
