import React from "react";
import { MdKeyboardArrowDown, MdAdd } from "react-icons/md";

export default function CreateTicket({ onBack, onContinue }) {
  return (
    <div className="min-h-screen bg-white p-[30px]">
      <div className="max-w-[1107px] mx-auto">
        {/* Progress Steps */}
        <div className="mb-[50px]">
          <ProgressSteps currentStep={2} />
        </div>

        {/* Form Content */}
        <div className="space-y-[45px]">
          {/* Ticket Form */}
          <div className="bg-white rounded-[10px] border border-[#777777] shadow-[0px_20px_46px_0px_rgba(0,0,0,0.08)] p-[30px]">
            <div className="space-y-[35px]">
              {/* Form Fields */}
              <div className="space-y-[25px]">
                {/* Ticket Name & Type Row */}
                <div className="flex gap-[21px]">
                  {/* Ticket Name */}
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Ticket Name </label>
                    <input
                      type="text"
                      placeholder="Enter event name"
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                  </div>

                  {/* Ticket Type */}
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Ticket type</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Paid"
                        className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                      />
                      <MdKeyboardArrowDown
                        size={24}
                        className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#777777]"
                      />
                    </div>
                  </div>
                </div>

                {/* Ticket Availability */}
                <div className="space-y-[12px]">
                  <label className="text-black">Ticket availability</label>
                  <div className="flex gap-[21px]">
                    <input
                      type="text"
                      placeholder="Enter start date"
                      className="flex-1 bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                    <input
                      type="text"
                      placeholder="Enter end date"
                      className="flex-1 bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                  </div>
                </div>

                {/* Price & Quantity Row */}
                <div className="flex gap-[21px]">
                  {/* Price */}
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Price</label>
                    <input
                      type="text"
                      placeholder="$"
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-black outline-none border border-[#dbdbdb]"
                    />
                  </div>

                  {/* Quantity Available */}
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Quantity available</label>
                    <input
                      type="text"
                      placeholder="Enter quantity"
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                  </div>
                </div>

                {/* Max Tickets Per Order */}
                <div className="w-1/2 pr-[10.5px] space-y-[12px]">
                  <label className="text-black">Max tickets per order</label>
                  <input
                    type="text"
                    placeholder="Enter quantity"
                    className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                  />
                </div>
              </div>

              {/* Create New Ticket Button */}
              <button className="flex items-center gap-[7px] text-[#006f6a] hover:opacity-80 transition-opacity">
                <MdAdd size={32} className="text-[#006f6a]" />
                <span>Create New Ticket</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-[20px]">
            <button
              onClick={onBack}
              className="border border-[#4a4a4a] text-[#161616] px-[16px] py-[16px] rounded-[8px] w-[300px] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onContinue}
              className="bg-[#006f6a] text-white px-[16px] py-[16px] rounded-[8px] w-[310px] hover:bg-[#005a56] transition-colors"
            >
              Continue
            </button>
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
          {/* Second segment - not completed */}
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#8E8E8E]"></div>
          </div>
        </div>

        {/* Circles */}
        <div className="absolute w-full flex justify-between items-center px-[11px]">
          {/* First Circle - Completed */}
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10">
            <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]"></div>
          </div>

          {/* Second Circle - Current */}
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] z-10"></div>

          {/* Third Circle - Not Started */}
          <div className="w-[22px] h-[22px] rounded-full bg-white border-2 border-[#2B8783] z-10"></div>
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
            <p className="text-[#161616]">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
