import React from "react";
import { CiSearch } from "react-icons/ci";
import { recentTicketSales } from "../../../../data";

const RecentTicketSales = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between">
        <h1 className="text-[32px] font-[700]">Recent Ticket Sales</h1>
        <div className="flex items-center pt-4 lg:pt-0  ">
          <input
            type="search "
            name="search"
            id="search"
            className="border border-[##7E7E7E] lg:w-[279px] w-full rounded-[10px] pl-10 relative p-3 "
            placeholder="Search Events"
          />
          <CiSearch className="absolute  pl-3 items-center " size={30} />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg shadow mt-6">
        <table className="w-full text-[16px] rounded-lg overflow-hidden">
          <thead className="bg-[#EAFFF3] ">
            <tr>
              <th className="p-3 ">TICKET ID</th>
              <th className="p-3">CUSTOMER</th>
              <th className="p-3">EVENT</th>
              <th className="p-3">TICKET TYPE</th>
              <th className="p-3">AMOUNT</th>
              <th className="p-3">TIME</th>
            </tr>
          </thead>

          <tbody className="bg-[#FFFFFF]">
            {recentTicketSales.map((inventory, index) => {
              return (
                <tr key={index} className="border-[#E5E7EB] border-b ">
                  <td className="flex justify-center items-center p-3 gap-3 ">
                    {" "}
                    <span>
                      <img src={inventory.image} alt="" />
                    </span>{" "}
                    {inventory.ticketId}
                  </td>
                  <td className="text-center">{inventory.customerName}</td>
                  <td className="text-center">{inventory.event}</td>
                  <td className="text-center">{inventory.ticketType}</td>
                  <td className="text-center">${inventory.amount}</td>
                  <div className="flex flex-col items-center ">
                    <td>{inventory.date}</td>
                    <td>{inventory.time}</td>
                  </div>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RecentTicketSales;
