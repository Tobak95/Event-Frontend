// component/admin/EventActionModal.jsx
import React, { useEffect, useRef } from "react";
import { FaTrash, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { PiBroom } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import tick from "../../assets/tick-publish.png";

const EventActionModal = ({
  event,
  onClose,
  onPublish,
  onUnpublish,
  onDelete,
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

  const isDraft = event.status === "Draft";

  return (
    <div className="fixed top-[250px] inset-0 flex justify-end bg-black/20 backdrop-blur-sm z-50">
      <div
        ref={modalRef}
        className={`  animate-slide-in  mt-2 bg-white rounded-[10px] shadow-lg p-4 ${
          isDraft ? "h-[100px] w-[180px]" : "h-[150px] w-[200px]"
        }  `}
      >
        {isDraft ? (
          <>
            <button
              onClick={() => onPublish(event.id)}
              className="flex items-center gap-2 text-[#006F6A]  mb-4  text-[16px] font-[400] px-2 cursor-pointer"
            >
              <img src={tick} alt="" className="w-[19px] h-[19px]" />{" "}
              <span>Publish Event</span>
            </button>

            <button
              onClick={() => onDelete(event.id)}
              className="flex items-center gap-2 text-[#FF0000] hover:opacity-80 text-[16px] font-[400] px-2 cursor-pointer"
            >
              <GoTrash size={22} color="#FF0000" /> <span>Delete Event</span>
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onUnpublish(event.id)}
              className="flex items-center gap-2 text-[#4A4A4A] hover:opacity-80  text-[16px] font-[400] px-2 cursor-pointer"
            >
              <AiOutlineCloseSquare size={25} color="#4A4A4A" />{" "}
              <span>Unpublish Event</span>
            </button>

            <button
              onClick={() => onUnpublish(event.id)}
              className="flex items-center gap-2 text-[#4A4A4A] hover:opacity-80 my-6 text-[16px] font-[400] px-2 cursor-pointer"
            >
              <PiBroom size={25} color="#4A4A4A" /> <span>Move to Draft</span>
            </button>

            <button
              onClick={() => onDelete(event.id)}
              className="flex items-center gap-2 text-[#FF0000] hover:opacity-80 text-[16px] font-[400] px-2 cursor-pointer"
            >
              <GoTrash size={25} color="#FF0000" /> <span>Delete Event</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EventActionModal;
