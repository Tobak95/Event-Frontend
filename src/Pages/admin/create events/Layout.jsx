import React, { Children } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";

export default function Layout({ Children }) {
  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />
      <div className="flex overflow-hidden flex-col flex-1">
        <Header />
        <div className="overflow-y-auto flex-1">
          {/* workings here */}
          <section className="p-7">{Children}</section>
        </div>
      </div>
    </div>
  );
}
