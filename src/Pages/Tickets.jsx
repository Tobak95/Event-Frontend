import React, { useState } from "react";
import NavBar from "../component/layout/NavBar";
import logo2 from "../assets/logo2.png";
import { BiSearch } from "react-icons/bi";
import filter from "../assets/filter.png";
import subtract1 from "../assets/Subtract1.png";
import subtract2 from "../assets/Subtract2.png";
import subtract3 from "../assets/Subtract3.png";
import subtract4 from "../assets/Subtract4.png";
import subtract5 from "../assets/Subtract5.png";
import arrowRight from "../assets/arrow-right.png";
import location from "../assets/location.png";
import clock from "../assets/clock.png";
import download from "../assets/download.png";
import share from "../assets/share.png";
import calender from "../assets/calendar.png";

const Tickets = () => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const tickets = [
    {
      img: subtract1,
      title: "Rhythm & Soul Tour: Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      date: "Sept 25, 2025",
      time: "9:00 PM - 12:00PM",
      price: 290.0,
      status: "Upcoming",
    },
    {
      img: subtract2,
      title: "Gospel Vibes Tour: Praise On The Nile",
      location: "House on the Rock Cathedral",
      date: "Sept 28, 2025",
      time: "9:00 PM - 11:00PM",
      price: 290.0,
      status: "Upcoming",
    },
    {
      img: subtract3,
      title: "Rhythm & Soul Tour: Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      date: "Sept 20, 2025",
      time: "9:00 PM - 12:00PM",
      price: 290.0,
      status: "Past",
    },
    {
      img: subtract4,
      title: "Gospel Vibes Tour: Praise On The Nile",
      location: "House on the Rock Cathedral",
      date: "Sept 15, 2025",
      time: "9:00 PM - 11:00PM",
      price: 290.0,
      status: "Past",
    },
    {
      img: subtract5,
      title: "Rhythm & Soul Tour: Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      date: "Sept 30, 2025",
      time: "9:00 PM - 12:00PM",
      price: 290.0,
      status: "Upcoming",
    },
  ];

  const filteredTickets = tickets.filter((ticket) => {
    const matchesCategory = category === "All" || ticket.status === category;
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="layout">
      <NavBar
        bgColor="bg-[#ffffff]"
        logoSrc={logo2}
        textColor="text-[#1b1b1b]"
        menuColor="black"
      />
      <div className="flex items-center justify-between mt-35">
        <h1 className="text-[#000000] text-[23.44px] md:text-[48px] font-[700]">
          My Tickets
        </h1>
        <div className="text-[7.19px] md:text-[14px] font-[400] flex items-center gap-[10px]">
          <div className="border-[0.3px] border-[#004441] bg-[#E6F1F0] rounded-[18px] w-[55.43px] h-[17.45px] md:w-[108px] md:h-[34px] flex justify-center items-center">
            <p className="text-[#004441] ">
              {tickets.filter((t) => t.status === "Upcoming").length} Upcoming
            </p>
          </div>
          <div className="flex justify-center items-center w-[41.06px] h-[17.45px] md:w-[80px] md:h-[34px] border-[0.3px] border-[#2B8783] bg-[#F8F6F6] rounded-[28px]">
            <p className="text-[#4A4A4A] ">
              {tickets.filter((t) => t.status === "Past").length} Past
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end md:items-center md:flex-row md:justify-between gap-5">
        <div className="border border-[#7E7E7E] rounded-[8px] mt-[10px] p-[10px] flex items-center gap-2 w-full max-w-[756px] h-[50px]">
          <BiSearch color="#5A5A5A" size={30} />
          <input
            type="text"
            placeholder="Search Tickets"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-none outline-0 placeholder:text-[#5A5A5A] w-full"
          />
        </div>
        <div className="flex items-center gap-[10px]">
          <button
            onClick={() => setCategory("All")}
            className={`cursor-pointer ${
              category === "All"
                ? "bg-[#006F6A] text-[#FFFFFF]"
                : "border-[#2B8783] text-[#2B8783]"
            } rounded-[7.12px] md:rounded-[10px] w-[32.23px] h-[19.53px] md:w-[49px] md:h-[47px] font-[400] text-[8.94px] md:text-[16px] border-[0.3px]`}
          >
            All
          </button>
          <button
            onClick={() => setCategory("Upcoming")}
            className={`${
              category === "Upcoming"
                ? "bg-[#006F6A] text-[#FFFFFF]"
                : "border-[#2B8783] text-[#2B8783]"
            } cursor-pointer border-[0.17px] md:border-[0.3px] w-[59.58px] h-[19.53px] md:w-[108px] md:h-[48px] rounded-[7.12px] md:rounded-[10px] font-[400] text-[8.94px] md:text-[16px]`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setCategory("Past")}
            className={`${
              category === "Past"
                ? "bg-[#006F6A] text-[#FFFFFF]"
                : "border-[#2B8783] text-[#2B8783]"
            } cursor-pointer border-[0.17px] md:border-[0.3px] w-[39.07px] md:w-[70px] h-[19.53px] md:h-[48px] rounded-[7.12px] md:rounded-[10px] font-[400] text-[8.94px] md:text-[16px]`}
          >
            Past
          </button>
          <button className="cursor-pointer rounded-[7.12px] md:rounded-[10px] w-[20.51px] h-[19.53px] md:w-[51px] md:h-[48px] border-[0.3px] border-[#2B8783] flex items-center justify-center">
            <img
              src={filter}
              alt="filter"
              className="w-[10.89px] h-[10.89px] md:w-[19.51px] md:h-[19.51px]"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row flex-wrap gap-8 mt-[40px]">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row-reverse md:justify-between gap-5 w-[335px] h-[410px] rounded-[19.49px] bg-[#FFFFFF] border-t-0 border-r-[0.77px] border-b-[4.8px] border-l-[0.77px] border-solid border-[#96C4C2] md:w-[670px] md:h-[248.52px] md:p-[12.83px] p-[20px]"
            >
              <img src={ticket.img} alt="" />
              <div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-[700] md:text-[24px] text-[21.75px] w-[300px] md:w-[250px] text-[#000000]">
                    {ticket.title}
                  </h1>
                  <div className="flex items-center gap-2 text-[12.26px] font-[400] text-[#000000]">
                    <img src={location} alt="" />
                    <p>{ticket.location}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[12.26px] font-[400] text-[#000000]">
                      <img src={calender} alt="" />
                      <p>{ticket.date}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[12.26px] font-[400] text-[#000000]">
                      <img src={clock} alt="" />
                      <p>{ticket.time}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[#000000] text-[20.25px] font-[700] mt-[10px] md:mt-[50px]">
                  <p>${ticket.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2">
                    <img
                      src={download}
                      alt=""
                      className="md:w-[20px] md:h-[20px] w-[12.66px] h-[12.66px]"
                    />
                    <img
                      src={share}
                      alt=""
                      className="md:w-[20px] md:h-[20px] w-[12.66px] h-[12.66px]"
                    />
                    <img
                      src={arrowRight}
                      alt=""
                      className="md:w-[20px] md:h-[20px] w-[12.66px] h-[12.66px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-[#555] text-lg">No tickets found.</p>
        )}
      </div>
    </div>
  );
};

export default Tickets;
