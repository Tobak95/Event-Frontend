import React, { useState, useRef, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const SearchBox = ({ open, onClose }) => {
  const boxRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="overflow-hidden">
      <div
        ref={boxRef}
        className="fixed left-1/2 transform -translate-x-1/2 top-[100px] lg:w-[860px] w-[300px] h-[84px] rounded-[8px] bg-white border border-[#848484] flex items-center gap-2 animate-slideDown z-50 mt-[80px] px-[30px] py-[22px] "
      >
        <BiSearch className="text-[#777777] w-[30px] h-[30px]" />
        <input
          type="text"
          placeholder="Search by name / categories"
          className="w-full outline-none text-[16px] placeholder:text-[#777777]"
        />
        <IoClose
          className="text-[#777777] w-[40px] h-[40px]  cursor-pointer hover:text-black"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default SearchBox;
