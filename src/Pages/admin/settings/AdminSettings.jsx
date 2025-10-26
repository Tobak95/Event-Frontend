import React from 'react'
import { adminData } from '../../../../data'
import { useState } from 'react';


const AdminSettings = () => {
  const [admins, setAdmins] = useState(adminData);

  // 🔹 Function to remove an admin
  const removeAdmin = (id) => {
    setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin.id !== id));
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center my-6">
        <h2 className="text-[24px] font-[700] text-[#000000]">
          {admins.length} {""}   {""} Admins
        </h2>
        <button className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2">
          New Admin <span className="text-lg font-bold">+</span>
        </button>
      </div>

      <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-100">
          <tr className=" text-[#4A4A4A] font-normal">
            <th className="px-6 py-3">Admin’s User Names</th>
            <th className="px-6 py-3">User Email</th>
            <th className="px-6 py-3">Dates</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr
              key={admin.id}
              className="border-t border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="text-[#000000] font-bold text-[20px] px-6 py-5  ">
                {admin.name}
              </td>
              <td className="px-6 py-4">{admin.email}</td>
              <td className="px-6 py-4">{admin.date}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => removeAdmin(admin.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminSettings
