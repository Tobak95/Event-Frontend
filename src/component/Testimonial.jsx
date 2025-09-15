import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import testimonyImg from "../assets/Testimonial1.png";
import testimonyImg2 from "../assets/Testimonial2.png";
import testimonyImg3 from "../assets/Testimonial3.png";
import testimonialVector from "../assets/TestimonialVector2.png";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Annaka O.",
      rating: 5,
      image: testimonyImg,
      content:
        "Booking was quick and simple — I had my ticket in seconds. The event itself was amazing, and I’ll definitely be using this platform for all my future plans",
      location: "Abuja",
      vector: testimonialVector,
    },
    {
      id: 2,
      name: "Tory Lanez",
      rating: 5,
      image: testimonyImg2,
      content:
        "I never knew there were so many exciting events happening nearby until I started browsing here. Now I don’t miss out — everything is in one place.",
      location: "Lagos",
      vector: testimonialVector,
    },
    {
      id: 3,
      name: "Tiger Woods",
      rating: 5,
      image: testimonyImg3,
      content:
        "I attended a workshop I discovered through this site, and it was life-changing. From discovery to booking, the whole process was effortless.",
      location: "Ibadan",
      vector: testimonialVector,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      rating: 5,
      image: testimonyImg,
      content:
        "Eventra completely transformed how I discover concerts. Found my favorite band's show that I would have otherwise missed!",
      location: "Enugu",
      vector: testimonialVector,
    },
    {
      id: 5,
      name: "Michael Chen",
      rating: 5,
      image: testimonyImg2,
      content:
        "As an event organizer, Eventra has made promoting our events so much easier. The platform is intuitive and the audience reach is incredible.",
      location: "Jos",
      vector: testimonialVector,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 100);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsTransitioning(false), 100);
  };

  const getTestimonialPosition = (index) => {
    const position =
      (index - currentIndex + testimonials.length) % testimonials.length;

    if (position === 0) return "center";
    if (position === 1) return "right";
    if (position === testimonials.length - 1) return "left";

    return "hidden";
  };

  return (
    <div className="bg-white py-5">
      <div className="w-11/12 mx-auto container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#000000] mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Trusted by Event Lovers Everywhere
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-80 overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#E6F1F0] rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-[#006F6A]" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-[#006F6A]" />
          </button>

          {/* Cards */}
          <div className="flex items-end justify-center w-full h-full relative">
            {testimonials.map((testimonial, index) => {
              const position = getTestimonialPosition(index);

              if (position === "hidden") return null;

              return (
                <div
                  key={testimonial.id}
                  className={`absolute transition-all duration-500 ${
                    position === "left"
                      ? "md:-rotate-12 left-0 md:left-1/4 transform md:-translate-x-25 -translate-x-8 opacity-80 scale-60 -translate-y-4"
                      : position === "right"
                      ? "md:rotate-12 right-0 md:right-1/4 transform md:translate-x-25 translate-x-8 opacity-80 scale-60 -translate-y-4"
                      : "left-1/2 transform -translate-x-1/2 z-10 -translate-y-11 scale-60 shadow-lg"
                  }`}
                  style={{ width: "300px" }}
                >
                  <div
                    className="border border-gray-200 rounded-3xl p-6 h-full flex flex-col bg-[#F6F6F6]"
                    style={{ minHeight: "340px" }}
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>

                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < testimonial.rating
                                  ? "text-[#2B8783] fill-[#2B8783]"
                                  : ""
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>

                    <hr className="border-gray-200 mb-4" />

                    {/* Location */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className=" mr-1">
                          <MapPin />
                        </div>
                        <span className="text-sm text-gray-600">
                          {testimonial.location}
                        </span>
                      </div>
                      <div>
                        <img
                          src={testimonial.vector}
                          alt={testimonial.vector}
                          className="w-5 h-5 mr-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*Indicator */}
        <div className="flex justify-center mt-5 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-2 rounded-lg ${
                currentIndex === index ? "bg-[#006F6A]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
