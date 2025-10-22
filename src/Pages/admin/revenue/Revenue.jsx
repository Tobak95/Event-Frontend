import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import icon1 from "../../../assets/rev.png";
import ticket from "../../../assets/tiket.png";
import { FiSearch } from "react-icons/fi";
import {
  IoChevronBackOutline,
  IoChevronForward,
  IoFilterSharp,
} from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const parentVariant = {
  hide: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const childrenVariant = {
  hide: { opacity: 0, y: 10 },
  open: { opacity: 1, y: 0, transition: { ease: "easeIn", duration: 0.3 } },
};

const revenueAnalytics = [
  {
    event: "Rhythm & Soul Tour",
    date: "12 May 2025  5:00 pm",
    SoldTicket: "200/300",
    price: "$2,236",
  },
  {
    event: "Heat Wave Block Party",
    date: "12 May 2025  5:00 pm",
    SoldTicket: "200/300",
    price: "$2,236",
  },
  {
    event: "Illashizzy Water Grave",
    date: "12 May 2025  5:00 pm",
    SoldTicket: "400/500",
    price: "$4,472",
  },
  {
    event: "Katakata Rangers Motion",
    date: "12 May 2025  5:00 pm",
    SoldTicket: "200/300",
    price: "$2,236",
  },
  {
    event: "Rhythm & Soul Tour",
    date: "12 May 2025  5:00 pm",
    SoldTicket: "600/700",
    price: "$6,708",
  },
  {
    event: "The Phantom Opera",
    date: "12 May 2025  5:00 pm",
    SoldTicket: "200/300",
    price: "$2,240",
  },
  {
    event: "Sky High Roof Top",
    date: "12 May 2025  5:00 pm",
    SoldTicket: "300/600",
    price: "$3,354",
  },
];

const HeadAnalytics = () => {
  const data = [
    {
      h1: "Total Revenue",
      h2: "$42,000",
      p: "Last 30 days",
      pColor: "#004E4A",
      icon: icon1,
    },
    {
      h1: "Ticket Sold",
      h2: "$3,800",
      p: "+12% vs last month",
      pColor: "#D723A1",
      icon: ticket,
    },
  ];

  return (
    <motion.div
      variants={parentVariant}
      initial="hide"
      animate="open"
      className="flex items-center justify-between gap-[29px] mt-4"
    >
      {data.map((item) => (
        <motion.div
          variants={childrenVariant}
          className="border border-[#DBDBDB] rounded-[8px] p-4  w-full shadow"
          key={item.h1}
        >
          <div className="flex justify-between items-center w-full">
            <div className="space-y-4">
              <h1 className="text-[#4A4A4A] text-[24px]">{item.h1}</h1>
              <h2 className="text-[32px] text-[#000000] font-[700]">
                {item.h2}
              </h2>
              <p className={` text-[14px]`} style={{ color: item.pColor }}>
                {item.p}
              </p>
            </div>

            <img src={item.icon} alt="" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const Modal = ({ setShowModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute h-[980px] inset-0 bg-black/30 backdrop-blur-xs flex items-center justify-center"
      onClick={setShowModal}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="relative w-full"
      >
        <div
          className="w-[350px] rounded-[14.71px] bg-white  absolute right-10 -top-30 py-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4 px-4 ">
            <p className="text-[#111014] font-semibold">Filter by:</p>
            <MdClose
              size={24}
              onClick={setShowModal}
              className="cursor-pointer"
            />
          </div>
          <div className="px-4 mt-10">
            <p>Default</p>
          </div>
          <div className="divider" />
          <div className="px-4">
            <p>Highest Revenue</p>
          </div>
          <div className="divider" />
          <div className="px-4">
            <p>Lowest Revenue</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Revenue = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />

      <div className="flex overflow-hidden flex-col flex-1 ">
        <Header />

        <div className={`overflow-y-auto flex-1 relative`}>
          {/* workings here */}
          <section className="p-7 relative">
            <div className="space-y-2">
              <h2 className="font-bold text-3xl">Revenue Analysis</h2>
              <p className="text-[#4A4A4A] text-[20px]">
                An overview of revenue performance by categories to total
                revenue
              </p>
            </div>

            <HeadAnalytics />
            <div className="mt-8">
              <div className="flex justify-between">
                <h2 className="font-bold text-2xl">Detailed Revenue Data</h2>
                <div className="flex gap-6">
                  <div className="border border-[#D5D9E0] rounded-sm flex items-center p-3 gap-1 shadow-sm">
                    <FiSearch size={22} />
                    <input
                      type="text"
                      placeholder="Search event..."
                      className="outline-none flex-1"
                    />
                  </div>
                  <div
                    className="flex gap-1 border border-[#D5D9E0] p-3 shadow-sm rounded-[8px] cursor-pointer hover:bg-[#f0f0f0]"
                    onClick={() => setShowModal(true)}
                  >
                    <IoFilterSharp size={22} />
                    <p className="text-[#232323]">Filter</p>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {showModal && (
                  <Modal setShowModal={() => setShowModal((prev) => !prev)} />
                )}
              </AnimatePresence>
            </div>

            <motion.table
              className="w-full border-collapse mt-8 text-left"
              variants={parentVariant}
              initial="hide"
              animate="open"
            >
              <thead>
                <tr className="bg-[#f0efef]">
                  {["EVENT NAME", "DATE", "TICKETS SOLD", "TOTAL REVENUE"].map(
                    (data, i) => (
                      <th key={i} className="py-3 text-[20px] font-bold">
                        {data}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <div className="my-6" />

              <motion.tbody variants={parentVariant}>
                {revenueAnalytics.map((item) => (
                  <motion.tr
                    key={item.event}
                    variants={childrenVariant}
                    className="border-b border-[#000000]/20 hover:bg-[#F9FAFB] transition-colors text-[24px]"
                  >
                    <td className="py-3">{item.event}</td>
                    <div className="-ml-20">
                      <td>{item.date}</td>
                    </div>
                    <td className="py-3">{item.SoldTicket}</td>
                    <td className="py-3 text-[#006F6A] font-bold pl-12">
                      {item.price}
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </motion.table>

            <div className="divider mt-10" />

            <div className="flex justify-between items-center -mt-4">
              <div className="flex items-center gap-14">
                <p>Showing</p>
                <p>1 / 10</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="border border-[#DBDBDB] rounded-full p-2 cursor-pointer">
                  <IoChevronBackOutline size={26} />
                </div>
                <div className="space-x-2">
                  {[1, 2, 3].map((item) => (
                    <button
                      className={`border ${
                        item === 1 ? "border-[#FFCF00]" : "border-gray-300"
                      } rounded-full py-1 px-2`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="border border-[#DBDBDB] rounded-full p-2 cursor-pointer">
                  <IoChevronForward size={26} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
