// src/pages/admin/create-events/TicketCard.jsx
import React from "react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";

export default function TicketCard({
  type,
  price,
  eventName,
  location,
  date,
  image,
}) {
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
