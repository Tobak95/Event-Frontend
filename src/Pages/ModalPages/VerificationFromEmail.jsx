import React from "react";
import ModalsInput from "../../component/ModalsInput";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../Utils/axiosInstance";
import { BounceLoader } from "react-spinners";
import successIcon from "../../assets/SuccessIcon.png";
import { useNavigate, useParams } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";

const VerificationFromEmail = () => {
  const { token } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState("verifying");
  const [email, setEmail] = useState("");
  const [feedBack, setFeedBack] = useState("");

  const handleResendEmail = () => {
    try {
      const response = axiosInstance.post("/auth/resend-email", email);
      if (response.status === 200) {
        setFeedBack("Email Sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyToken = async () => {
    try {
      const response = await axiosInstance.post(`/auth/verify-email/${token}`, {
        token,
      });
      if (response.status === 200) {
        setStatus("success");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
      setEmail(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

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
        btn="Proceed to login"
        goTo="/login"
      />
    );
  }

  return (
    <div>
      <ModalsInput
        img={<ImCancelCircle size={30} />}
        hText={`${feedBack}`}
        pText="Invalid or expired token"
        btn="Resend verification email"
        goTo=""
        click={handleResendEmail}
      />
    </div>
  );
};

export default VerificationFromEmail;
