import React from "react";
import dominate from "../assets/Dominate.jpg";
import manage1 from "../assets/Manage1.png";
import manage2 from "../assets/Manage2.png";

const Vision = () => {
  return (
    <div className="mt-10  layout  ">
      <div className=" flex flex-col justify-between  md:flex-row md:h-[400px] lg:h-[500px]  ">
        {/* Dominate */}
        <div className="lg:w-[599px] md:h-[100%] md:w-[45%]">
          {/* text */}
          <div className=" lg:w-[478px] text-center font-bold">
            <h1 className="text-[rgba(74,74,74,1)]  text-[24px] lg:text-4xl">
              Your Vision. Our expertise. Extraordinary events
            </h1>
            <h1 className="text-[rgba(237,186,55,1)] text-xl lg:text-4xl">
              Dominate the scene
            </h1>
          </div>
          {/* image */}

          <img
            className="rounded-xl w-full h-[216px] lg:h-[353px] object-cover mt-7"
            src={dominate}
            alt=""
          />
        </div>
        {/* Manage */}

        <div className="lg:w-[648px] flex flex-col ">
          {/* image */}
          <div className="flex flex-row lg:flex flex-col justify-between md:flex-row  md:h-[50%]">
            <img
              className="mt-2 w-[170px] h-[154px] lg:w-[303.99px] lg:h-[280px] object-cover rounded-lg"
              src={manage1}
              alt=""
            />

            <img
              className="mt-2 w-[170px] h-[154px] lg:w-[303.99px] lg:h-[280px] object-cover rounded-lg"
              src={manage2}
              alt=""
            />
          </div>

          {/* text */}
          <div className="   md:h-[50%] flex flex-col md:justify-center text-center gap-5">
            <h1 className="text-center py-3 font-bold text-[20px] lg:text-3xl mt-3">
              Managed more than 1000+ events that created lasting and still
              creating impressions
            </h1>
            <div className="flex lg:flex-row md:flex-row gap-4 md:justify-between lg:w-[80%] mx-auto">
              {/* first */}
              <div>
                <h1 className="text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl">
                  23K+
                </h1>
                <p className="text-[10px] lg:text-[12px]">Events hosted</p>
              </div>
              {/* second */}
              <div>
                <h1 className="text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl">
                  30K+
                </h1>
                <p className="text-[10px] lg:text-[12px]">
                  Satisfied customers
                </p>
              </div>
              {/* third */}
              <div>
                <h1 className="text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl">
                  12+
                </h1>
                <p className="text-[10px] lg:text-[12px]">Years of mastery</p>
              </div>
              {/* fourth */}
              <div>
                <h1 className="text-[rgba(0,78,74,1)] font-bold text-2xl lg:text-4xl">
                  65+
                </h1>
                <p className="text-[10px] lg:text-[12px]">Worldwide users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
