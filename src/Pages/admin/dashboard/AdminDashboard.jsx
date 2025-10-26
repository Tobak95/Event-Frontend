import React from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { HiOutlinePlusSm } from "react-icons/hi";
import { menu } from "../../../../data";
import GraphedRecentActivity from "./GraphedRecentActivity";
import { Link } from "react-router-dom";
import RecentTicketSales from "./RecentTicketSales";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />

      <div className="flex overflow-hidden flex-col flex-1">
        <Header />

        <div className="overflow-y-auto flex-1">
          {/* workings here */}

          <section className="p-7 max-w-[1240px] mx-auto">
            <div className="flex justify-between">
              <h1 className="text-[32px] font-[700]">Dashboard</h1>
              <div className="flex items-center gap-2">
                <Link to={"/dashboard/admin/create-events"}>
                  <button className="flex items-center justify-center gap-2 bg-[#006F6A] w-[140px] h-[48px] text-[#FFFFFF] rounded-[8px] cursor-pointer hover:bg-[#047a74] px-2">
                    Create Event
                    <span>
                      <HiOutlinePlusSm />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* section 2   Total Events, Total Sales, Total Revenue, Total users */}
            <section className="mt-5">
              <div className="flex gap-5 justify-between">
                {menu.map((card, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[330px] h-[175px] border border-[#DBDBDB] rounded-[8px] p-4"
                    >
                      <div>
                        <h1 className="text-[#4A4A4A] text-[24px]">
                          {card.header}
                        </h1>

                        <div className="flex items-center justify-between p-4 text-[32px] text-[#000000] font-[700]">
                          {card.value}
                          <div>
                            <img src={card.image} alt="" />
                          </div>
                        </div>

                        <p className="text-[#004E4A]">
                          {card.previousMonthData}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* Sales OverView and Recent activity */}

            <section className="flex flex-col overflow-hidden">
              <GraphedRecentActivity />

              <div className="mt-10">
                <RecentTicketSales />
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
