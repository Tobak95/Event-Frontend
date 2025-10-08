import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import BrandLogo from "../assets/logo2.png";

const CheckOut2 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    countryCode: "+234",
    sendToDifferentEmail: false,
    otherEmail: "",
  });

  const [timer, setTimer] = useState(600); // 10 mins
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};
    if (formData.email !== formData.confirmEmail) {
      tempErrors.confirmEmail = "Emails do not match";
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert("Form submitted!");
    }
  };

  const ticketTypes = [
    { id: "regular", name: "Regular", price: 10000 },
    { id: "vip", name: "VIP", price: 20000 },
    { id: "vvip", name: "VVIP", price: 50000 },
  ];

  // Example ticket quantities (you can later update with state/props)
  const ticketQuantities = {
    regular: 1,
    vip: 0,
    vvip: 0,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <img src={BrandLogo} alt="Logo" className="h-8" />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <FaArrowLeft className="text-gray-600 cursor-pointer" />
        <h2 className="text-2xl font-semibold">Contact Information</h2>
      </div>

      {/* TIMER BANNER */}
      <div className="bg-[#E6F1F0] rounded-lg text-center text-sm text-[#4A4A4A] p-3 mb-6">
        We have reserved your tickets. Please complete checkout within{" "}
        <span className="font-bold text-[#006F6A]">{formatTime(timer)}</span> to
        secure your tickets.
      </div>

      {/* MAIN FORM LAYOUT */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:gap-46 justify-between"
      >
        {/* LEFT SIDE */}
        <div className="space-y-4 w-full md:w-[60%]">
          {[
            { label: "First name", name: "firstName", type: "text" },
            { label: "Last name", name: "lastName", type: "text" },
            { label: "Email address", name: "email", type: "email" },
            {
              label: "Confirm email address",
              name: "confirmEmail",
              type: "email",
            },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block font-medium text-sm">
                <span className="text-green-700">*</span> {field.label}
              </label>
              <input
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              {errors[field.name] && (
                <p className="text-sm text-red-600 mt-1">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}

          {/* Phone */}
          <div className="mb-4">
            <label className="block font-medium text-sm">
              <span className="text-green-700">*</span> Phone number
            </label>
            <div className="flex gap-2 mt-1">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="+234">+234</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Radio Buttons */}
          <div className="mb-4">
            <p className="font-medium text-sm mb-2">
              Send ticket to different email addresses?
            </p>
            <p className="text-xs text-gray-500 mb-2">
              Tickets will only be sent to the email address you provide here
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sendToDifferentEmail"
                  checked={formData.sendToDifferentEmail === true}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      sendToDifferentEmail: true,
                    }))
                  }
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sendToDifferentEmail"
                  checked={formData.sendToDifferentEmail === false}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      sendToDifferentEmail: false,
                    }))
                  }
                />
                No
              </label>
            </div>
          </div>

          {formData.sendToDifferentEmail && (
            <div className="mb-4">
              <label className="block font-medium text-sm">
                Other Email Address
              </label>
              <input
                type="email"
                name="otherEmail"
                value={formData.otherEmail}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[40%]">
          <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 sticky top-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
              RAVEOLUTION
            </h3>

            <div className="space-y-3 mb-4">
              {ticketTypes.map(
                (ticket) =>
                  (ticketQuantities[ticket.id] || 0) > 0 && (
                    <div
                      key={ticket.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-600">
                        {ticketQuantities[ticket.id] || 0}x {ticket.name}
                      </span>
                      <span className="font-medium text-[#4A4A4A] text-[14px] ">
                        $
                        {(
                          (ticketQuantities[ticket.id] || 0) * ticket.price
                        ).toLocaleString()}
                      </span>
                    </div>
                  )
              )}

              {(ticketQuantities.regular > 0 ||
                ticketQuantities.vip > 0 ||
                ticketQuantities.vvip > 0) && (
                <>
                  <div className="flex justify-between text-sm pt-5 border-t border-gray-200">
                    <span className="text-[#4A4A4A]">Fee</span>
                    <span className="font-medium text-[#4A4A4A] text-[14px]">
                      $1,000
                    </span>
                  </div>

                  <div className="flex justify-between text-sm pt-5 ">
                    <span className="text-[#4A4A4A]">Subtotal</span>
                    <span className="font-medium text-[#4A4A4A] text-[14px]">
                      $1,000
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="mb-4">
                <p className="text-[14px] border border-gray-300 p-3 rounded-lg text-gray-600 text-center">
                  Discount codes are now added at payment step
                </p>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span className="text-[#4A4A4A] text-[17px]">TOTAL</span>
                <span className="text-[#4A4A4A] text-[17px]">$12,000</span>
              </div>
            </div>

            <button className="w-full bg-[#006F6A] text-white py-3 px-4 rounded-md font-semibold">
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut2;
