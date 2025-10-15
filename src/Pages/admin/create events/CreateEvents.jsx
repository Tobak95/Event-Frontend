import React, { useState } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import CreateTicket from "./CreateTicket";
import { MdCloudUpload, MdKeyboardArrowDown } from "react-icons/md";
import Layout from "./Layout";
import Summary from "./Summary";

const CreateEvents = () => {
  const [currentStep, setCurrentStep] = useState(1);
  if (currentStep === 2) {
    return (
      <Layout
        Children={
          <CreateTicket
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
          />
        }
      ></Layout>
    );
  }

  if (currentStep === 3) {
    return (
      <Layout
        Children={<Summary/>}
      ></Layout>
    );
  }
  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />

      <div className="flex overflow-hidden flex-col flex-1">
        <Header />

        <div className="overflow-y-auto flex-1">
          {/* workings here */}
          <section className="p-7">
            <div className="min-h-screen bg-[#fefefe] p-[30px]">
              <div className="max-w-[1107px] mx-auto">
                {/* Progress Steps */}
                <div className="mb-[50px]">
                  <ProgressSteps currentStep={1} />
                </div>

                {/* Form Content */}
                <div className="space-y-[50px]">
                  {/* Event Image & Details Row */}
                  <div className="flex gap-[30px]">
                    {/* Event Image Upload */}
                    <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px] w-[560px]">
                      <div className="mb-[22px]">
                        <h2 className="text-[#1b1b1b] mb-[5px]">Event Image</h2>
                        <p className="text-[#777777]">
                          Upload a cover image for the event
                        </p>
                      </div>

                      <div className="border-2 border-dashed border-[#6baba9] rounded-[10px] h-[351px] flex flex-col items-center justify-center gap-[10px]">
                        <MdCloudUpload size={80} className="text-[#777777]" />
                        <div className="text-center">
                          <p className="text-[#777777]">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-[#777777]">PNG, JPG up to 10MB</p>
                        </div>
                        <label className="border border-[#006f6a] text-[#006f6a] px-[12px] py-[10px] rounded-[8px] mt-[5px] hover:bg-[#006f6a] hover:text-white transition-colors cursor-pointer inline-block">
                          Choose File
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => console.log(e.target.files[0])}
                          />
                        </label>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 space-y-[22px]">
                      <div>
                        <h2 className="text-[#1b1b1b] mb-[5px]">
                          Event Details
                        </h2>
                        <p className="text-[#777777]">
                          Basic information about the event
                        </p>
                      </div>

                      {/* Event Title */}
                      <div className="space-y-[7px]">
                        <label className="text-[#1b1b1b]">Event Title</label>
                        <input
                          type="text"
                          placeholder="Enter event titile"
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                        />
                      </div>

                      {/* Description */}
                      <div className="space-y-[7px]">
                        <label className="text-[#1b1b1b]">Desciption</label>
                        <textarea
                          placeholder="Describe your event..."
                          rows={5}
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Section */}
                  <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                    <div className="mb-[22px]">
                      <h2 className="text-[#1b1b1b] mb-[5px]">
                        Key Highlights
                      </h2>
                      <p className="text-[#777777]">
                        Moments you won't forget.
                      </p>
                    </div>

                    <div className="flex gap-[22px]">
                      {/* Category */}
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Category</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Select category"
                            className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                          />
                          <MdKeyboardArrowDown
                            size={24}
                            className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#777777]"
                          />
                        </div>
                      </div>

                      {/* Capacity */}
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Capacity</label>
                        <input
                          type="text"
                          placeholder="Max attendees"
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                        />
                      </div>
                    </div>

                    {/* Highlights Input */}
                    <div className="mt-[22px] space-y-[7px]">
                      <input
                        type="text"
                        placeholder="Enter perks of the night..."
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                      />
                    </div>
                  </div>

                  {/* Date & Time Section */}
                  <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                    <div className="mb-[22px]">
                      <h2 className="text-[#1b1b1b] mb-[5px]">Date & Time</h2>
                      <p className="text-[#777777]">
                        When will the event take place?
                      </p>
                    </div>

                    <div className="flex gap-[22px]">
                      {/* Start Date */}
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Start Date</label>
                        <input
                          type="text"
                          placeholder="mm/dd/yy"
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                      </div>

                      {/* End Date */}
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">End Date</label>
                        <input
                          type="text"
                          placeholder="mm/dd/yy"
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                    <div className="mb-[22px]">
                      <h2 className="text-[#1b1b1b] mb-[5px]">Location</h2>
                      <p className="text-[#777777]">
                        Where will the event be held?
                      </p>
                    </div>

                    <div className="space-y-[7px]">
                      <label className="text-[#1b1b1b]">Address</label>
                      <input
                        type="text"
                        placeholder="Enter full address"
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-[20px]">
                    <button className="border border-[#4a4a4a] text-[#161616] px-[16px] py-[16px] rounded-[8px] w-[300px] hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="bg-[#006f6a] text-white px-[16px] py-[16px] rounded-[8px] w-[310px] hover:bg-[#005a56] transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
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
          <div className="w-[22px] h-[22px] rounded-full bg-white border-2 border-[#006F6A] z-10"></div>

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
export default CreateEvents;
