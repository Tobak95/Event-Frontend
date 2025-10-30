import React, { useEffect, useMemo, useState } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { HiOutlinePlusSm } from "react-icons/hi";
import { menu as defaultMenu } from "../../../../data";
import GraphedRecentActivity from "./GraphedRecentActivity";
import { Link } from "react-router-dom";
import RecentTicketSales from "./RecentTicketSales";
import { useEventContext } from "../../../Hooks/useEventContext";
import { useAppContext } from "../../../Hooks/useAppContext";
import { axiosInstance } from "../../../Utils/axiosInstance";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const { events } = useEventContext();
  const { token } = useAppContext();
  const [ticketData, setTicketData] = useState({
    totalTickets: 0,
    previousMonthChange: "No ticket data yet",
  });

  const [revenueData, setRevenueData] = useState({
    totalRevenue: 0,
    previousMonthChange: "No revenue data yet",
  });

  const [userData, setUserData] = useState({
    totalUsers: 0,
    previousMonthChange: "No user data yet",
  });

  const { totalEvents, previousMonthChange } = useMemo(() => {
    if (!Array.isArray(events) || events.length === 0) {
      return { totalEvents: 0, previousMonthChange: "No events yet" };
    }

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const thisMonthEvents = events.filter((event) => {
      if (!event.startDate) return false;
      const date = new Date(event.startDate);
      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    });

    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const lastMonthEvents = events.filter((event) => {
      if (!event.startDate) return false;
      const date = new Date(event.startDate);
      return (
        date.getMonth() === lastMonth && date.getFullYear() === lastMonthYear
      );
    });

    const diff = thisMonthEvents.length - lastMonthEvents.length;
    let diffText = "No change from last month";

    if (diff > 0) diffText = `+${diff} from last month`;
    else if (diff < 0) diffText = `${diff} from last month`;
    else if (thisMonthEvents.length === 0 && lastMonthEvents.length === 0)
      diffText = "No events in both months";

    return {
      totalEvents: events.length || 0,
      previousMonthChange: diffText,
    };
  }, [events]);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const res = await axiosInstance.get("/payments/allTransactions", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const transactions = res.data.data.transactions || [];

        if (!Array.isArray(transactions)) {
          throw new Error("Invalid transactions data");
        }

        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const lastMonthYear =
          currentMonth === 0 ? currentYear - 1 : currentYear;

        // 🔹 Calculate total amounts for this and last month
        let thisMonthTotal = 0;
        let lastMonthTotal = 0;

        transactions.forEach((tx) => {
          const date = new Date(tx.createdAt);
          if (
            date.getFullYear() === currentYear &&
            date.getMonth() === currentMonth
          ) {
            thisMonthTotal += tx.amount || 0;
          } else if (
            date.getFullYear() === lastMonthYear &&
            date.getMonth() === lastMonth
          ) {
            lastMonthTotal += tx.amount || 0;
          }
        });

        const diff = thisMonthTotal - lastMonthTotal;
        const percentChange =
          lastMonthTotal > 0
            ? ((diff / lastMonthTotal) * 100).toFixed(1)
            : thisMonthTotal > 0
            ? "100"
            : "0";

        setTicketData({
          totalTickets: transactions.length || 0,
          previousMonthChange: `${
            diff >= 0 ? "+" : ""
          }${percentChange}% from last month`,
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch ticket sales data");
      }
    };

    fetchTicketData();
  }, [token]);

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const res = await axiosInstance.get("/payments/revenue", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data?.data;
        if (!data) throw new Error("Invalid revenue response");

        // Extract total revenue
        const totalRevenue = data.totalRevenue || 0;

        // 🔹 Optional: compute month-over-month change using eventSalesSummary
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const lastMonthYear =
          currentMonth === 0 ? currentYear - 1 : currentYear;

        let thisMonthRevenue = 0;
        let lastMonthRevenue = 0;

        data.eventSalesSummary.forEach((event) => {
          const date = new Date(event.eventDate);
          if (
            date.getFullYear() === currentYear &&
            date.getMonth() === currentMonth
          ) {
            thisMonthRevenue += event.revenue || 0;
          } else if (
            date.getFullYear() === lastMonthYear &&
            date.getMonth() === lastMonth
          ) {
            lastMonthRevenue += event.revenue || 0;
          }
        });

        const diff = thisMonthRevenue - lastMonthRevenue;
        const percentChange =
          lastMonthRevenue > 0
            ? ((diff / lastMonthRevenue) * 100).toFixed(1)
            : thisMonthRevenue > 0
            ? "100"
            : "0";

        setRevenueData({
          totalRevenue,
          previousMonthChange: `${
            diff >= 0 ? "+" : ""
          }${percentChange}% from last month`,
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch revenue data");
      }
    };

    fetchRevenueData();
  }, [token]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosInstance.get("/auth/all-users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const users = res.data?.users || [];

        if (!Array.isArray(users)) throw new Error("Invalid users response");

        // 🧮 Compute monthly changes
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const lastMonthYear =
          currentMonth === 0 ? currentYear - 1 : currentYear;

        let thisMonthUsers = 0;
        let lastMonthUsers = 0;

        users.forEach((user) => {
          if (!user.createdAt) return;
          const created = new Date(user.createdAt);

          if (
            created.getFullYear() === currentYear &&
            created.getMonth() === currentMonth
          ) {
            thisMonthUsers++;
          } else if (
            created.getFullYear() === lastMonthYear &&
            created.getMonth() === lastMonth
          ) {
            lastMonthUsers++;
          }
        });

        const diff = thisMonthUsers - lastMonthUsers;
        const percentChange =
          lastMonthUsers > 0
            ? ((diff / lastMonthUsers) * 100).toFixed(1)
            : thisMonthUsers > 0
            ? "100"
            : "0";

        setUserData({
          totalUsers: users.length,
          previousMonthChange: `${
            diff >= 0 ? "+" : ""
          }${percentChange}% from last month`,
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, [token]);

  // 📊 UPDATE DASHBOARD CARDS
  const menu = useMemo(() => {
    const updated = [...defaultMenu];

    // 1 Total Events
    updated[0] = {
      ...updated[0],
      value: totalEvents,
      previousMonthData: previousMonthChange,
    };

    // 2 Ticket Sales
    updated[1] = {
      ...updated[1],
      value: ticketData.totalTickets,
      previousMonthData: ticketData.previousMonthChange,
    };

    // 3 Total Revenue
    updated[2] = {
      ...updated[2],
      value: revenueData.totalRevenue,
      previousMonthData: revenueData.previousMonthChange,
    };

    // 4 Active Users
    updated[3] = {
      ...updated[3],
      value: userData.totalUsers,
      previousMonthData: userData.previousMonthChange,
    };

    return updated;
  }, [totalEvents, previousMonthChange, ticketData, revenueData]);

  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />

      <div className="flex overflow-hidden flex-col flex-1">
        <Header />

        <div className="overflow-y-auto flex-1">
          <section className="p-7 w-full lg:mx-0 ">
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

            {/* Dashboard Stats */}
            <section className="mt-5">
              <div className="flex gap-5 justify-between ">
                {menu.map((card, index) => (
                  <div
                    key={index}
                    className="w-[330px] h-[175px] border border-[#DBDBDB] rounded-[8px] p-4"
                  >
                    <h1 className="text-[#4A4A4A] text-[24px]">
                      {card.header}
                    </h1>

                    <div className="flex items-center justify-between p-4 text-[32px] text-[#000000] font-[700]">
                      {card.value ?? 0}
                      <div>
                        <img src={card.image} alt="" />
                      </div>
                    </div>

                    <p className="text-[#004E4A]">
                      {card.previousMonthData || "No data available"}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Sales Overview + Recent Activity */}
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
