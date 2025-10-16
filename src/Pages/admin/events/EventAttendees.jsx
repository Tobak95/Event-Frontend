import React, { useState, useMemo } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import search from "../../../assets/search01.png";
import { LuScanLine } from "react-icons/lu";

const EventAttendees = () => {
  const text = "Attendees for Rhythm & Soul Tour: Eternal Vibes";

  // ✅ State for search, pagination, and entries
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const attendees = [
    {
      name: "Ahmed Musa",
      email: "musamed@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Jennifer Lopez",
      email: "jenilopez@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Pending",
    },
    {
      name: "Ronnie Colman",
      email: "ronniecol@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Dwayne Tom",
      email: "dwatomm@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Keith Lee",
      email: "leekeith@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Pending",
    },
    {
      name: "Mia Khalifa",
      email: "miakhalifa@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Jerry Springer",
      email: "springerjj@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Mia Malkova",
      email: "aubreygg@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Aubrey Graham",
      email: "aubreygg@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Vin Diesel",
      email: "dieselvin@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
    {
      name: "Zendaya Coleman",
      email: "zendayac@gmail.com",
      ticketType: "VIP Ticket",
      quantity: "2",
      status: "Checked in",
    },
    {
      name: "Chris Hemsworth",
      email: "thorhammer@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Pending",
    },
    {
      name: "Emma Watson",
      email: "emmaw@gmail.com",
      ticketType: "Standard Ticket",
      quantity: "1",
      status: "Checked in",
    },
  ];

  // ✅ 1. Filter attendees based on search
  const filteredAttendees = useMemo(() => {
    return attendees.filter(
      (attendee) =>
        attendee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attendee.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [attendees, searchQuery]);

  // ✅ 2. Pagination logic
  const totalPages = Math.ceil(filteredAttendees.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedAttendees = filteredAttendees.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // reset to first page
  };

  // ✅ 3. Truncate title after "Soul"
  const truncateText = (text) => {
    const keyword = "Soul";
    return text.includes(keyword)
      ? text.slice(0, text.indexOf(keyword) + keyword.length) + "..."
      : text;
  };

  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <div className="overflow-y-auto flex-1">
          <section className="p-7 bg-[#FFFFFF]">
            <Link
              to="/dashboard/admin/events/:id"
              className="text-[#777777] text-[24px] font-[400] flex items-center gap-1"
            >
              <FaLessThan size={20} /> Back
            </Link>

            {/* Title + Search Bar */}
            <div className="flex justify-between my-5 flex-wrap gap-3">
              <h1 className="text-[#000000] text-[28px] font-medium">
                {truncateText(text)}
              </h1>

              <div className="flex items-center gap-2">
                <div className="w-[343px] h-[43px] rounded-[8px] border border-[#ACACAC] flex items-center gap-1.5 px-[10px]">
                  <img src={search} alt="search" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="border-0 outline-0 placeholder:text-[#6F6F6F] placeholder:text-[13px] w-full"
                  />
                </div>
                <button className="w-[180px] h-[43px] rounded-[8px] border border-[#006F6A] text-[#006F6A] text-[20px] font-medium flex items-center gap-2 p-[5px]">
                  <LuScanLine />
                  Scan QR Code
                </button>
              </div>
            </div>

            {/* Table */}
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F6F6F6] text-left text-[16px] text-[#4A4A4A] font-medium">
                  <th className="py-3 pl-3">Attendee’s Name</th>
                  <th className="py-3">Attendee’s Email</th>
                  <th className="py-3">Ticket Type</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Status</th>
                  <th className="py-3"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedAttendees.length > 0 ? (
                  paginatedAttendees.map((attendee, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#000000]/20 hover:bg-[#F9FAFB] transition-colors cursor-pointer"
                    >
                      <td className="py-4 text-[#000000] font-medium text-[18px]">
                        {attendee.name}
                      </td>
                      <td className="py-4 text-[#000000] text-[16px]">
                        {attendee.email}
                      </td>
                      <td className="py-4 text-[#000000] text-[16px]">
                        {attendee.ticketType}
                      </td>
                      <td className="py-4 text-[#000000] text-[16px]">
                        {attendee.quantity}
                      </td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 font-[500] text-[12px] rounded-[5px] ${
                            attendee.status === "Checked in"
                              ? "bg-[#E6F1F0] text-[#004441]"
                              : "bg-[#FFFAE6] text-[#FFCF00]"
                          }`}
                        >
                          {attendee.status}
                        </span>
                      </td>
                      <td className="py-4 text-[#000000] text-xl cursor-pointer">
                        ...
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-6 text-center text-[#777777]">
                      No attendees found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="flex items-center justify-between mt-5 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <select
                  value={entriesPerPage}
                  onChange={handleEntriesChange}
                  className="border-0   text-[#777777] outline-0"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
                <label className="text-[#777777] text-[16px]">
                  Entries per page
                </label>
              </div>

              <p className="text-[#777777] text-[16px] font-[400]">
                {currentPage} of {totalPages || 1} pages
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`w-[166px] h-[43px] rounded-[8px] border border-[#777777] text-[18px] font-medium flex items-center gap-2 justify-center cursor-pointer ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <FaLessThan size={18} /> Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={`w-[166px] h-[43px] rounded-[8px] border border-[#777777] text-[18px] font-medium flex items-center gap-2 justify-center cursor-pointer ${
                    currentPage === totalPages || totalPages === 0
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next <FaGreaterThan size={18} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EventAttendees;
