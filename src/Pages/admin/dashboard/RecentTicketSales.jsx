import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { recentTicketSales } from "../../../../data";
import { axiosInstance } from "../../../Utils/axiosInstance";
import { toast } from "react-toastify";
import { useAppContext } from "../../../Hooks/useAppContext";
import Ticket from "../../../assets/ticket.png";

const RecentTicketSales = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { token } = useAppContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axiosInstance.get("/payments/allTransactions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.data.status === "success") {
          setTransactions(res.data.data.transactions);
          setFilteredData(res.data.data.transactions);
        }
        console.log(res.data.data.transactions);
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data.message);
      }
    };
    fetchTransactions();
  }, []);

  // Search filter
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData(transactions);
    } else {
      const lower = search.toLowerCase();
      const filtered = transactions.filter(
        (item) =>
          item.event?.title?.toLowerCase().includes(lower) ||
          item.user?.firstname?.toLowerCase().includes(lower) ||
          item.user?.lastname?.toLowerCase().includes(lower) ||
          item.reference?.toLowerCase().includes(lower)
      );
      setFilteredData(filtered);
    }
  }, [search, transactions]);

  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h1 className="text-[32px] font-[700]">Recent Ticket Sales</h1>
        <div className="relative flex items-center pt-4 lg:pt-0  ">
          <input
            type="search "
            name="search"
            id="search"
            className="border border-[##7E7E7E] lg:w-[279px] w-full rounded-[10px] pl-10  p-3 "
            placeholder="Search Events"
          />
          <CiSearch className="absolute  pl-3 items-center " size={30} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow mt-6">
        <table className="w-full text-[16px] rounded-lg overflow-hidden">
          <thead className="bg-[#EAFFF3]">
            <tr>
              <th className="text-start pl-2 py-3">TICKET ID</th>
              <th className="text-start pl-2">CUSTOMER</th>
              <th className="text-start pl-2">EVENT</th>
              <th className="text-start pl-2">TICKET NAME</th>
              <th className="text-start pl-2">AMOUNT</th>
              <th className="text-start pl-2">TIME</th>
            </tr>
          </thead>

          <tbody className="bg-[#FFFFFF]">
            {filteredData.length > 0 ? (
              filteredData.slice(0, 20).map((item, index) => {
                const createdAt = new Date(item.createdAt);
                const date = createdAt.toLocaleDateString();
                const time = createdAt.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                });

                return (
                  <tr key={index} className="border-b border-[#E5E7EB]">
                    <td className="flex items-center p-3 gap-3 mx-auto ">
                      {" "}
                      <span>
                        <img src={Ticket} alt="" />
                      </span>{" "}
                      <span>T-{item._id.slice(-4)}</span>
                    </td>
                    <td className="pl-2">
                      {item.user?.firstname} {item.user?.lastname}
                    </td>
                    <td className="pl-2">{item.event?.title || "—"}</td>
                    <td className="pl-2">{item.ticketType?.name || "—"}</td>
                    <td className="pl-4">${item.amount}</td>
                    <div className="flex flex-col pl-2">
                      <td>{date}</td>
                      <td>{time}</td>
                    </div>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentTicketSales;
