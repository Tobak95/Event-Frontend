import React from "react";
import EventOptions from "../assets/image11.png";
import FastBooking from "../assets/image12.png";
import FreeAccess from "../assets/image13.png";
const WhyChooseUs = () => {
  return (
    <>
      <main className="bg-[#FFFFFF]">
    <article className="layout flex flex-col gap-[47px]">
    {/* Header Section */}
    <section className="flex flex-col items-center  gap-[1px] flex flex-col ">
        <h2 className="font-[700] text-[48px] leading-[67px] tracking-[0%]  ">Why Choose Us?</h2>
        <p className="font-[400] text-[20px] leading-[100%] tracking-[0%] text-[#4A4A4A] ">The trusted platform for unforgettable experiences</p>
    </section>
    {/* Section for Why Choose Us Card */}
    <section className="grid gap-[50px] lg:grid-cols-3 lg:w-[1240px] lg:h-[259px] ">
        {/* First Card */}
        <div className="card bg-[#FFFFFF] rounded-[12px]   shadow-sm  shadow-[#B5B5B526]">
             <figure className="px-10 pt-10">
    <img
      src={EventOptions}
      title="Endless Event Options"
      alt="Endless Event Options"
      className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-[500] text-[24px] leading-[100%] tracking-[0%] ">Endless Event Options</h2>
    <p className=" text-[#4A4A4A] font-[400] text-[16px] leading-[100%] tracking-[0%] ">From local gatherings to international festivals, explore a wide variety of events tailored to every interest.</p>
  </div>
</div>
    {/* card 2 Fast & Secure Bookings */}
    <div className="card bg-[#FFFFFF] rounded-[12px]   shadow-sm  shadow-[#B5B5B526]">
             <figure className="px-10 pt-10">
    <img
      src={FastBooking}
      title="Fast & Secure Booking"
      alt="Fast & Secure Booking"
      className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-[500] text-[24px] leading-[100%] tracking-[0%] ">Fast & Secure Booking</h2>
    <p className=" text-[#4A4A4A] font-[400] text-[16px] leading-[100%] tracking-[0%] ">Reserve your spot instantly with our safe, simple, and seamless checkout process designed for peace of mind.</p>
  </div>
</div>
{/* Card 3 Hassle Free Access Card */}
<div className="card bg-[#FFFFFF] rounded-[12px]   shadow-sm  shadow-[#B5B5B526]">
             <figure className="px-10 pt-10">
    <img
      src={FreeAccess}
      title="Hassle-Free Access"
      alt="Hassle-Free Access"
      className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-[500] text-[24px] leading-[100%] tracking-[0%] ">Hassle-Free Access</h2>
    <p className=" text-[#4A4A4A] font-[400] text-[16px] leading-[100%] tracking-[0%] ">Get your digital ticket delivered straight to your inbox the moment you book. Skip the stress of long lines, misplaced paper tickets.</p>
  </div>
</div>
    </section>
    </article>
      </main>
    </>
  )
}

export default WhyChooseUs