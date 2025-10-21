import React from "react";
import { CiCalendar } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { recentActivity } from "../../../../data";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleData = {
  7: [
    { name: "Jan", sales: 10000 },
    { name: "Feb", sales: 50000 },
    { name: "Mar", sales: 10000 },
    { name: "Apr", sales: 21000 },
    { name: "May", sales: 35000 },
    { name: "Jun", sales: 15000 },
    { name: "Jul", sales: 17000 },
    { name: "Aug", sales: 30000 },
    { name: "Sep", sales: 50000 },
  ],
  30: [
    { name: "Jan", sales: 15000 },
    { name: "Feb", sales: 25000 },
    { name: "Mar", sales: 30000 },
    { name: "Apr", sales: 35000 },
    { name: "May", sales: 38000 },
    { name: "Jun", sales: 42000 },
    { name: "Jul", sales: 50000 },
    { name: "Aug", sales: 56000 },
  ],
  90: [
    { name: "Jan", sales: 12000 },
    { name: "Feb", sales: 18000 },
    { name: "Mar", sales: 25000 },
    { name: "Apr", sales: 31000 },
    { name: "May", sales: 33000 },
    { name: "Jun", sales: 40000 },
    { name: "Jul", sales: 46000 },
    { name: "Aug", sales: 53000 },
  ],
};
const GraphedRecentActivity = () => {
  const [selectedRange, setSelectedRange] = useState("7");

  const data = sampleData[selectedRange];

  return (
    <div className=" w-full h-[367px]">
      <div className="flex gap-5 justify-between mt-10">
        <div className="max-w-[775px] bg-[#FFFFFF] shadow w-full h-[376px] p-10 ">
          {/* i mapped over an object of an array, so if you clicked on the elected range, you will get data of each selected range */}
          <div className="flex justify-evenly lg:gap-50">
            <h1 className="text-[16px] font-[700] cursor-pointer">
              Sales Overview
            </h1>
            <div className="flex items-center  rounded-[5px] ">
              <CiCalendar size={20} />
              <select
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
                className="text-sm border-none  rounded-md px-2 py-1 text-gray-700 "
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
          </div>
          <hr className="mt-5 text-[#8E8E8E]" />

          {/* Charts */}
          <div className="mt-5 px-10 cursor-pointer">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart
                data={data}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006F6A" stopOpacity={0} />
                    <stop offset="95%" stopColor="#006F6A" stopOpacity={0.9} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#BBBBBB" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#000000", fontSize: 12 }}
                />
                <YAxis tick={{ fill: "#000000", fontSize: 12 }} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#006F6A"
                  fillOpacity={1}
                  fill="url(#colorSales)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="max-w-[775px] bg-[white] shadow w-full h-full p-10">
          <div className="flex justify-between">
            <h1 className="text-[16px] font-[700]">Recent Activity</h1>
            <button className="text-[#006F6A]">View All</button>
          </div>
          <hr className="mt-5 text-[#8E8E8E]" />

          <div>
            {recentActivity.map((notifications, index) => {
              return (
                <div key={index} className="">
                  <div className="flex justify-between">
                    <div className="w-[319px] flex gap-2 items-center py-2">
                      <img
                        src={notifications.image}
                        alt=""
                        className="w-[22px] h-[22px]"
                      />
                      <p className="text-[14px]">{notifications.notify}</p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <LuClock /> {notifications.time}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-center mt-4 text-[#006F6A] hover:text-green-950 ">
              <button className="flex gap-3 items-center text-[16px] cursor-pointer">
                View All Activity{" "}
                <span>
                  <HiOutlineArrowLongRight size={22} />{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphedRecentActivity;
