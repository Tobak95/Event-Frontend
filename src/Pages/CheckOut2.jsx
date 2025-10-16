import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import BrandLogo from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

const CheckOut2 = () => {
  const navigate = useNavigate();

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

  const [timer, setTimer] = useState(600);
  const [errors, setErrors] = useState({});
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      clearTicketCart();
      navigate("/");
    }
  }, [timer, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const clearTicketCart = () => {
    console.log("Clearing ticket cart...");
  };

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

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscountCode = () => {
    if (discountCode.trim()) {
      setDiscountApplied(true);
      console.log("Discount code applied:", discountCode);
    }
  };

  const removeDiscountCode = () => {
    setDiscountCode("");
    setDiscountApplied(false);
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
      console.log("Form submitted successfully");
    }
  };

  const ticketTypes = [
    { id: "regular", name: "Regular", price: 100 },
    { id: "vip", name: "VIP", price: 200 },
    { id: "vvip", name: "VVIP", price: 300 },
  ];

  const ticketQuantities = {
    regular: 1,
    vip: 0,
    vvip: 0,
  };

  const calculateSubtotal = () => {
    return Object.keys(ticketQuantities).reduce((total, ticketId) => {
      const ticket = ticketTypes.find((t) => t.id === ticketId);
      return total + (ticketQuantities[ticketId] || 0) * ticket.price;
    }, 0);
  };

  const fee = 10;
  const subtotal = calculateSubtotal();
  const discount = discountApplied ? 5 : 0;
  const total = subtotal + fee - discount;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 ">
      <Link to={"/"}>
        <div className="flex items-center gap-3 mb-12">
          <img src={BrandLogo} alt="Logo" className="h-8" />
        </div>
      </Link>

      <div className="flex items-center gap-2 mb-4 lg:w-[503px] w-[303px] text-[#1B1B1B]">
        <Link to={"/checkout1"}>
          <FaArrowLeft className=" text-[20px] lg:text-[30px] cursor-pointer" />
        </Link>
        <h2 className="text-[20px] lg:text-[35px] font-[700]">
          Contact Information
        </h2>
      </div>

      <div className="bg-[#E6F1F0] rounded-[10px] text-center text-[12px] lg:text-[24px] text-[#4A4A4A]  mb-6 w-full lg:h-[65px] h-[60px] p-3 flex items-center justify-center font-medium">
        <p>
          We have reserved your tickets. Please complete checkout within{" "}
          <span className="font-bold text-[#006F6A]">{formatTime(timer)}</span>{" "}
          to secure your tickets
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row md:gap-46 justify-between"
      >
        {/* LEFT SIDE */}
        <div className="space-y-4 w-full md:w-[60%]">
          {[
            {
              label: "First name",
              name: "firstName",
              type: "text",
              placeholder: "Adesina ",
            },
            {
              label: "Last name",
              name: "lastName",
              type: "text",
              placeholder: "Rabiu",
            },
            {
              label: "Email address",
              name: "email",
              type: "email",
              placeholder: "Adesinarabiu@gmail.com",
            },
            {
              label: "Confirm email address",
              name: "confirmEmail",
              type: "email",
              placeholder: "Confirm email address",
            },
          ].map((field) => (
            <div className="mb-4" key={field.name}>
              <label className="block font-medium text-[#1B1B1B] text-[13px] lg:text-[18px] ">
                <span className="text-[#006F6A] text-[12px] lg:text-[24px] font-medium">
                  *
                </span>{" "}
                {field.label}
              </label>
              <input
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full lg:w-[507px] h-[56px] border-[0.5px] border-[#969595] outline-0 rounded-[2.44px] lg:rounded-[6px] p-[10px] text-[12px] lg:text-[16px] placeholder:text-[#928A83] placeholder:font-[400]"
              />
              {errors[field.name] && (
                <p className="text-sm text-red-600 mt-1">{errors.field.name}</p>
              )}
            </div>
          ))}

          <div className="mb-4">
            <label className="block font-medium text-[#1B1B1B] text-[13px] lg:text-[18px]">
              <span className="text-[#006F6A] text-[12px] lg:text-[24px] font-medium">
                *
              </span>{" "}
              Phone number
            </label>
            <div className="flex gap-[17px] mt-1">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border-[0.5px] border-[#969595] rounded=[2.44px] rounded-[6px] w-[58px] lg:w-[93px] p-[10px] text-[#1B1B1B] text-[12px] lg:text-[16px] font-[700]"
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
                className=" p-[10px] text-[12px] lg:text-[16px]  w-[397px] h-[56px] border-[0.5px] border-[#969595] rounded=[2.44px] rounded-[6px] placeholder:text-[#777777] placeholder:font-[400] outline-0"
                placeholder="7088305667"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <p className="lg:font-medium font-[700] text-[12px] lg:text-[18px] text-[#4A4A4A] mb-6  lg:mb-4">
              Send ticket to different email addresses?
            </p>
            <p className="text-[11px] lg:text-[14px] text-gray-700 font-[400] mb-4 flex items-center gap-3">
              <AiTwotoneExclamationCircle className="lg:w-[28px] lg:h-[28px] w-[15px] h-[15px]" />{" "}
              Tickets will only be sent to the email address you provide here
            </p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-[#4A4A4A] lg:text-[16px] text-[12px] ">
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
                  className="border accent-green-400 border-green-400 w-[14px] h-[14px] lg:w-[32px] lg:h-[32px]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-[#4A4A4A] lg:text-[16px] text-[12px]">
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
                  className="border border-green-400 w-[14px] h-[14px] lg:w-[30px] lg:h-[30px] accent-green-400"
                />
                No
              </label>
            </div>
          </div>

          {formData.sendToDifferentEmail && (
            <div className="mb-4">
              <label className="block font-medium text-[#1B1B1B] text-[13px] lg:text-[18px]">
                Other Email Address
              </label>
              <input
                type="email"
                name="otherEmail"
                value={formData.otherEmail}
                onChange={handleChange}
                className="w-full lg:w-[507px] h-[56px] border-[0.5px] border-[#969595] outline-0 rounded-[2.44px] lg:rounded-[6px] p-[10px] text-[12px] lg:text-[16px] placeholder:text-[#928A83] placeholder:font-[400]"
              />
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-[357px] h-auto border border-[#E9E9E9] bg-[#FFFFFF] rounded-[9.24px] lg:rounded-[10px] p-[13.86px] lg:p-[15px] shadow-sm">
          <div className="sticky top-6">
            <h3 className="text-[21.06px] lg:text-[22.79px] font-[700] text-[#191919] mb-6 text-center">
              RAVEOLUTION
            </h3>

            <div className="space-y-7 mb-8">
              {ticketTypes.map(
                (ticket) =>
                  (ticketQuantities[ticket.id] || 0) > 0 && (
                    <div
                      key={ticket.id}
                      className="flex justify-between text-[#4A4A4A]"
                    >
                      <span className="text-[16px] font-medium">
                        {ticketQuantities[ticket.id] || 0}x {ticket.name}
                      </span>
                      <span className="font-[700] text-[#4A4A4A] text-[17.09px] ">
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
                  <div className="flex justify-between pt-5 border-t border-[#E9E9E9]">
                    <span className="text-[16px] font-medium">Fee</span>
                    <span className="font-[700] text-[#4A4A4A] text-[17.09px] ">
                      ${fee.toLocaleString()}
                    </span>
                  </div>

                  {discountApplied && (
                    <div className="flex justify-between pt-2 text-green-600">
                      <span className="text-[16px] font-medium">Discount</span>
                      <span className="font-[700] text-[17.09px]">
                        -${discount.toLocaleString()}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm pt-5 ">
                    <span className="text-[16px] font-medium">Subtotal</span>
                    <span className="font-[700] text-[#4A4A4A] text-[17.09px] ">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                </>
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              {/* Discount Code Section */}
              <div className="mb-4">
                <label className="block text-[14px] font-medium text-[#4A4A4A] mb-2">
                  Discount Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                    placeholder="Enter discount code"
                    className="flex-1 h-[40px] border-[0.5px] border-[#969595] rounded-[6px] p-[10px] text-[14px] outline-0"
                    disabled={discountApplied}
                  />
                  {discountApplied ? (
                    <button
                      type="button"
                      onClick={removeDiscountCode}
                      className="h-[40px] px-4 bg-red-600 text-white rounded-[6px] text-[14px] font-medium"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={applyDiscountCode}
                      className="h-[40px] px-4 bg-[#006F6A] text-white rounded-[6px] text-[14px] font-medium"
                    >
                      Apply
                    </button>
                  )}
                </div>
                {discountApplied && (
                  <p className="text-green-600 text-[12px] mt-1">
                    Discount code applied successfully!
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-[#4A4A4A] text-[16px] font-[700]">
                  TOTAL
                </span>
                <span className="text-[#4A4A4A] text-[17px] font-[700]">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[72px] lg:h-[48px] bg-[#006F6A] text-[20px] font-[700] rounded-[7.39px] lg:rounded-[8px] text-[#FFFFFF] hover:bg-[#005a55] transition-colors"
            >
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut2;
