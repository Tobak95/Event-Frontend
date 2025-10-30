import React, { useState, useEffect } from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../Utils/axiosInstance";
import { useAppContext } from "../../../Hooks/useAppContext";
import Pagination from "../../../component/layout/Pagination";
import { RiseLoader } from "react-spinners";

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, token } = useAppContext();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (token) {
      getAllUsers();
    }
  }, [token]);
  // console.log("Token:", token);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/auth/all-users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (user.role !== "admin" && user.role !== "superAdmin") {
        toast.error("Forbidden: for admins only");
        1;
      }

      console.log(response.data.users);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };


  const data = React.useMemo(() => users, [users]);

  const filteredData = React.useMemo(() => {
    return users.filter((user) => {
      const query = searchQuery.toLowerCase();
      return (
        user?.firstname?.toLowerCase().includes(query) ||
        user?.email?.toLowerCase().includes(query) ||
        user?.phoneNumber?.toLowerCase().includes(query)
      );
    });
  }, [users, searchQuery]);

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  const columns = React.useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "firstname",
        cell: ({ row }) => {
          const firstName = row.original.firstname || "";
          const lastName = row.original.lastname || "";
          return (
            <span className="text-[20px] font-medium">{`${firstName} ${lastName}`}</span>
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
        accessorKey: "phoneNumber",
      },
    ],
    []
  );

  const table = useReactTable({
    data: paginatedData,
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
              <h2 className="font-bold text-2xl">Users List</h2>
              <div className="relative w-full max-w-md">
                <FaSearch className="absolute left-3 top-1/2 z-10 w-4 h-4 transform -translate-y-1/2 text-base-content/40" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 w-[452px] border-b input input-sm focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <table className="min-w-full table-auto">
              <thead>
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









                {loading ? (
                  <tr>
                    <td colSpan="100%" className="text-center py-8">
                       <div className="flex items-center justify-center mt-50 ">
                            <RiseLoader size={20} color="#006F6A" />
                          </div>
                    </td>
                  </tr>
                ) : paginatedData.length === 0 ? (
                  <tr>
                    <td
                      colSpan="100%"
                      className="text-center py-8 text-[#777777]"
                    >
                      No users found
                    </td>
                  </tr>
                ) : (
                  table.getRowModel().rows.map((row) => (
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
                  ))
                )}
              </tbody>
            </table>

            {totalPages > 1 && (
              <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
