import React, { useState, useEffect, useRef } from "react";

const FilterModal = ({ isOpen, onClose, filters, onApply }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const modalRef = useRef(null); // ref for modal box

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  // 🧠 Detect click outside modal box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleApply = () => {
    onApply(localFilters);
    onClose();
  };

  return (
    <div className="fixed top-[50px] inset-0 flex justify-end bg-black/20 backdrop-blur-sm z-50">
      <div
        ref={modalRef}
        className="w-[280px] h-[270px] bg-white shadow-xl p-5 overflow-y-hidden animate-slide-in rounded-[10px]"
      >
        {/* Event Type */}
        <div className="mb-5">
          <h3 className="font-medium text-[#000000] text-[20px] mb-2">
            Event Type
          </h3>
          {["Paid", "Free"].map((type) => (
            <label
              key={type}
              className="flex items-center justify-between mb-2"
            >
              <span className="text-[14px] text-[#4A4A4A] font-[400]">
                {type}
              </span>
              <input
                type="checkbox"
                checked={localFilters.type === type}
                className="w-[14px] h-[14px] rounded-[5px] border border-[#4A4A4A]"
                onChange={() =>
                  setLocalFilters((prev) => ({
                    ...prev,
                    type: prev.type === type ? "" : type,
                  }))
                }
              />
            </label>
          ))}
        </div>

        {/* Status */}
        <div className="mb-5">
          <h3 className="font-medium text-[#000000] text-[20px] mb-2">
            Status
          </h3>
          {["Live", "Draft"].map((status) => (
            <label
              key={status}
              className="flex items-center justify-between mb-2"
            >
              <span className="text-[14px] text-[#4A4A4A] font-[400]">
                {status}
              </span>
              <input
                type="checkbox"
                checked={localFilters.status === status}
                className="w-[14px] h-[14px] rounded-[5px] border border-[#4A4A4A]"
                onChange={() =>
                  setLocalFilters((prev) => ({
                    ...prev,
                    status: prev.status === status ? "" : status,
                  }))
                }
              />
            </label>
          ))}
        </div>

        <button
          onClick={handleApply}
          className="bg-[#006F6A] w-[60px] h-[26px] text-[#FFFFFF] font-medium text-[13px] rounded-[5px] cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
