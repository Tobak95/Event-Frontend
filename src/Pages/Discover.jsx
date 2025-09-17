import HeroSectionCard from "../component/HeroSectionCard";
import bg from "../assets/bg.jpg";
import { CiLocationOn } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

const Card = ({ h2, pTag1, location, time, date, price, img }) => {
  const sizes = [
    "31px",
    "20px",
    "43px",
    "53px",
    "64px",
    "74px",
    "84px",
    "94px",
    "104px",
    "114px",
    "124px",
    "134px",
    "144px",
    "154px",
    "164px",
    "174px",
    "184px",
  ];
  return (
    <div className="">
      <div className="flex flex-col-reverse lg:flex-row rounded-2xl overflow-hidden bg-white  shadow border border-gray-200">
        <div className="flex flex-col justify-between p-4 flex-1 w-full lg:w-[50%]">
          <div>
            <h2 className="text-xl font-bold text-[#000000]">{h2}</h2>
            <p className="text-lg font-bold text-[#000000]">{pTag1}</p>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p className="flex items-center gap-1">
                <CiLocationOn /> {location}
              </p>
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-1">
                  <LuCalendarDays />
                  {date}
                </p>
                <p className="flex items-center gap-1">
                  <LuClock4 />
                  {time}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold">{price}</span>
            <button className="px-4 py-2 rounded-lg border border-[#6E706B] cursor-pointer text-[#006F6A] font-bold">
              Get Tickets
            </button>
          </div>
        </div>

        {/* Right Section (Ticket Stub with Image) */}
        <div className="relative w-full lg:w-[50%] p-4">
          {sizes.map((size, i) => (
            <div
              key={i}
              className="absolute left-2 w-4 h-2 bg-white rounded-full"
              style={{ top: size }}
            />
          ))}
          <img
            src={img}
            alt="Event"
            className="w-full h-[180.7861328125px]  object-cover rounded-tr-xl rounded-br-xl"
          />
          {/* Ticket cutout effect */}

          <div className="absolute top-1/2 -right-4 w-14 h-14 bg-white rounded-full -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

function Discover() {
  const cardData = [
    {
      h2: "Rhythm & Soul Tour: ",
      pTag1: "Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      time: "9:00 PM - 12:00PM",
      date: "Sept 25, 2025",
      img: img1,
      price: "$90.00",
    },
    {
      h2: "The Vibe Tour:",
      pTag1: "Genesis Night",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img2,
      price: "$135.00",
    },
    {
      h2: "Visions in Motion Tour:",
      pTag1: "Bridge of Culture",
      location: "National Museum Lagos (Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img3,
      price: "$50.00",
    },
    {
      h2: "Rhythm & Soul Tour:",
      pTag1: "Eternal Vibes",
      location: "Eko Atlantic City (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img4,
      price: "$90.00",
    },
    {
      h2: "Global Takeover Tour:",
      pTag1: "Coastline Heat",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 2, 2025",
      img: img5,
      price: "$120.00",
    },
    {
      h2: "The Vibe Tour: The:",
      pTag1: "Genesis Night",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img6,
      price: "$135.00",
    },
    {
      h2: "Rhythm & Soul Tour:",
      pTag1: "Eternal Vibes",
      location: "Teslim Balogun Stadium (Lagos, Nigeria)",
      time: "9:00 PM - 11:00PM",
      date: "Nov 5, 2025",
      img: img7,
      price: "$90.00",
    },
    {
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
      <HeroSectionCard
        backgroundImage={bg}
        h2={"Discover Events"}
        p={
          "Stay connected to the pulse of culture. Explore concerts, shows, and gatherings that bring people together."
        }
      />
      <div className="max-w-[1440px] mx-auto py-8 flex-col flex gap-4">
        <div className="w-full lg:w-[80%] mx-auto flex flex-col  lg:flex-row lg:justify-between gap-4 px-2 ">
          <div className="flex gap-2">
            <p className="bg-[#000000] p-2 lg:py-3 lg:px-4 rounded-lg text-white flex items-center gap-1 text-[12px] ">
              All Events <MdKeyboardArrowDown size={22} />
            </p>
            <p className="border border-[#171717] p-2 lg:py-3 lg:px-4 rounded-lg text-black flex items-center gap-1 text-[12px]">
              Price <MdKeyboardArrowDown size={22} />
            </p>
            <p className="border border-[#8A8A8A] p-2 lg:py-3 lg:px-4 rounded-lg text-black flex items-center gap-1 text-[12px]">
              Date <MdKeyboardArrowDown size={22} />
            </p>
          </div>
          <p className="border border-[#8A8A8A] p-2 lg:py-3 lg:px-2 lg:w-[30%] rounded-lg text-black flex items-center gap-1 text-[12px]">
            <CiSearch size={22} /> Search Events
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full px-2 lg:w-[80%] mx-auto gap-12 ">
          {cardData.map((data) => (
            <Card
              key={data.h2}
              date={data.date}
              h2={data.h2}
              img={data.img}
              location={data.location}
              pTag1={data.pTag1}
              price={data.price}
              time={data.time}
            />
          ))}
        </div>

        <div className="lg:w-[80%] mx-auto py-6">
          <div className="flex items-center justify-center gap-2">
            <IoMdArrowBack color="#BEBEBE" className="cursor-pointer" />
            {Array.from(
              [1, 2, 4].map((val) => (
                <div
                  className={` ${
                    val === 1
                      ? " bg-[#96C4C2] border-[#2B8783]"
                      : "bg-[#D6D6D6] border-[#EDEDED]"
                  } flex gap-4  border-4 rounded-full h-[35px] w-[35px] items-center justify-center cursor-pointer`}
                >
                  <p className="">{val}</p>
                </div>
              ))
            )}
            <IoArrowForward />
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
