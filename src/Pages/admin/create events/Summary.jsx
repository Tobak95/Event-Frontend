import React, { useEffect, useState } from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import PublishSuccessModal from "./PublishSuccessModal";
import { useEventContext } from "./useEventContext";
import { useNavigate } from "react-router-dom";

export default function Summary({ onBack }) {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("publish");
  const { event, isSubmitting, createEvent } = useEventContext(); // ✅ Use context
  const redirect = useNavigate();

  // ✅ Handle image preview
  const [imagePreview, setImagePreview] = useState(null);
 useEffect(() => {
   let objectUrl = null;

   if (!event?.image) {
     setImagePreview(null);
     return;
   }

   if (typeof event.image === "string") {
     setImagePreview(event.image);
     return;
   }

   if (event.image instanceof File) {
     objectUrl = URL.createObjectURL(event.image);
     setImagePreview(objectUrl);
   }

   return () => {
     if (objectUrl) URL.revokeObjectURL(objectUrl);
   };
 }, [event?.image]);


  const tickets = event?.tickets || [];
  const combinedData = { ...event }; // Use event from context

  // ✅ Handle publish
  const handlePublish = async () => {
    try {
      setModalType("publish");
      const result = await createEvent(combinedData, false);
      if (result) setShowModal(true);
    } catch (err) {
      console.error("Publish failed:", err);
      toast.error("Failed to publish event");
    }
  };

  // ✅ Handle draft save
  const handleSaveDraft = async () => {
    try {
      setModalType("draft");
      const result = await createEvent(combinedData, true);
      if (result) setShowModal(true);
    } catch (err) {
      console.error("Draft failed:", err);
      toast.error("Failed to save draft");
    }
  };

  return (
    <>
      {/* ✅ Publish Success Modal */}
      <PublishSuccessModal
        isOpen={showModal}
        type={modalType}
        onClose={() => setShowModal(false)}
        onViewEvent={() => {
          setShowModal(false);
          toast.success(
            `Navigating to ${
              modalType === "draft" ? "draft events" : "published events"
            }...`
          );
          // redirect("/dashboard/events"); // optional
        }}
      />

      {/* ✅ Summary Layout */}
      <div className="flex-1 overflow-y-auto bg-white border-l border-[#8b8b8b]">
        <div className="p-[30px] max-w-[1107px] mx-auto">
          {/* Progress Steps */}
          <div className="mb-[50px]">
            <ProgressSteps currentStep={3} />
          </div>

          {/* Header */}
          <div className="flex flex-col items-center gap-[15px] mb-[50px] text-center">
            <h1 className="text-[48px] font-bold text-black leading-[67px]">
              Your Event is set to be published
            </h1>
            <p className="text-[24px] text-[#4a4a4a]">
              Great job! 🎉 Review your details and publish or save as a draft.
            </p>
          </div>

          {/* ✅ Ticket Summary Cards */}
          <div className="space-y-[35px] mb-[45px]">
            {tickets.length > 0 ? (
              tickets.map((ticket, i) => (
                <TicketCard
                  key={i}
                  type={ticket.name || ticket.type || `Ticket ${i + 1}`}
                  price={
                    ticket.type === "free"
                      ? "Free"
                      : `$${Number(ticket.price || 0).toFixed(2)}`
                  }
                  eventName={event.title || "Untitled Event"}
                  location={event.address || "No location"}
                  date={
                    event.startDate
                      ? `${event.startDate}${
                          event.endDate ? ` — ${event.endDate}` : ""
                        }`
                      : "Date not set"
                  }
                  image={imagePreview}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 text-[20px]">
                No tickets created yet.
              </p>
            )}
          </div>

          {/* ✅ Action Buttons */}
          <div className="flex justify-end gap-[10px]">
            <button
              onClick={handleSaveDraft}
              disabled={isSubmitting}
              className="border border-[#006f6a] text-[#006f6a] px-[16px] py-[16px] rounded-[8px] w-[234px] hover:bg-[#e6f1f0] transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Saving..." : "Publish as Draft"}
            </button>
            <button
              onClick={handlePublish}
              disabled={isSubmitting}
              className="bg-[#006f6a] text-white px-[16px] py-[16px] rounded-[8px] w-[234px] hover:bg-[#005a56] transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Publishing..." : "Publish Event"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ✅ Ticket Card Component */
function TicketCard({ type, price, eventName, location, date, image }) {
  return (
    <div className="border border-[#4a4a4a] rounded-[10px] p-[30px] flex gap-[30px] items-center">
      <div className="w-[362px] h-[279px] rounded-[10px] overflow-hidden flex-shrink-0 bg-gray-200">
        {image ? (
          <img src={image} alt="Event" className="w-full h-full object-cover" />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1700087209989-5a83d1a7c484?crop=entropy&fit=max&q=80&w=1080"
            alt="Event"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex-1 flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[5px]">
          <div className="flex items-end gap-[15px]">
            <div className="rotate-[-30deg]">
              <FaTicketAlt size={35} className="text-[#006F6A]" />
            </div>
            <p className="text-[32px] font-bold text-[#1b1b1b]">{price}</p>
          </div>
          <h3 className="text-[36px] font-bold text-[#1b1b1b]">{type}</h3>
        </div>

        <h4 className="text-[36px] font-bold text-[#1b1b1b]">{eventName}</h4>

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

/* ✅ Progress Steps Component */
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
            <div className="w-full h-[1px] bg-[#006F6A]" />
          </div>
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#006F6A]" />
          </div>
        </div>

        <div className="absolute w-full flex justify-between items-center px-[11px]">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-[22px] h-[22px] rounded-full border-2 border-[#006F6A] flex items-center justify-center z-10 ${
                num <= currentStep ? "bg-[#006F6A]" : "bg-white"
              }`}
            >
              {num < currentStep && (
                <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]" />
              )}
            </div>
          ))}
        </div>
      </div>

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
