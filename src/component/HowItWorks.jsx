import React from "react";

const HowItWorks = () => {
  return (
    <>
      <main className="bg-[#FFFFFF] mt-10">
        <article className="layout flex flex-col gap-[47px]">
          {/* Header section */}
          <section className="flex flex-col items-center gap-[1px]  ">
            <h2 className="font-[700] text-[48px] leading-[67px] tracking-[0%]  ">
              How It Works?
            </h2>
            <p className="font-[400] text-[20px] leading-[100%] tracking-[0%] text-[#4A4A4A] ">
              Discover, book, and enjoy with ease
            </p>
          </section>
          {/* Section for How It Works cardS */}
          <section className="grid gap-[50px] lg:grid-cols-3 lg:w-[1240px] lg:h-[259px] ">
            <div className="card bg-[#FFFFFF] rounded-[12px]  border-[0.4px] border-[#C6C6C6] shadow-sm  shadow-[#B5B5B526]">
              <div className="card-body items-center text-center">
                <h2 className="bg-[#006F6A] text-white w-[41px] h-[41px] rounded-[80px] items-center text-center  flex justify-center">
                  1
                </h2>
                <h2 className="card-title font-[500] text-[24px] leading-[100%] tracking-[0%] ">
                  Discover Events
                </h2>
                <p className=" text-[#4A4A4A] font-[400] text-[16px] leading-[100%] tracking-[0%] ">
                  Explore concerts, festivals, and gatherings near you. Find the
                  experience that matches your vibe.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="card bg-[#FFFFFF] rounded-[12px]  border-[0.4px] border-[#C6C6C6] shadow-sm  shadow-[#B5B5B526]">
              <div className="card-body items-center text-center">
                <h2 className="bg-[#006F6A] text-white w-[41px] h-[41px] rounded-[80px] items-center text-center  flex justify-center">
                  2
                </h2>
                <h2 className="card-title font-[500] text-[24px] leading-[100%] tracking-[0%] ">
                  Book Instantly
                </h2>
                <p className=" text-[#4A4A4A] font-[400] text-[16px] leading-[100%] text-center tracking-[0%] ">
                  Reserve your spot in just a few clicks. Fast, secure, and
                  hassle-free every time.
                </p>
              </div>
            </div>
            {/* card 3  */}
            <div className="card bg-[#FFFFFF] rounded-[12px] border-[0.4px] border-[#C6C6C6] shadow-sm  shadow-[#B5B5B526]">
              <div className="card-body items-center text-center">
                <h2 className="bg-[#006F6A] text-white w-[41px] h-[41px] rounded-[80px] items-center text-center  flex justify-center">
                  3
                </h2>
                <h2 className="card-title font-[500] text-[24px] leading-[100%] tracking-[0%] ">
                  Get Your Pass
                </h2>
                <p className=" text-[#4A4A4A] font-[400] text-[16px] leading-[100%] tracking-[0%] ">
                  Your digital ticket arrives instantly after booking. Scan and
                  enjoy smooth entry to the event.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default HowItWorks;
