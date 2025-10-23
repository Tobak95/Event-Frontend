import React, { useState } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import CreateTicket from "./CreateTicket";
import Layout from "./Layout";
import Summary from "./Summary";
import { MdCloudUpload } from "react-icons/md";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useEventContext } from "./useEventContext"; // make sure your context is imported

// ✅ Yup validation for Step 1
const eventValidation = Yup.object().shape({
  title: Yup.string().required("Event title is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  capacity: Yup.number()
    .required("Capacity is required")
    .positive("Must be positive")
    .integer("Must be a number"),
  perks: Yup.string(),
  startDate: Yup.string().required("Start date required"),
  endDate: Yup.string().required("End date required"),
  startTime: Yup.string().required("Start time required"),
  endTime: Yup.string().required("End time required"),
  address: Yup.string().required("Address required"),
  image: Yup.mixed().required("Event image is required"),
});

const CreateEvents = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { event, setEvent } = useEventContext();
  const [errors, setErrors] = useState({});

  // ✅ Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fakeUrl = URL.createObjectURL(file);
      setEvent({ ...event, image: fakeUrl });
    }
  };

  // ✅ Step validation before continuing
  const handleContinue = async () => {
    try {
      await eventValidation.validate(event, { abortEarly: false });
      setErrors({});
      setCurrentStep(2);
    } catch (validationErr) {
      const newErrors = {};
      validationErr.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      toast.error("Please correct all highlighted fields before continuing.");
    }
  };

  // ✅ Step 2
  if (currentStep === 2) {
    return (
      <Layout
        Children={
          <CreateTicket
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
          />
        }
      />
    );
  }

  // ✅ Step 3
  if (currentStep === 3) {
    return <Layout Children={<Summary onBack={() => setCurrentStep(2)} />} />;
  }

  // ✅ Step 1 UI
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
                  {/* Image Upload + Event Details */}
                  <div className="flex gap-[30px]">
                    {/* Image Upload */}
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
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                      {errors.image && (
                        <p className="text-red-500 mt-2">{errors.image}</p>
                      )}
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
                          value={event.title || ""}
                          onChange={(e) =>
                            setEvent({ ...event, title: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                        />
                        {errors.title && (
                          <p className="text-red-500">{errors.title}</p>
                        )}
                      </div>

                      <div className="space-y-[7px]">
                        <label className="text-[#1b1b1b]">Description</label>
                        <textarea
                          placeholder="Describe your event..."
                          rows={5}
                          value={event.description || ""}
                          onChange={(e) =>
                            setEvent({ ...event, description: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none resize-none"
                        />
                        {errors.description && (
                          <p className="text-red-500">{errors.description}</p>
                        )}
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
                    </div>

                    <div className="flex gap-[22px]">
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Category</label>
                        <select
                          value={event.category || ""}
                          onChange={(e) =>
                            setEvent({ ...event, category: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                        >
                          <option value="">Select category</option>
                          <option value="business">Business</option>
                          <option value="sports">Sports</option>
                          <option value="festival">Festival</option>
                          <option value="drinks">Drinks</option>
                        </select>
                        {errors.category && (
                          <p className="text-red-500">{errors.category}</p>
                        )}
                      </div>

                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Capacity</label>
                        <input
                          type="number"
                          placeholder="Max attendees"
                          value={event.capacity || ""}
                          onChange={(e) =>
                            setEvent({ ...event, capacity: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                        />
                        {errors.capacity && (
                          <p className="text-red-500">{errors.capacity}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-[22px] space-y-[7px]">
                      <label className="text-[#1b1b1b]">Perks</label>
                      <input
                        type="text"
                        placeholder="Free drinks, VIP access, souvenir..."
                        value={event.perks || ""}
                        onChange={(e) =>
                          setEvent({ ...event, perks: e.target.value })
                        }
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                      />
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

                    <div className="flex gap-[22px] mb-[22px]">
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Start Date</label>
                        <input
                          type="date"
                          value={event.startDate || ""}
                          onChange={(e) =>
                            setEvent({ ...event, startDate: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                        {errors.startDate && (
                          <p className="text-red-500">{errors.startDate}</p>
                        )}
                      </div>

                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">End Date</label>
                        <input
                          type="date"
                          value={event.endDate || ""}
                          onChange={(e) =>
                            setEvent({ ...event, endDate: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                        {errors.endDate && (
                          <p className="text-red-500">{errors.endDate}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-[22px]">
                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">Start Time</label>
                        <input
                          type="time"
                          value={event.startTime || ""}
                          onChange={(e) =>
                            setEvent({ ...event, startTime: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                        {errors.startTime && (
                          <p className="text-red-500">{errors.startTime}</p>
                        )}
                      </div>

                      <div className="flex-1 space-y-[7px]">
                        <label className="text-[#1b1b1b]">End Time</label>
                        <input
                          type="time"
                          value={event.endTime || ""}
                          onChange={(e) =>
                            setEvent({ ...event, endTime: e.target.value })
                          }
                          className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
                        />
                        {errors.endTime && (
                          <p className="text-red-500">{errors.endTime}</p>
                        )}
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
                        value={event.address || ""}
                        onChange={(e) =>
                          setEvent({ ...event, address: e.target.value })
                        }
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none"
                      />
                      {errors.address && (
                        <p className="text-red-500">{errors.address}</p>
                      )}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-[20px]">
                    <button className="border border-[#4a4a4a] text-[#161616] px-[16px] py-[16px] rounded-[8px] w-[300px] hover:bg-gray-50 transition-colors">
                      Cancel
                    </button>
                    <button
                      onClick={handleContinue}
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

// ✅ ProgressSteps component (unchanged)
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
