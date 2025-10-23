import React, { useEffect, useMemo, useState } from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import { FaLessThan, FaTicketAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import PublishSuccessModal from "./PublishSuccessModal";
import { useEventContext } from "../../../Hooks/useEventContext";
import { Link, useNavigate } from "react-router-dom";

export default function Summary({
  formData = {},
  setFormData = () => {},
  onBack,
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("publish");
  console.log("🧾 Sending formData to backend:", formData);

  const { isSubmitting, createEvent } = useEventContext();
  const redirect = useNavigate();

  // create image preview (works with File or a string URL)
  const [imagePreview, setImagePreview] = useState(null);
  useEffect(() => {
    if (!formData?.image) {
      setImagePreview(null);
      return;
    }
    if (typeof formData.image === "string") {
      setImagePreview(formData.image);
      return;
    }
    const url = URL.createObjectURL(formData.image);
    setImagePreview(url);
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [formData?.image]);

  // For display: format tickets (safeguard defaults)
  const tickets = useMemo(() => formData.tickets || [], [formData.tickets]);

  // Publish
  const handlePublish = async () => {
    try {
      setModalType("publish");
      const result = await createEvent(formData, false);
      console.log(result);

      if (result) setShowModal(true);
    } catch (err) {
      console.error("Publish failed:", err);
      toast.error("Failed to publish event");
    }
  };

  // Save draft
  const handleSaveDraft = async () => {
    try {
      setModalType("draft");
      const result = await createEvent(formData, true);
      console.log(result);
      if (result) setShowModal(true);
    } catch (err) {
      console.error("Draft failed:", err);
      toast.error("Failed to save draft");
    }
  };

  return (
    <>
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
        }}
      />

      <div className="flex-1 overflow-y-auto bg-white border-l border-[#8b8b8b]">
        <button
          onClick={onBack}
          className="text-[#777777] text-[20px] font-[400] flex items-center gap-1 ml-3"
        >
          <FaLessThan size={20} /> Back
        </button>
        <div className="p-[30px] max-w-[1107px] mx-auto">
          <div className="mb-[50px]">
            <ProgressSteps currentStep={3} />
          </div>

          <div className="flex flex-col items-center gap-[15px] mb-[50px]">
            <h1 className="text-[48px] font-bold text-black leading-[67px] text-center">
              Your Event is ready
            </h1>
            <p className="text-[24px] text-[#4a4a4a] text-center">
              Review and publish or save as draft.
            </p>
          </div>

          {/* Event summary header */}
          <div className="mb-[30px] flex gap-6 items-center">
            <div className="w-[240px] h-[160px] rounded-[8px] overflow-hidden bg-gray-100 flex-shrink-0">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="event"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
            </div>

            <div>
              <h2 className="text-[28px] font-bold">
                {formData.title || "Untitled event"}
              </h2>
              <p className="text-[#686868]">
                {formData.description || "No description"}
              </p>

              <div className="mt-3 flex gap-4 text-[#686868] items-center">
                <div className="flex items-center gap-2">
                  <MdLocationOn size={20} />
                  <span>{formData.address || "No address"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdCalendarToday size={20} />
                  <span>
                    {formData.startDate ? formData.startDate : "N/A"}{" "}
                    {formData.endDate ? `— ${formData.endDate}` : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tickets list */}
          <div className="space-y-[35px] mb-[45px]">
            {tickets.length > 0 ? (
              tickets.map((ticket, i) => (
                <TicketCard
                  key={i}
                  type={ticket.name || ticket.type || `Ticket ${i + 1}`}
                  price={`$${Number(ticket.price || 0).toFixed(2)}`}
                  eventName={formData.title || "Event"}
                  location={formData.address || ""}
                  date={
                    formData.startDate
                      ? `${formData.startDate}${
                          formData.endDate ? ` — ${formData.endDate}` : ""
                        }`
                      : "Date not set"
                  }
                />
              ))
            ) : (
              <p className="text-center text-gray-500">
                No tickets created yet.
              </p>
            )}
          </div>

          {/* Actions */}
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

/* TicketCard — local component */
function TicketCard({ type, price, eventName, location, date }) {
  return (
    <div className="border border-[#4a4a4a] rounded-[10px] p-[20px] flex gap-[20px] items-center">
      <div className="w-[220px] h-[160px] rounded-[8px] overflow-hidden flex-shrink-0 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1700087209989-5a83d1a7c484?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="ticket"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col gap-[8px]">
        <div className="flex items-center gap-[12px]">
          <div className="rotate-[-30deg]">
            <FaTicketAlt size={28} className="text-[#006F6A]" />
          </div>
          <div>
            <p className="text-[20px] font-bold">{price}</p>
            <p className="text-[18px]">{type}</p>
          </div>
        </div>

        <h4 className="text-[18px] font-semibold">{eventName}</h4>

        <div className="flex gap-6 text-[#686868] mt-auto">
          <div className="flex items-center gap-2">
            <MdLocationOn size={18} />
            <span className="text-[14px]">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdCalendarToday size={18} />
            <span className="text-[14px]">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ProgressSteps — local component */
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
            <div className="w-full h-[1px] bg-[#006F6A]"></div>
          </div>
        </div>

        <div className="absolute w-full flex justify-between items-center px-[11px]">
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10">
            <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]"></div>
          </div>
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10">
            <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]"></div>
          </div>
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] z-10"></div>
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
