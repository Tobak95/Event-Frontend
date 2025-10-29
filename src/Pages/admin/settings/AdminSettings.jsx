import React from "react";
import { adminData } from "../../../../data";
import { useState, useEffect } from "react";
import RemoveAdminModal from "../../../component/RemoveAdmiModal";
import AddAdminForm from "../../../component/AddAdminForm";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../Utils/axiosInstance";
import { useAppContext } from "../../../Hooks/useAppContext";
import { RiseLoader } from "react-spinners";

const AdminSettings = () => {
  const [admins, setAdmins] = useState([]);
  const [showModal, setShowModal] = useState(null);
  const [id, setId] = useState("");
  const [addAdmin, setAddAdmin] = useState(false);

  const [loading, setLoading] = useState(false);
  const { user, token } = useAppContext();

  const removeAdmin = async (id) => {
    try {
      setLoading(true);
      const response = await axiosInstance.delete(`/auth/delete-admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);

      toast.success("Admin deleted successfully ✅");
      setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin._id !== id));
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to delete admin");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      getAllAdmin();
    }
  }, [token]);

  const getAllAdmin = async () => {
    setLoading(true);

    try {
      const response = await axiosInstance.get("/auth/all-admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (user.role !== "superAdmin") {
        toast.error("Forbidden: Unauthorized Access");
        1;
      }
      console.log(response.data.users);
      setAdmins(response.data.users);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="overflow-x-auto  h-screen px-5">
        <div className="flex justify-between items-center my-6">
          <h2 className="text-[24px] font-[700] text-[#000000]">
            {admins.length} Admins
          </h2>
          <button
            className="bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2"
            onClick={() => setAddAdmin(true)}
          >
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
                key={admin._id}
                className="border-t border-gray-100 hover:bg-gray-50 transition"
              >
                <td className="text-[#000000] font-bold text-[20px] px-6 py-5  ">
                  {admin.firstname} {admin.lastname}
                </td>
                <td className="px-6 py-4">{admin.email}</td>
                <td className="px-6 py-4">
                  {admin?.createdAt &&
                    new Date(admin.createdAt).toLocaleString("en-US", {
                      day: "numeric",
                      month: "short",
                      weekday: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setShowModal("removeAdmin");
                      setId(admin._id);
                    }}
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
      {showModal === "removeAdmin" && (
        <RemoveAdminModal
          h2="Remove Admin"
          description="Do you wish to remove this admin? This action cannot be undone."
          onContinue={() => setShowModal(null)}
          remove={showModal}
          onRemove={async () => {
            await removeAdmin(id);
            setShowModal("removed");
          }}
        />
      )}
      {showModal === "removed" && (
        <RemoveAdminModal
          h2="Admin Removed!"
          description="You have successfully removed admin"
          onContinue={() => setShowModal(null)}
          remove={showModal}
        />
      )}

      {addAdmin && <AddAdminForm onContinue={() => setAddAdmin(false)} />}
    </>
  );
};

export default AdminSettings;
