import React from "react";
import { PiCalendarDotsThin } from "react-icons/pi";

const DiscoverModals = ({ modalRef, activeModal }) => {
    // const unit = 100;
    // console.log(unit);
    
  return (
    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>

        {/* Title */}
        <h3 className="font-bold text-lg text-[32px] text-center mb-5 capitalize">
          {activeModal}
        </h3>

        {/* Modal Content */}
        {activeModal === "category" && (
          <div className="flex flex-col gap-4">
            {["Business", "Sports", "Festivals", "Food & Drinks", "Dating", "Hobbies"].map(
              (cat, index) => (
                <p key={index} className="border-b p-2">
                  {cat}
                </p>
              )
            )}
          </div>
        )}

        {activeModal === "price" && (
          <div className="flex flex-col gap-4 items-center">
            <button className="priceButton">Paid</button>
            <button className="priceButton">Free</button>
          </div>
        )}

        {activeModal === "date" && (
          <div className="flex flex-col gap-[60px] py-9">
            <div className="flex justify-between gap-[10px]">
              <button className="dateButton">Today</button>
              <button className="dateButton">Tomorrow</button>
              <button className="dateButton">This Weekend</button>
            </div>
            <div className="flex justify-between">
              <button className="dateButton flex items-center gap-2">
                <PiCalendarDotsThin size={25} />
                Start date
              </button>
              <button className="dateButton flex gap-2 items-center">
                <PiCalendarDotsThin size={25} />
                End date
              </button>
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="flex justify-between pt-10">
          <button className="clearApplyButton">Clear</button>
          <button className="clearApplyButton">Apply</button>
        </div>
      </div>
    </dialog>
  );
};

export default DiscoverModals;
