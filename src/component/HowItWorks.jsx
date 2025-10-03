import React from "react";

const ItWorks = [
  {
    _id: 1,
    title: "Discover Events",
    context:
      "Explore concerts, festivals, and gatherings near you. Find the experience that matches your vibe.",
  },
  {
    _id: 2,
    title: "Book Instantly",
    context:
      "Reserve your spot in just a few clicks. Fast, secure, and hassle-free every time.",
  },
  {
    _id: 3,
    title: "Get Your Pass",
    context:
      "Your digital ticket arrives instantly after booking. Scan and enjoy smooth entry to the event.",
  },
];

const HowItWorks = () => {

return (

<main className="bg-[#FFFFFF] lg:mt-20">
  <article className="layout flex flex-col gap-[47px] ">
    {/* Header section */}

    <div className="flex flex-col items-center gap-[1px]  ">
      <h2 className="font-[700] text-[25px] lg:text-[48px] leading-[67px] tracking-[0%]  ">
        How It Works?
      </h2>
      <p className="font-[400] text-[20px] leading-[100%] tracking-[0%] text-[#4A4A4A] ">
        Discover, book, and enjoy with ease
      </p>
    </div>

    {/* Section for How It Works cardS */}
    <section className="grid gap-[50px] lg:grid-cols-3  h-[350px] ">
      {ItWorks.map((Work) => {
        <div
          key={Work._id}
          className="card bg-[#FFFFFF] rounded-[12px]  border-[0.4px] border-[#C6C6C6] shadow-sm  shadow-[#B5B5B526]"
        >
          <div className="w-[349px] h-[138px] card-body flex mx-auto items-center text-center">
            <h2 className="bg-[#006F6A] text-white w-[41px] h-[41px] rounded-[80px] items-center text-center  flex justify-center">
              {Work._id}
            </h2>
            <h2 className="card-title font-[500] text-[24px] tracking-[0%] ">
              {Work.title}
            </h2>
            <p className=" text-[#4A4A4A] font-[400] text-[16px]  ">
              {Work.context}
            </p>
          </div>

          <h2 className="card-title font-medium text-lg md:text-xl mb-2">
            {Work.title}
          </h2>

          <p className="text-[#4A4A4A] font-normal text-sm md:text-base leading-relaxed">
            {Work.context}
          </p>
        </div>;
      })}
    </section>
  </article>
</main> 
)
}
export default HowItWorks;
