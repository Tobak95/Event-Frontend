import React from "react";
import { MdClose, MdCheckCircle } from "react-icons/md";

export default function PublishSuccessModal({
  isOpen,
  onClose,
  onViewEvent,
  type = "publish",
}) {
  if (!isOpen) return null;

  const isDraft = type === "draft";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative bg-white rounded-[10px] w-[510px] min-h-[400px] shadow-2xl border border-[#8b8b8b] flex flex-col items-center justify-between py-10 px-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[24px] top-[24px] text-[#1D1B20] hover:opacity-70 transition-opacity"
        >
          <MdClose size={29} />
        </button>

        {/* Success Icon */}
        <div className="flex flex-col items-center">
          <div className="relative w-[147px] h-[147px] mb-6">
            <div className="absolute inset-0 rounded-full bg-[#B0DFB0]/53"></div>
            <div className="absolute inset-[37px] flex items-center justify-center">
              <MdCheckCircle size={73} className="text-[#04BF04]" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center max-w-[362px] space-y-1">
            <h2
              id="modal-title"
              className="text-[28px] text-black font-semibold"
            >
              {isDraft
                ? "Event Saved as Draft"
                : "Event Published Successfully"}
            </h2>
            <p className="text-[19px] text-[#4a4a4a]">
              {isDraft
                ? "This event has been saved as a draft"
                : "This event has been published successfully"}
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onViewEvent}
          className="mt-6 w-[323px] border-2 border-[#006f6a] text-[#006f6a] px-[13px] py-[13px] rounded-[4px] hover:bg-[#e6f1f0] transition-colors"
        >
          {isDraft ? "View draft" : "View event"}
        </button>
      </div>
    </div>
  );
}
