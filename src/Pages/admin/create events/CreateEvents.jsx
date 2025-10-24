import React, { useState } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import CreateTicket from "./CreateTicket";
import { MdCloudUpload, MdKeyboardArrowDown } from "react-icons/md";
import Layout from "./Layout";
import Summary from "./Summary";

const CreateEvents = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    capacity: "",
    perks: "",
    startDate: "",
    endDate: "",
    address: "",
    image: "",
    startTime: "",
    endTime: "",
  });

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // ✅ Step 2: Switch between steps
  if (currentStep === 2) {
    return (
      <Layout
        Children={
          <CreateTicket
            formData={formData}
            setFormData={setFormData}
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
          />
        }
      />
    );
  }

  if (currentStep === 3) {
    return (
      <Layout
        Children={
          <Summary
            formData={formData}
            setFormData={setFormData}
            onBack={() => setCurrentStep(2)}
          />
        }
      />
    );
  }

  // ✅ Step 3: Step 1 UI (Event creation form)
  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />
      <div className="flex overflow-hidden flex-col flex-1">
        <Header />
        <div className="overflow-y-auto flex-1">
          <section className="p-7">
            <div className="min-h-screen bg-[#fefefe] p-[30px]">
              <div className="max-w-[1107px] mx-auto">
                <div className="mb-[50px]">
                  <ProgressSteps currentStep={1} />
                </div>

                <div className="space-y-[50px]">
                  {/* Image Upload */}
                  <div className="flex gap-[30px]">
                    <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px] w-[560px]">
                      <div className="mb-[22px]">
                        <h2 className="text-[#1b1b1b] mb-[5px]">Event Image</h2>
                        <p className="text-[#777777]">
                          Upload a cover image for the event
                        </p>
                      </div>

                      <div className="border-2 border-dashed border-[#6baba9] rounded-[10px] h-[351px] flex flex-col items-center justify-center gap-[10px] relative overflow-hidden">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover rounded-[10px]"
                          />
                        ) : (
                          <>
                            <MdCloudUpload
                              size={80}
                              className="text-[#777777]"
                            />
                            <div className="text-center">
                              <p className="text-[#777777]">
                                Click to upload or drag and drop
                              </p>
                              <p className="text-[#777777]">
                                PNG, JPG up to 10MB
                              </p>
                            </div>
                          </>
                        )}

                        <label className="border border-[#006f6a] text-[#006f6a] px-[12px] py-[10px] rounded-[8px] mt-[5px] hover:bg-[#006f6a] hover:text-white transition-colors cursor-pointer inline-block absolute bottom-4 bg-white/80 backdrop-blur-sm">
                          Choose File
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
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

                      <div className="space-y-[7px]">
                        <label className="text-[#1b1b1b]">Event Title</label>
                        <input
                          type="text"
                          placeholder="Enter event title"
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                        />
                      </div>

                      <div className="space-y-[7px]">
                        <label className="text-[#1b1b1b]">Description</label>
                        <textarea
                          placeholder="Describe your event..."
                          rows={5}
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                    <div className="mb-[22px]">
                      <h2 className="text-[#1b1b1b] mb-[5px]">
                        Key Highlights
                      </h2>
                      <p className="text-[#777777]">
                        Moments you won't forget.
                      </p>
                      <input
                        type="text"
                        className="w-full h-[55px] rounded-[10px] p-[10px] bg-neutral-100 outline-none"
                        placeholder="Enter perks of the night"
                        value={formData.perks}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            perks: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex gap-[22px]">
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Category</label>

                        <select
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none appearance-none"
                          placeholder="Select category"
                          value={formData.category}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              category: e.target.value,
                            })
                          }
                        >
                          <option value="business">Business</option>
                          <option value="sports">Sports</option>
                          <option value="festivals">Festivals</option>
                          <option value="food-&-drinks">Food-&-Drinks</option>
                          <option value="dating">Dating</option>
                          <option value="hobbies">Hobbies</option>
                        </select>
                      </div>

                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Capacity</label>
                        <input
                          type="number"
                          placeholder="Max attendees"
                          value={formData.capacity}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              capacity: e.target.value,
                            })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                    <div className="mb-[22px]">
                      <h2 className="text-[#1b1b1b] mb-[5px]">Date & Time</h2>
                      <p className="text-[#777777]">
                        When will the event take place?
                      </p>
                    </div>

                    <div className="flex gap-[22px]">
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Start Date</label>
                        <input
                          type="date"
                          value={formData.startDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              startDate: e.target.value,
                            })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                      </div>

                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">End Date</label>
                        <input
                          type="date"
                          value={formData.endDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              endDate: e.target.value,
                            })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex gap-[22px] my-5">
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Start Time</label>
                        <input
                          type="time"
                          value={formData.startTime}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              startTime: e.target.value,
                            })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                      </div>

                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">End Time</label>
                        <input
                          type="time"
                          value={formData.endTime}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              endTime: e.target.value,
                            })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
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
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: e.target.value,
                          })
                        }
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
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
      <div className="relative h-[22px] flex items-center">
        <div className="absolute w-full flex items-center">
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#006F6A]"></div>
          </div>
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#8E8E8E]"></div>
          </div>
        </div>

        <div className="absolute w-full flex justify-between items-center px-[11px]">
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10">
            <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]"></div>
          </div>
          <div className="w-[22px] h-[22px] rounded-full bg-white border-2 border-[#006F6A] z-10"></div>
          <div className="w-[22px] h-[22px] rounded-full bg-white border-2 border-[#2B8783] z-10"></div>
        </div>
      </div>

      <div className="flex justify-between">
        {steps.map((step) => (
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
