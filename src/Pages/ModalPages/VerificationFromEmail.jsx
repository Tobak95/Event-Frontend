import React, { useState, useEffect } from "react";
import ModalsInput from "../../component/ModalsInput";
import { axiosInstance } from "../../Utils/axiosInstance";
import { BounceLoader } from "react-spinners";
import successIcon from "../../assets/SuccessIcon.png";
import { useNavigate, useParams } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const VerificationFromEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("verifying");
  const [email, setEmail] = useState("");
  const [feedBack, setFeedBack] = useState("");

  const verifyToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`);
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      setStatus("error");
      // Try to get user email from localStorage if available
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        setEmail(storedEmail);
      }
      // Optionally show backend error message
      setFeedBack(error?.response?.data?.message || "");
    }
  };

  const handleResendEmail = async () => {
    try {
      const response = await axiosInstance.post("/auth/resend-email", {
        email,
      });
      if (response.status === 200) {
        setFeedBack("Verification email has been resent");
      }
    } catch (error) {
      setFeedBack(
        error?.response?.data?.message ||
          "Something went wrong, please try again."
      );
    }
  };

  useEffect(() => {
    // Get email from localStorage if available
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
    verifyToken();
    // eslint-disable-next-line
  }, [token]);

  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-[505px] py-[29px] shadow-lg text-center ">
          <BounceLoader className="mx-auto my-2" />
          <h4 className="text-xl lg:text-[30px] font-semibold">
            verifying.....
          </h4>
          <p className="text-black text-lg">Please Wait</p>
        </div>
      </div>
    );
  }
  if (status === "success") {
    return (
      <ModalsInput
        img={successIcon}
        hText="Email verification successful"
        pText="Your email has successfully been verified"
        btnText="Proceed to login"
        goTo="/login"
      />
    );
  }

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-[505px] py-[29px] shadow-lg text-center p-3">
        <div className="flex justify-center py-4">
          <ImCancelCircle size={50} color="#006F6A" />
        </div>
        <span className="block mb-2">{feedBack}</span>
        <h1 className="text-[20px] font-semibold py-2">
          Invalid or expired token
        </h1>
        <p>Resend verification email</p>
        <button
          onClick={handleResendEmail}
          className="w-full bg-[#006F6A]  rounded-[8px] text-[#FFFFFF] text-center px-[12px] py-[10px] mt-3"
          disabled={!email}
        >
          Resend verification email
        </button>
      </div>
    </div>
  );
};

export default VerificationFromEmail;
