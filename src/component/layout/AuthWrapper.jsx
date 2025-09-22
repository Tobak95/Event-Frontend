import React from "react";
import partySpray from "../../assets/partySpray.jpg"

const AuthWrapper = () => {
  return (
    <div className=" h-screen rounded-[10px]">
      <img
        src={partySpray}
        alt="AuthWrapper"
        className="object-cover rounded-[10px] h-[100%] w-[100%]"
      />
    </div>
  );
};

export default AuthWrapper;
