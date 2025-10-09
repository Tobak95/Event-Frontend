import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="lg:w-[80%] mx-auto py-6">
      <div className="flex items-center justify-center gap-2">
        {/* Prev Arrow */}
        <IoMdArrowBack
          color={currentPage === 1 ? "#D3D3D3" : "#2B8783"}
          className={`cursor-pointer ${
            currentPage === 1 && "opacity-50 pointer-events-none"
          }`}
          onClick={handlePrev}
        />

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            onClick={() => onPageChange(num)}
            className={`${
              currentPage === num
                ? "bg-[#96C4C2] border-[#2B8783]"
                : "bg-[#D6D6D6] border-[#EDEDED]"
            } flex border-4 rounded-full h-[35px] w-[35px] items-center justify-center cursor-pointer`}
          >
            <p>{num}</p>
          </div>
        ))}

        <IoArrowForward
          color={currentPage === totalPages ? "#D3D3D3" : "#2B8783"}
          className={`cursor-pointer ${
            currentPage === totalPages && "opacity-50 pointer-events-none"
          }`}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Pagination;
