import React, { useState, useRef } from "react";
import HeroSectionCard from "../component/HeroSectionCard";
import bg from "../assets/bg.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
// import DiscoverModal from "./ModalPages/DiscoverModal";
import Card from "../component/DiscoverCard";
import { PiCalendarDotsThin } from "react-icons/pi";
import Pagination from "../component/layout/Pagination";
import DiscoverModals from "../component/DiscoverModals";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import { useEventContext } from "../Hooks/useEventContext";
import dateFormat from "../Utils/dateFormat";

const Discover = () => {
  const [activeModal, setActiveModal] = useState(null);
  const modalRef = useRef(null);

  const { isLoading, events, isSubmitting } = useEventContext();

  // --- Pagination setup ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // show 6 events per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = events.slice(indexOfFirstItem, indexOfLastItem);

  const handleOpenModal = (type) => {
    setActiveModal(type);
    modalRef.current?.showModal();
  };
  const [selectedCategory, isselectedCategory] = useState("All Events");
  const handleSelectedCategories = () => {};

      id: 1,
      h2: "Rhythm & Soul Tour: ",
      pTag1: "Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      time: "9:00 PM - 12:00PM",
      date: "Sept 25, 2025",
      img: img1,
      price: "$90.00",
    },
    {
      id: 2,
      h2: "The Vibe Tour:",
      pTag1: "Genesis Night",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img2,
      price: "$135.00",
    },
    {
      id: 3,
      h2: "Visions in Motion Tour:",
      pTag1: "Bridge of Culture",
      location: "National Museum Lagos (Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img3,
      price: "$50.00",
    },
    {
      id: 4,
      h2: "Rhythm & Soul Tour:",
      pTag1: "Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img4,
      price: "$90.00",
    },
    {
      id: 5,
      h2: "Global Takeover Tour:",
      pTag1: "Coastline Heat",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 2, 2025",
      img: img5,
      price: "$120.00",
    },
    {
      id: 6,
      h2: "The Vibe Tour: The:",
      pTag1: "Genesis Night",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img6,
      price: "$135.00",
    },
    {
      id: 7,
      h2: "Rhythm & Soul Tour:",
      pTag1: "Eternal Vibes",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img7,
      price: "$90.00",
    },
    {
      id: 8,
      h2: "Gospel Vibes Tour:",
      pTag1: "Praise On The Nile",
      location: "House on the Rock Cathedral ",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img8,
      price: "$100.00",
    },
  ];
  //   {
  //     id: 1,
  //     h2: "Rhythm & Soul Tour: ",
  //     pTag1: "Eternal Vibes",
  //     location: "Eko Atlantic City (Lagos, Nigeria)",
  //     time: "9:00 PM - 12:00PM",
  //     date: "Sept 25, 2025",
  //     img: img1,
  //     price: "$90.00",
  //   },
  //   {
  //     id: 2,
  //     h2: "The Vibe Tour:",
  //     pTag1: "Genesis Night",
  //     location: "Teslim Balogun Stadium (Lagos, Nigeria)",
  //     time: "9:00 PM - 11:00PM",
  //     date: "Nov 5, 2025",
  //     img: img2,
  //     price: "$135.00",
  //   },
  //   {
  //     id: 3,
  //     h2: "Visions in Motion Tour:",
  //     pTag1: "Bridge of Culture",
  //     location: "National Museum Lagos (Nigeria)",
  //     time: "9:00 PM - 11:00PM",
  //     date: "Nov 5, 2025",
  //     img: img3,
  //     price: "$50.00",
  //   },
  //   {
  //     id: 4,
  //     h2: "Rhythm & Soul Tour:",
  //     pTag1: "Eternal Vibes",
  //     location: "Eko Atlantic City (Lagos, Nigeria)",
  //     time: "9:00 PM - 11:00PM",
  //     date: "Nov 5, 2025",
  //     img: img4,
  //     price: "$90.00",
  //   },
  //   {
  //     id: 5,
  //     h2: "Global Takeover Tour:",
  //     pTag1: "Coastline Heat",
  //     location: "Teslim Balogun Stadium (Lagos, Nigeria)",
  //     time: "9:00 PM - 11:00PM",
  //     date: "Nov 2, 2025",
  //     img: img5,
  //     price: "$120.00",
  //   },
  //   {
  //     id: 6,
  //     h2: "The Vibe Tour: The:",
  //     pTag1: "Genesis Night",
  //     location: "Teslim Balogun Stadium (Lagos, Nigeria)",
  //     time: "9:00 PM - 11:00PM",
  //     date: "Nov 5, 2025",
  //     img: img6,
  //     price: "$135.00",
  //   },
  //   {
  //     id: 7,
  //     h2: "Rhythm & Soul Tour:",
  //     pTag1: "Eternal Vibes",
  //     location: "Teslim Balogun Stadium (Lagos, Nigeria)",
  //     time: "9:00 PM - 11:00PM",
  //     date: "Nov 5, 2025",
  //     img: img7,
  //     price: "$90.00",
  //   },
  //   {
  //     id: 8,
  //     h2: "Gospel Vibes Tour:",
  //     pTag1: "Praise On The Nile",
  //     location: "House on the Rock Cathedral ",
  //     time: "9:00 PM - 11:00PM",
  //     date: "Nov 5, 2025",
  //     img: img8,
  //     price: "$100.00",
  //   },
  // ];

  return (
    <>
      <main>
        {/* Section for DISCOVER bACKGROUND */}
        <section
          className="relative bg-cover bg-center lg:h-[642px] h-[297px]"
          style={{ backgroundImage: "url(/bg.jpg)" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center  h-full text-[#FEFCFB]">
            <h2 className="text-[24px] md:text-[64px] font-bold mb-4">
              Discover Events
            </h2>
            <p className="text-[#FFFFFF] text-[13px]  md:text-[20px] text-center md:w-[648.34375px] w-[350px] leading-[150%]">
              Stay connected to the pulse of culture. Explore concerts, shows,
              and gatherings that bring people together.
            </p>
          </div>
        </section>

        {/* Article for Discovery Page */}
        <article className="layout gap-[35px] flex flex-col mt-5">
          {/* section for discovery filters */}
          <section className="md:flex items-center justify-between">
            {/* div for Event Category Modal */}
            <div className="flex gap-[10px] lg:pt-3">
              <button
                className="btn discoverFilter bg-[#FFFFFF]"
                onClick={() => handleOpenModal("category")}
              >
                All Events
                <MdKeyboardArrowDown size={18} />
              </button>

              <button
                className="btn discoverFilter bg-[#FFFFFF]"
                onClick={() => handleOpenModal("price")}
              >
                Price
                <MdKeyboardArrowDown size={18} />
              </button>

              <button
                className="btn discoverFilter bg-[#FFFFFF]"
                onClick={() => handleOpenModal("date")}
              >
                Date
                <MdKeyboardArrowDown size={18} />
              </button>
            </div>

            {/* div for search  */}
            <div className="flex items-center pt-4 lg:pt-0  ">
              <input
                type="search "
                name="search"
                id="search"
                className="border border-[##7E7E7E] lg:w-[386px] w-full rounded-[10px] pl-10 relative p-3 "
                placeholder="Search Events"
              />
              <CiSearch className="absolute  pl-3 items-center " size={30} />
            </div>
          </section>
          {/* Section for Discover Card */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-2  mx-auto gap-12">
              {currentItems.map((data) => (
                <Card
                  key={data._id}
                  date={new Date(data.eventDate).toLocaleDateString("en-us", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                  h2={data.title}
                  img={data.eventImage}
                  location={data.location}
                  price={data.price}
                  time={dateFormat(data.eventStart)}
                  time2={dateFormat(data.eventEnd)}
                />
              ))}
            </div>
            <Pagination
              totalItems={events.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />

            {/* <div className="lg:w-[80%] mx-auto py-6">
              <div className="flex items-center justify-center gap-2">
                <IoMdArrowBack color="#BEBEBE" className="cursor-pointer" />
                {Array.from(
                  [1, 2, 3, 4].map((page) => (
                    <div
                      className={` ${
                        page === 1
                          ? " bg-[#96C4C2] border-[#2B8783]"
                          : "bg-[#D6D6D6] border-[#EDEDED]"
                      } flex gap-4  border-4 rounded-full h-[35px] w-[35px] items-center justify-center cursor-pointer`}
                    >
                      <p className="">{page}</p>
                    </div>
                  ))
                )}
                <IoArrowForward />
              </div>
            </div> */}
          </section>
        </article>
      </main>
      <DiscoverModals modalRef={modalRef} activeModal={activeModal} />
    </>
  );
};

export default Discover;
