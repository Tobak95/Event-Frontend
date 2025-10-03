import React from "react";

const HowItWorks = () => {
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

  return (
    <main className="bg-white py-12 lg:mt-20">
      <article className="layout flex flex-col gap-12 px-4 md:px-8 lg:px-16">
        {/* Header section */}
        <section className="flex flex-col items-center text-center gap-2">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-snug">
            How It Works?
          </h2>
          <p className="font-normal text-base md:text-lg text-[#4A4A4A]">
            Discover, book, and enjoy with ease
          </p>
        </section>

        {/* How It Works Cards */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ItWorks.map((Work) => (
            <div
              key={Work._id}
              className="card bg-white rounded-xl border border-[#C6C6C6] shadow-md hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              {/* Step Number */}
              <div className="bg-[#006F6A] text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4">
                {Work._id}
              </div>

              {/* Title */}
              <h2 className="card-title font-medium text-lg md:text-xl mb-2">
                {Work.title}
              </h2>

              {/* Description */}
              <p className="text-[#4A4A4A] font-normal text-sm md:text-base leading-relaxed">
                {Work.context}
              </p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
};

export default HowItWorks;
