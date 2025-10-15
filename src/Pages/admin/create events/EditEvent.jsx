import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function EditEvent({ onUpdate }) {
  return (
    <div className="space-y-[50px]">
      {/* Event Image & Details Row */}
      <div className="flex gap-[30px]">
        {/* Event Image Upload */}
        <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px] w-[560px]">
          <div className="mb-[22px]">
            <h2 className="text-[#1b1b1b] mb-[5px]">Event Image</h2>
            <p className="text-[#777777]">Upload a cover image for the event</p>
          </div>

          <div className="border border-[#6baba9] rounded-[10px] h-[351px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1495582358586-280971a57d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwY29uY2VydCUyMG11c2ljaWFuc3xlbnwxfHx8fDE3NjAzODM3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="flex-1 space-y-[22px]">
          <div>
            <h2 className="text-[#1b1b1b] mb-[5px]">Event Details</h2>
            <p className="text-[#777777]">Basic information about the event</p>
          </div>

          {/* Event Title */}
          <div className="space-y-[7px]">
            <label className="text-[#1b1b1b]">Event Title</label>
            <input
              type="text"
              defaultValue="Rhythm & Soul Tour: Eternal Vibes"
              className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none"
            />
          </div>

          {/* Description */}
          <div className="space-y-[7px]">
            <label className="text-[#1b1b1b]">Desciption</label>
            <textarea
              defaultValue='"The Gregory Campfire", A cozy intimate gathering featuring some the most soulful music makers and voices in Sri Lankan music. '
              rows={5}
              className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none resize-none"
            />
          </div>
        </div>
      </div>

      {/* Perks of the Night Section */}
      <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
        <div className="mb-[22px]">
          <h2 className="text-[#1b1b1b] mb-[5px]">Perks of the Night</h2>
          <p className="text-[#777777]">Moments you won't forget.</p>
        </div>

        <div className="flex gap-[22px] mb-[22px]">
          {/* Category */}
          <div className="flex-1 space-y-[7px]">
            <label className="text-[#1b1b1b]">Category</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="Sport"
                className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none"
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
              defaultValue="300"
              className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none"
            />
          </div>
        </div>

        {/* Perks Input */}
        <div className="space-y-[7px]">
          <textarea
            defaultValue="As a guest, you'll enjoy exclusive live performances by top soul and R&B artists, a complimentary welcome cocktail or mocktail on arrival, and access to our VIP lounge upgrades with limited availability. Capture the moment at our free photo booth, discover surprise guest performances, and score exciting giveaways throughout the night — everything designed to make this an immersive, one-of-a-kind experience.
Date: Thursday, September 25th 2025
Venue: Eko Atlantic City (Lagos, Nigeria)"
            rows={3}
            className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none resize-none"
          />
        </div>
      </div>

      {/* Date & Time Section */}
      <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
        <div className="mb-[22px]">
          <h2 className="text-[#1b1b1b] mb-[5px]">Date & Time</h2>
          <p className="text-[#777777]">When will the event take place?</p>
        </div>

        <div className="flex gap-[22px]">
          {/* Start Date */}
          <div className="flex-1 space-y-[7px]">
            <label className="text-[#1b1b1b]">Start Date</label>
            <input
              type="text"
              defaultValue="09/25/25"
              className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
            />
          </div>

          {/* End Date */}
          <div className="flex-1 space-y-[7px]">
            <label className="text-[#1b1b1b]">End Date</label>
            <input
              type="text"
              defaultValue="09/25/25"
              className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#1b1b1b] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
        <div className="mb-[22px]">
          <h2 className="text-[#1b1b1b] mb-[5px]">Location</h2>
          <p className="text-[#777777]">Where will the event be held?</p>
        </div>

        <div className="space-y-[7px]">
          <label className="text-[#1b1b1b]">Address</label>
          <input
            type="text"
            defaultValue="Eko Atlantic City (Lagos, Nigeria)"
            className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-[20px]">
        <button className="border border-[#4a4a4a] text-[#161616] px-[16px] py-[16px] rounded-[8px] w-[300px] hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button
          onClick={onUpdate}
          className="bg-[#006f6a] text-white px-[16px] py-[16px] rounded-[8px] w-[310px] hover:bg-[#005a56] transition-colors"
        >
          Update
        </button>
      </div>
    </div>
  );
}
