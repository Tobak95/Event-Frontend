import React, { useEffect, useRef } from "react";
import { GoTrash } from "react-icons/go";
import { PiBroom } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import tick from "../../assets/tick-publish.png";

const EventActionModal = ({
  event,
  onClose,
  onPublish,
  onUnpublish,
  onDelete,
  onEdit,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!event) return null;

  const isLive = event.status?.toLowerCase() === "live";
  const isDraft = event.status?.toLowerCase() === "draft";

  return (
    <div className="fixed inset-0 flex justify-end bg-[#00000080] z-50">
      <div
        ref={modalRef}
        className="absolute top-[250px] right-[100px] bg-white rounded-[10px] shadow-2xl p-4 w-[200px] animate-slide-in"
      >
        {isLive && (
          <>
            <button
              onClick={() => onUnpublish(event._id)}
              className="flex items-center gap-2 text-[#4A4A4A] mb-4 text-[16px] font-[400] px-2 cursor-pointer hover:opacity-80"
            >
              <PiBroom size={20} color="#4A4A4A" /> <span>Move to Draft</span>
            </button>

            <button
              onClick={() => onDelete(event._id)}
              className="flex items-center gap-2 text-[#FF0000] text-[16px] font-[400] px-2 cursor-pointer hover:opacity-80"
            >
              <GoTrash size={20} color="#FF0000" /> <span>Delete Event</span>
            </button>
          </>
        )}

        {isDraft && (
          <>
            <button
              onClick={() => onEdit(event._id)}
              className="flex items-center gap-2 text-[#006F6A] mb-4 text-[16px] font-[400] px-2 cursor-pointer hover:opacity-80"
            >
              <FaEdit size={18} color="#006F6A" /> <span>Edit Event</span>
            </button>

            <button
              onClick={() => onDelete(event._id)}
              className="flex items-center gap-2 text-[#FF0000] text-[16px] font-[400] px-2 cursor-pointer hover:opacity-80"
            >
              <GoTrash size={20} color="#FF0000" /> <span>Delete Event</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EventActionModal;
