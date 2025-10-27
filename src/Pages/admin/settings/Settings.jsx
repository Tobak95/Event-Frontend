import React from "react";
import SideBar from "../../../component/admin/dashboard/SideBar";
import Header from "../../../component/common/Header";
import { useState } from "react";
import { notificationsList } from "../../../../data";
import AdminSettings from "./AdminSettings";
import ChangePasswordModal from "../../../component/ChangePasswordModal";

const Settings = () => {
  const [activeButton, setActiveButton] = useState("Account");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setFormData({ ...formData, image: file });
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const [toggles, setToggles] = useState(
    notificationsList.reduce((acc, item) => {
      acc[item.title] = true; // default ON
      return acc;
    }, {})
  );

  return (
    <div className="flex h-screen bg-base-200">
      <SideBar />
      <div className="flex overflow-hidden flex-col flex-1">
        <Header />
        <div className="overflow-y-auto flex-1">
          <section className=" relative">
           
              <div className="flex gap-5 p-7">
                <button
                  onClick={() => setActiveButton("Account")}
                  className={`text-[#999999] 
          ${
            activeButton === "Account"
              ? "text-black underline underline-offset-3  decoration-[#006F6A]"
              : ""
          }`}
                >
                  Account
                </button>

                <button
                  onClick={() => setActiveButton("Admin")}
                  className={` text-[#999999]  
          ${
            activeButton === "Admin"
              ? "text-black underline underline-offset-3  decoration-[#006F6A]"
              : ""
          }`}
                >
                  Admin
                </button>
              </div>

              {/* Super-Admin Page on te DashBoard to create Admins */}
              {activeButton === "Account" && (
                <article className="mt-5 pl-7">
                  {/* personal Information */}
                  <div className="flex">
                    <div className="w-[350px]">
                      <h5 className="text-[24px] font-[600]">
                        Personal information
                      </h5>
                      <p className="text-[14px]">
                        Upload your personal details and profile here
                      </p>
                    </div>
                    {/* upload image section */}
                    <div className="w-[1000px]">
                      <div className="flex gap-10 items-center">
                        <p className="text-[16px] mt-2"> Your Photo</p>

                        <div className="border-2 border-dashed border-[#6baba9] rounded-full h-[50px] w-[50px] flex flex-col items-center justify-center gap-[10px] relative overflow-hidden">
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-full object-cover rounded-full"
                            />
                          ) : (
                            <span className="text-[10px] text-center text-gray-400">
                              No image
                            </span>
                          )}
                        </div>

                        <label className="border border-[#006f6a] text-[#006f6a] px-[12px] py-[10px] rounded-[8px] mt-[5px] hover:bg-[#006f6a] hover:text-white transition-colors cursor-pointer inline-block bg-white/80 backdrop-blur-sm">
                          Upload Image
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>

                      {/* form section */}
                      <form className="mt-5">
                        <div>
                          <label
                            htmlFor="firstname"
                            className="text-[16px] font-[600] block"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            placeholder="Favour lokosu"
                            className="form-input mt-2"
                          />
                        </div>
                        <div className="my-5">
                          <label
                            htmlFor="Lastname"
                            className="text-[16px] font-[600] block"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            placeholder="Favour lokosu"
                            className="form-input mt-2"
                          />
                        </div>
                        <div className="flex items-center justify-between  ">
                          <div>
                            <label
                              htmlFor="Email address"
                              className="text-[16px] font-[600] block"
                            >
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="Favour lokosu"
                              className="form-input mt-2"
                            />
                          </div>

                          <div>
                            <button
                              className="text-white bg-[#006F6A] w-[156px] h-[48px] mt-8 rounded-[10px] "
                              onClick={() => setShowModal("profileChange")}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="flex mt-10">
                    <div className="w-[350px]">
                      <h5 className="text-[24px] font-[600]">
                        Email notification
                      </h5>
                    </div>
                    {/* upload image section */}
                    <div className="w-[1000px]">
                      {notificationsList.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between py-4"
                        >
                          <div>
                            <h3 className="font-medium text-gray-800">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>

                          {/* Toggle Switch */}
                          <button
                            onClick={() => toggleHandler(item.title)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                              toggles[item.title]
                                ? "bg-teal-600"
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                toggles[item.title]
                                  ? "translate-x-6"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex mt-5 ">
                    <div className="w-[350px]">
                      <h5 className="text-[24px] font-[600]">Security</h5>
                    </div>
                    {/* Password*/}
                    <div className="w-[1000px]">
                      <label htmlFor="Password" className="block">
                        Password
                      </label>
                      <div className="flex items-center justify-between">
                        <input
                          type="password"
                          placeholder="**********"
                          className="form-input my-4"
                        />
                        <button
                          className="text-[#006F6A]"
                          onClick={() => setShowModal("passwordChange")}
                        >
                          Change Password
                        </button>
                      </div>
                      <p>Last Changed</p>
                    </div>
                  </div>
                </article>
              )}

              {activeButton === "Admin" && (
                <article className="mt-5 pl-7">
                  <AdminSettings />
                </article>
              )}

            {showModal === "passwordChange" && (
              <ChangePasswordModal
                h2="Password Reset Successfully!"
                description="Your password has been reset successfully!"
                onContinue={() => setShowModal(null)}
              />
            )}

            {showModal === "profileChange" && (
              <ChangePasswordModal
                h2="Profile updated successfully"
                description="Your personal information has been uploaded successfully"
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
