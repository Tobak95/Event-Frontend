import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance } from "../../../Utils/axiosInstance";
import { useAppContext } from "../../../Hooks/useAppContext";

export default function EditEvent() {
  const { id } = useParams(); // get event ID from URL
  const navigate = useNavigate();
  const { token, user } = useAppContext();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    capacity: "",
    perks: "",
    startDate: "",
    endDate: "",
    address: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  // ✅ Fetch event data on mount
  const fetchSingleEvent = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/eventra/single-event/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const event = res.data.event;

      setFormData({
        title: event.title || "",
        description: event.description || "",
        category: event.category || "",
        capacity: event.capacity || "",
        perks: event.perks || "",
        startDate: event.startDate?.split("T")[0] || "",
        endDate: event.endDate?.split("T")[0] || "",
        address: event.address || "",
        image: event.image || null,
      });
    } catch (error) {
      console.error("Error fetching event:", error);
      toast.error(error.response?.data?.message || "Failed to load event");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && token) {
      fetchSingleEvent();
    }
  }, [id, token]);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setFormData((prev) => ({ ...prev, image: file }));
  };

  // ✅ Handle Update API call
  const handleUpdate = async () => {
    try {
      setLoading(true);
      const data = new FormData();

      // Append valid fields only
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== undefined) {
          data.append(key, formData[key]);
        }
      });

      // ✅ Add user info if needed
      if (user?._id) data.append("updatedBy", user._id);

      const response = await axiosInstance.patch(
        `/eventra/update-event/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(response.data.message || "Event updated successfully!");
      navigate("/dashboard/admin/events");
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error(error.response?.data?.message || "Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />
      <div className="flex overflow-hidden flex-col flex-1">
        <Header />
        <div className="overflow-y-auto flex-1">
          <div className="space-y-[50px] p-6">
            {loading ? (
              <div className="text-center py-10 text-[#006F6A] font-semibold">
                Loading event details...
              </div>
            ) : (
              <>
                {/* IMAGE UPLOAD */}
                <div className="flex gap-[30px]">
                  <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px] w-[560px]">
                    <div className="mb-[22px]">
                      <h2 className="text-[#1b1b1b] mb-[5px]">Event Image</h2>
                      <p className="text-[#777777]">Upload a cover image</p>
                    </div>
                    <div className="border border-[#6baba9] rounded-[10px] h-[351px] overflow-hidden relative">
                      {formData.image ? (
                        <img
                          src={
                            formData.image instanceof File
                              ? URL.createObjectURL(formData.image)
                              : formData.image
                          }
                          alt="Event"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <p className="text-gray-400 text-center mt-20">
                          No image selected
                        </p>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* EVENT DETAILS */}
                  <div className="flex-1 space-y-[22px]">
                    <div>
                      <h2 className="text-[#1b1b1b] mb-[5px]">Event Details</h2>
                      <p className="text-[#777777]">
                        Basic information about the event
                      </p>
                    </div>

                    <div className="space-y-[7px]">
                      <label className="text-[#1b1b1b]">Event Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none"
                      />
                    </div>

                    <div className="space-y-[7px]">
                      <label className="text-[#1b1b1b]">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* PERKS */}
                <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                  <div className="mb-[22px]">
                    <h2 className="text-[#1b1b1b] mb-[5px]">Perks</h2>
                    <p className="text-[#777777]">Moments you won’t forget.</p>
                  </div>

                  <div className="flex gap-[22px] mb-[22px]">
                    <div className="flex-1 space-y-[7px]">
                      <label className="text-[#1b1b1b]">Category</label>
                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none"
                      />
                    </div>

                    <div className="flex-1 space-y-[7px]">
                      <label className="text-[#1b1b1b]">Capacity</label>
                      <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#4a4a4a] outline-none"
                      />
                    </div>
                  </div>

                  <textarea
                    name="perks"
                    value={formData.perks}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px] text-[#777777] outline-none resize-none"
                  />
                </div>

                {/* DATE & TIME */}
                <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                  <div className="flex gap-[22px]">
                    <div className="flex-1 space-y-[7px]">
                      <label>Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px]"
                      />
                    </div>
                    <div className="flex-1 space-y-[7px]">
                      <label>End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px]"
                      />
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="bg-white border border-[#e7e7e7] rounded-[10px] p-[30px]">
                  <div className="space-y-[7px]">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-neutral-100 rounded-[10px] px-[20px] py-[16px]"
                    />
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-end gap-[20px]">
                  <button
                    onClick={() => navigate(-1)}
                    className="border border-[#4a4a4a] text-[#161616] px-[16px] py-[16px] rounded-[8px] w-[300px] hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    disabled={loading}
                    className="bg-[#006f6a] text-white px-[16px] py-[16px] rounded-[8px] w-[310px] hover:bg-[#005a56]"
                  >
                    {loading ? "Updating..." : "Update"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
