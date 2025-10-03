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
  const [isOpen, setisOpen] = useState(null);
  const eventCategoryModalRef = useRef(null);
  const priceModalRef = useRef(null);
  const dateModalRef = useRef(null);
  const { discover, loading, page } = useEventContext();

  const handleDiscoverModals = (discoverModalId) => {
    setisOpen(discoverModalId);
    if (discoverModalId === "eventCategoryModal") {
      eventCategoryModalRef.current?.showModal();
    } else if (discoverModalId === "priceModal") {
      priceModalRef.current?.showModal();
    } else if (discoverModalId === "dateModal") {
      dateModalRef.current?.showModal();
    }
  };
  const [selectedCategory, isselectedCategory] = useState("All Events");
  const handleSelectedCategories = () => {};

  const cardData = [
    {
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
  return (
    <>
      <main>
        {/* Section for DISCOVER bACKGROUND */}
        <section>
          <HeroSectionCard
            backgroundImage={bg}
            h2={"Discover Events"}
            p={
              "Stay connected to the pulse of culture. Explore concerts, shows, and gatherings that bring people together."
            }
          />
        </section>
        {/* Article for Discovery Page */}
        <article className="layout gap-[35px] flex flex-col">
          {/* section for discovery filters */}
          <section className="lg:flex items-center justify-between">
            {/* div for Event Category Modal */}
            <div className="flex gap-[10px] lg:pt-3">
              <button
                className="btn discoverFilter"
                onClick={() => handleDiscoverModals("eventCategoryModal")}
              >
                All Events
                <MdKeyboardArrowDown size={18} />
              </button>

              <button
                className="btn discoverFilter"
                onClick={() => handleDiscoverModals("priceModal")}
              >
                Price
                <MdKeyboardArrowDown size={18} />
              </button>

              <button
                className="btn discoverFilter"
                onClick={() => handleDiscoverModals("dateModal")}
              >
                Date
                <MdKeyboardArrowDown size={18} />
              </button>
            </div>
            {/* div for search  */}
            <div className="flex items-center pt-4 lg:pt-0 ">
              <input
                type="search "
                name="search"
                id="search"
                className="border border-[##7E7E7E] lg:w-[386px] w-full rounded-[10px] p-1.5 pl-10 relative"
                placeholder="Search Events"
              />
              <CiSearch className="absolute  pl-3 items-center" size={30} />
            </div>
          </section>
          {/* Section for Discover Card */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-2  mx-auto gap-12">
              {discover.map((data) => (
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
            <Pagination />

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
      {/* Event Category modal  */}
      <dialog
        ref={eventCategoryModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-[32px] leading-[100%] tracking-[0%]  text-center p-5">
            Category
          </h3>
          <div className="text-[20px] leading-[100%] tracking-[0%] flex flex-col gap-6">
            <p className="border-b-1 border-[#C6C6C6] p-2 ">Business</p>
            <p className="border-b-1 border-[#C6C6C6] p-2">Sports</p>
            <p className="border-b-1 border-[#C6C6C6] p-2">Festivals</p>
            <p className="border-b-1 border-[#C6C6C6] p-2">Food & Drinks</p>
            <p className="border-b-1 border-[#C6C6C6] p-2">Dating</p>
            <p className="border-b-1 border-[#C6C6C6] p-2">Hobbies</p>
          </div>
          <div className="flex justify-between pt-20">
            <button className="clearApplyButton">Clear</button>
            <button className="clearApplyButton">Apply</button>
          </div>
        </div>
      </dialog>

      {/* Price Modal */}
      <dialog
        ref={priceModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h4 className="font-bold text-lg text-[32px] leading-[100%] tracking-[0%]  text-center">
            Price
          </h4>
          <div className="items-center flex flex-col gap-[25px] py-9">
            <button className="block priceButton">Paid</button>
            <button className="block priceButton">Free</button>
          </div>
          <div className="flex justify-between pt-20">
            <button className="clearApplyButton">Clear</button>
            <button className="clearApplyButton">Apply</button>
          </div>
        </div>
      </dialog>

      {/* Date Modal */}

      <dialog ref={dateModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-[32px] leading-[100%] tracking-[0%]  text-center">
            Date
          </h3>
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
              <button className="dateButton flex gap-2 items-center  leading-[100%] tracking-[0%]">
                <PiCalendarDotsThin size={25} />
                End date
              </button>
            </div>
          </div>
          <div className="flex justify-between pt-20">
            <button className="clearApplyButton">Clear</button>
            <button className="clearApplyButton">Apply</button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Discover;
