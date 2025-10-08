import React from "react";
import { Categories } from "../../data";

const EventCategory = () => {
  return (
    <div  className="layout mt-10 lg:mt-20">
      <div className="text-center">
        <h1 className="text-[25px] lg:text-[48px] font-[700]">
          Event Category
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-5  lg:grid-cols-1 lg:flex justify-between mt-10">
        {Categories.map((Category, index) => {
          return (
            <div key={index} className=" flex flex-col items-center gap-5">
              <img src={Category.image} alt="EVent Images" />
              <h5
                style={{ fontFamily: " Helvetica" }}
                className="lg:text-[25px] font-[500]"
              >
                {Category.eventName}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCategory;

