import React from "react";
import { Link } from "react-router-dom";
import successIcon from "../assets/SuccessIcon.png";

const ModalsInput = ({ hText, pText, btnText, goTo, img, click }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[516px] mx-auto bg-white py-[29px] px-[26px] rounded-lg shadow-lg">
        <div>
          <img src={img} alt="success" className="mx-auto" />
        </div>
        <div className="my-2 flex flex-col items-center gap-1.5">
          <h4 className=" text-[32px] text-[#000000] font-[500] text-center">
            {hText}
          </h4>
          <p className="font-[400] text-[16px] text-[#000000] text-center">
            {pText}
          </p>
        </div>

        <div className="max-w-[454px] my-2">
          <Link to={goTo}>
            <button
              onClick={click}
              className="w-full bg-[#006F6A] rounded-[8px] text-[#FFFFFF] text-center px-[12px] py-[10px]"
            >
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalsInput;
