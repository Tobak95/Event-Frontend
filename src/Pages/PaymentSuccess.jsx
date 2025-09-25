import { FaCheck } from "react-icons/fa";

export default function OrderSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Success Icon with blue outer circle & custom green inner circle */}
      <div className="w-40 h-40 rounded-full bg-[#E5F4ED] flex items-center justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-[#23A26D] flex items-center justify-center">
          <FaCheck className="text-white text-4xl" />
        </div>
      </div>

      {/* Text */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Success!</h1>
      <p className="text-gray-700 text-center max-w-md">
        Your order was successful. We’ve also sent a copy to your email address{" "}
        <span className="text-[#006F6A] font-medium">johndoe@gmail.com</span>.
      </p>
      <p className="text-gray-600 text-center max-w-md mt-1">
        If you do not receive your ticket from us, please email us at{" "}
        <a href="mailto:support@Eventra" className="text-[#006F6A] underline">
          support@Eventra
        </a>
        .
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-[#006F6A] text-white px-6 py-2 rounded-lg shadow hover:bg-[#005754] transition">
          Download
        </button>
        <button className="border border-[#006F6A] text-[#006F6A] px-6 py-2 rounded-lg hover:bg-blue-50 transition">
          Buy again
        </button>
      </div>
    </div>
  );
}
