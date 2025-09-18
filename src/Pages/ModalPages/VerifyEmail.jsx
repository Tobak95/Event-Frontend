import React from "react";
import ModalsInput from "../../component/ModalsInput";
import successIcon from "../../assets/SuccessIcon.png";

const VerifyEmail = () => {
  return (
    <div>
        
      <ModalsInput
      img={successIcon}
        hText="Successful registration"
        pText="A vertification link has been sent to your email ,pls verify before proceeding to login"
        btnText="Go to email "
        goTo={"/"}
      />
    </div>
  );
};

export default VerifyEmail;
