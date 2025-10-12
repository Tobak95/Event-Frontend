import React from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { HiOutlinePlusSm } from "react-icons/hi";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />

      <div className="flex overflow-hidden flex-col flex-1">
        <Header />

        <div className="overflow-y-auto flex-1">
          {/* workings here */}
          <section className="p-7">
            <div className="flex justify-between">
              <h1 className="text-[32px] font-[700]">Dashboard</h1>
              <div className="flex items-center gap-2">
                <button>
                  Create Event
                  <span>
                    <HiOutlinePlusSm />
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
