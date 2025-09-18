import React from "react";
import { RiseLoader } from "react-spinners";

const SuspenseLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <RiseLoader size={30} color="#006F6A" />
    </div>
  );
};

export default SuspenseLoader;
