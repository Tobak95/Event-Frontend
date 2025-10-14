import React from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";


export default function Summary({ onPublish }) {
  return (
    <div className="flex-1 overflow-y-auto bg-white border-l border-[#8b8b8b]">
      <div className="p-[30px] max-w-[1107px] mx-auto">
        {/* Progress Steps */}
        <div className="mb-[50px]">
          <ProgressSteps currentStep={3} />
        </div>

        {/* Header */}
        <div className="flex flex-col items-center gap-[15px] mb-[50px]">
          <h1 className="text-[48px] font-bold text-black leading-[67px] text-center">
            Your Event is set to be published
          </h1>
          <p className="text-[24px] text-[#4a4a4a] text-center">
            Great job! 🎉 Your event is all set and will go live for your
            audience soon.
          </p>
        </div>

        {/* Ticket Cards */}
        <div className="space-y-[35px] mb-[45px]">
          {/* Regular Ticket */}
          <TicketCard
            type="Regular"
            price="$100.00"
            eventName="Rhythm & Soul Tour: Eternal Vibes"
            location="Eko Atlantic City (Lagos, Nigeria)"
            date="Thursday, September 25th 2025"
          />

          {/* VIP Ticket */}
          <TicketCard
            type="VIP"
            price="$200.00"
            eventName="Rhythm & Soul Tour: Eternal Vibes"
            location="Eko Atlantic City (Lagos, Nigeria)"
            date="Thursday, September 25th 2025"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-[10px]">
          <button className="border border-[#006f6a] text-[#006f6a] px-[16px] py-[16px] rounded-[8px] w-[234px] hover:bg-[#e6f1f0] transition-colors">
            Publish as Draft
          </button>
          <button
            onClick={onPublish}
            className="bg-[#006f6a] text-white px-[16px] py-[16px] rounded-[8px] w-[234px] hover:bg-[#005a56] transition-colors"
          >
            Publish Event
          </button>
        </div>
      </div>
    </div>
  );
}

function TicketCard({ type, price, eventName, location, date }) {
  return (
    <div className="border border-[#4a4a4a] rounded-[10px] p-[30px] flex gap-[30px] items-center">
      {/* Event Image */}
      <div className="w-[362px] h-[279px] rounded-[10px] overflow-hidden flex-shrink-0 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1700087209989-5a83d1a7c484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjAzMDc0NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Event"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ticket Details */}
      <div className="flex-1 flex flex-col gap-[15px]">
        {/* Ticket Type and Price */}
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-end gap-[15px]">
            <div className="rotate-[-30deg]">
              <FaTicketAlt size={35} className="text-[#006F6A]" />
            </div>
            <p className="text-[32px] font-bold text-[#1b1b1b]">{price}</p>
          </div>
          <h3 className="text-[36px] font-bold text-[#1b1b1b]">{type}</h3>
        </div>

        {/* Event Name */}
        <h4 className="text-[36px] font-bold text-[#1b1b1b]">{eventName}</h4>

        {/* Location and Date */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[4px] text-[#686868]">
            <MdLocationOn size={28} />
            <span className="text-[24px]">{location}</span>
          </div>
          <div className="flex items-center gap-[4px] text-[#686868]">
            <MdCalendarToday size={28} />
            <span className="text-[24px]">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressSteps({ currentStep }) {
  const steps = [
    { number: 1, label: "Create New Event" },
    { number: 2, label: "Create Ticket" },
    { number: 3, label: "Summary" },
  ];

  return (
    <div className="space-y-[15px]">
      {/* Progress Line */}
      <div className="relative h-[22px] flex items-center">
        {/* Line Container */}
        <div className="absolute w-full flex items-center">
          {/* First segment - completed */}
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#006F6A]"></div>
          </div>
          {/* Second segment - completed */}
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#006F6A]"></div>
          </div>
        </div>

        {/* Circles */}
        <div className="absolute w-full flex justify-between items-center px-[11px]">
          {/* First Circle - Completed */}
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10">
            <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]"></div>
          </div>

          {/* Second Circle - Completed */}
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10">
            <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]"></div>
          </div>

          {/* Third Circle - Current */}
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] z-10"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="text-center"
            style={{ width: "33.33%" }}
          >
            <p className="text-[24px] text-[#161616]">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
