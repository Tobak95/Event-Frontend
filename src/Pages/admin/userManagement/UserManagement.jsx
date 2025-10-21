import React, { useState } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const data = React.useMemo(
    () => [
      {
        name: "Emily Carter",
        email: "emily.carter@example.com",
        phone: "(555) 123-4567",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Liam Brooks",
        email: "liam.brooks@example.com",
        phone: "(555) 234-5678",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        name: "Olivia Martin",
        email: "olivia.martin@example.com",
        phone: "(555) 345-6789",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
      },
      {
        name: "Noah Walker",
        email: "noah.walker@example.com",
        phone: "(555) 456-7890",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
      },
      {
        name: "Ava Thompson",
        email: "ava.thompson@example.com",
        phone: "(555) 567-8901",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
      },
      {
        name: "Ethan Scott",
        email: "ethan.scott@example.com",
        phone: "(555) 678-9012",
        image: "https://randomuser.me/api/portraits/men/49.jpg",
      },
      {
        name: "Sophia Hall",
        email: "sophia.hall@example.com",
        phone: "(555) 789-0123",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
      },
      {
        name: "James Lee",
        email: "james.lee@example.com",
        phone: "(555) 890-1234",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
      },
      {
        name: "Isabella Young",
        email: "isabella.young@example.com",
        phone: "(555) 901-2345",
        image: "https://randomuser.me/api/portraits/women/52.jpg",
      },
      {
        name: "Benjamin King",
        email: "benjamin.king@example.com",
        phone: "(555) 012-3456",
        image: "https://randomuser.me/api/portraits/men/53.jpg",
      },
      {
        name: "Mia Wright",
        email: "mia.wright@example.com",
        phone: "(555) 123-4568",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
      },
      {
        name: "Alexander Green",
        email: "alex.green@example.com",
        phone: "(555) 234-5679",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
      },
      {
        name: "Charlotte Adams",
        email: "charlotte.adams@example.com",
        phone: "(555) 345-6780",
        image: "https://randomuser.me/api/portraits/women/56.jpg",
      },
      {
        name: "Daniel Hill",
        email: "daniel.hill@example.com",
        phone: "(555) 456-7891",
        image: "https://randomuser.me/api/portraits/men/57.jpg",
      },
      {
        name: "Amelia Nelson",
        email: "amelia.nelson@example.com",
        phone: "(555) 567-8902",
        image: "https://randomuser.me/api/portraits/women/58.jpg",
      },
    ],
    []
  );

  const filteredData = React.useMemo(() => {
    return data.filter((user) => {
      const query = searchQuery.toLowerCase();
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.phone.toLowerCase().includes(query)
      );
    });
  }, [data, searchQuery]);

  const columns = React.useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        cell: ({ row }) => {
          const name = row.getValue("name");
          const image = row.original.image;

          return (
            <div className="flex items-center gap-3">
              <img
                src={image}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-[20px]">{name}</span>
            </div>
          );
        },
      },
      {
        header: "Email",
        accessorKey: "email",
        cell: ({ getValue }) => (
          <div className="flex items-center text-[#777777] text-[17px] font-[400] leading-[28px] tracking-[0%]  gap-2">
            <div
              className="p-2 rounded-full"
              style={{
                backgroundColor: "#E6F1F0",
                color: "#22756B",
              }}
            >
              <MdOutlineEmail />
            </div>
            <span>{getValue()}</span>
          </div>
        ),
      },
      {
        header: "Phone Number",
        accessorKey: "phone",
      },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />

      <div className="flex overflow-hidden flex-col flex-1">
        <Header />

        <div className="overflow-y-auto flex-1">
          <section className="p-7">
            <h1 className="font-bold text-3xl">User Management</h1>

            <div className="flex py-8 items-center justify-between">
              <h2 className="font-bold text-2xl">Users list</h2>
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 z-10 w-4 h-4 transform -translate-y-1/2  text-base-content/40" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-[452px] border-b input input-sm focus:outline-none focus:ring-0 focus:border-none"
                />
              </div>
            </div>

            {/* Table */}
            <table className="min-w-full table-auto">
              <thead className="">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-4 py-3 text-left font-bold text-gray-700"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-2 text-gray-800">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
