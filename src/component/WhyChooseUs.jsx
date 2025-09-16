import React from "react";
import EventOptions from "../assets/image11.png";
import FastBooking from "../assets/image12.png";
import FreeAccess from "../assets/image13.png";
const WhyChooseUs = () => {
  const ChooseUs =[
   { _id: 1,
    image:EventOptions,
    title:"Endless Event Options",
    context:"From local gatherings to international festivals, explore a wide variety of events tailored to every interest."},
   { _id: 2,
    image:FastBooking,
    title:"Fast & Secure Booking",
    context:"Reserve your spot instantly with our safe, simple, and seamless checkout process designed for peace of mind."},
   { _id: 3,
    image:FreeAccess,
    title:"Hassle-Free Access",
    context:"Get your digital ticket delivered straight to your inbox the moment you book. Skip the stress of long lines, misplaced paper tickets."}
  ]
  return (
    <>
      <main className="bg-[#FFFFFF] ">
    <article className="layout flex flex-col gap-[47px]">
    {/* Header Section */}
    <section className=" items-center  gap-[1px] flex flex-col mt-10">
        <h2 className="font-[700] text-[48px] leading-[67px] tracking-[0%]  ">Why Choose Us?</h2>
        <p className="font-[400] text-[20px] leading-[100%] tracking-[0%] text-[#4A4A4A] ">The trusted platform for unforgettable experiences</p>
    </section>
    {/* Section for Why Choose Us Card */}
    <section className="grid gap-[50px] lg:grid-cols-3  lg:h-[259px] ">
        {/* First Card */}
        {ChooseUs.map((Choose) => (
          <div key={Choose._id} className="card bg-[#FFFFFF] rounded-[12px]   shadow-sm  shadow-[#B5B5B526]">
             <figure className="px-10 pt-10">
    <img
      src={Choose.image}
      title={Choose.title}
      alt={Choose.title}
      className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-[500] text-[24px] leading-[100%] tracking-[0%] ">{Choose.title}</h2>
    <p className=" text-[#4A4A4A] font-[400] text-[16px] leading-[100%] tracking-[0%] ">{Choose.context}</p>
  </div>
</div>
        ))};
        
    </section>
    </article>
      </main>
    </>
  )
}

export default WhyChooseUs