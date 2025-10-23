// src/pages/admin/create-events/ProgressSteps.jsx
import React from "react";

export default function ProgressSteps({ currentStep }) {
  const steps = [
    { number: 1, label: "Create New Event" },
    { number: 2, label: "Create Ticket" },
    { number: 3, label: "Summary" },
  ];

  return (
    <div className="space-y-[15px]">
      {/* Progress Bar */}
      <div className="relative h-[22px] flex items-center">
        <div className="absolute w-full flex items-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex-1 h-[1px]"
              style={{
                backgroundColor:
                  step.number < currentStep ? "#006F6A" : "#8E8E8E",
                marginLeft: i === 0 ? 0 : "5px",
                marginRight: i === steps.length - 1 ? 0 : "5px",
              }}
            />
          ))}
        </div>

        {/* Step Circles */}
        <div className="absolute w-full flex justify-between items-center px-[11px]">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`w-[22px] h-[22px] rounded-full border-2 border-[#006F6A] flex items-center justify-center z-10 ${
                step.number <= currentStep ? "bg-[#006F6A]" : "bg-white"
              }`}
            >
              {step.number < currentStep && (
                <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Labels */}
      <div className="flex justify-between">
        {steps.map((step) => (
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
