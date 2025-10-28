// src/pages/admin/create-events/CreateTicket.jsx
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdAdd } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEventContext } from "./useEventContext";
import TicketCard from "./TicketCard";
import ProgressSteps from "./ProgressSteps";

export default function CreateTicket({ onBack, onContinue }) {
  const { event, setEvent } = useEventContext();
  const [imagePreview, setImagePreview] = useState(null);

  // ✅ Validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ticket name is required"),
    type: Yup.string()
      .oneOf(["paid", "free"], "Invalid ticket type")
      .required("Ticket type is required"),
    price: Yup.number()
      .when("type", {
        is: "paid",
        then: (schema) => schema.required("Price is required for paid tickets"),
        otherwise: (schema) => schema.optional(),
      })
      .typeError("Price must be a number"),
    quantityAvailable: Yup.number()
      .required("Quantity is required")
      .positive("Must be greater than 0")
      .integer(),
    maxPerOrder: Yup.number()
      .required("Max per order is required")
      .positive("Must be greater than 0")
      .integer(),
    description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "paid",
      price: "",
      quantityAvailable: "",
      maxPerOrder: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newTicket = { ...values, price: Number(values.price) || 0 };
      setEvent((prev) => ({
        ...prev,
        tickets: [...(prev.tickets || []), newTicket],
      }));
      resetForm();
    },
  });

  useEffect(() => {
    if (!event?.image) {
      setImagePreview(null);
      return;
    }
    if (typeof event.image === "string") {
      setImagePreview(event.image);
      return;
    }
    const url = URL.createObjectURL(event.image);
    setImagePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [event?.image]);

  return (
    <div className="flex-1 overflow-y-auto bg-white border-l border-[#8b8b8b]">
      <div className="max-w-[1107px] mx-auto px-[30px] py-[40px]">
        {/* Progress Steps */}
        <div className="mb-[50px]">
          <ProgressSteps
            currentStep={2}
            onBack={() => setCurrentStep(currentStep - 1)}
          />
        </div>

        {/* Ticket Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-[35px]">
          <div className="space-y-[25px]">
            {/* Ticket Name & Type */}
            <div className="flex justify-between gap-[31px]">
              <div className="flex-1 max-w-[508px] space-y-[12px]">
                <label className="text-black text-[20px]">Ticket Name</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter ticket name"
                  className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#333] text-[16px] outline-none border border-[#dbdbdb]"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>

              <div className="flex-1 max-w-[508px] space-y-[12px]">
                <label className="text-black text-[20px]">Ticket Type</label>
                <select
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#333] text-[16px] outline-none border border-[#dbdbdb]"
                >
                  <option value="">Select type</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
                {formik.touched.type && formik.errors.type && (
                  <p className="text-red-500 text-sm">{formik.errors.type}</p>
                )}
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="flex justify-between gap-[31px]">
              <div className="flex-1 max-w-[508px] space-y-[12px]">
                <label className="text-black text-[20px]">Price</label>
                <input
                  type="number"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={
                    formik.values.type === "free" ? "N/A" : "Enter price"
                  }
                  disabled={formik.values.type === "free"}
                  className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#333] text-[16px] outline-none border border-[#dbdbdb]"
                />
                {formik.touched.price && formik.errors.price && (
                  <p className="text-red-500 text-sm">{formik.errors.price}</p>
                )}
              </div>

              <div className="flex-1 max-w-[508px] space-y-[12px]">
                <label className="text-black text-[20px]">
                  Quantity Available
                </label>
                <input
                  type="number"
                  name="quantityAvailable"
                  value={formik.values.quantityAvailable}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter quantity"
                  className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#333] text-[16px] text-start outline-none border border-[#dbdbdb]"
                />
                {formik.touched.quantityAvailable &&
                  formik.errors.quantityAvailable && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.quantityAvailable}
                    </p>
                  )}
              </div>
            </div>

            {/* Description & Max per Order */}
            <div className="flex gap-[25px]">
              <div className="w-[508px] space-y-[12px]">
                <label className="text-black text-[20px]">Description</label>
                <textarea
                  name="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter description"
                  className="w-full h-[116px] bg-neutral-100 rounded-[8px] px-[15px] py-[10px] text-[#333] text-[16px] outline-none border border-[#dbdbdb] resize-none"
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.description}
                  </p>
                )}
              </div>

              <div className="w-[508px] space-y-[12px]">
                <label className="text-black text-[20px]">
                  Max Tickets per Order
                </label>
                <input
                  type="number"
                  name="maxPerOrder"
                  value={formik.values.maxPerOrder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter max per order"
                  className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#333] text-[16px] outline-none border border-[#dbdbdb]"
                />
                {formik.touched.maxPerOrder && formik.errors.maxPerOrder && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.maxPerOrder}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Add Ticket Button */}
          <button
            type="submit"
            className="flex items-center gap-[7px] text-[#006f6a] hover:opacity-80 transition-opacity"
          >
            <MdAdd size={32} className="text-[#006f6a]" />
            <span className="text-[20px]">Add Ticket</span>
          </button>
        </form>

        {/* Tickets Preview */}
        <div className="space-y-[35px] mt-[50px]">
          {event.tickets && event.tickets.length > 0 ? (
            event.tickets.map((ticket, i) => (
              <TicketCard
                key={i}
                name={ticket.name} // ticket name
                type={ticket.type} // paid / free
                price={
                  ticket.type === "free"
                    ? "Free"
                    : `$${ticket.price.toFixed(2)}`
                }
                eventName={event.title || "Untitled Event"}
                location={event.address || "No location"}
                date={
                  event.startDate
                    ? `${event.startDate} — ${event.endDate || ""}`
                    : "Date not set"
                }
                image={imagePreview}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 text-[20px]">
              No tickets added yet.
            </p>
          )}
        </div>

        {/* Continue / Back */}
        <div className="flex gap-[20px] mt-[50px]">
          <button
            onClick={onBack}
            className="border border-[#4a4a4a] text-[#161616] text-[20px] px-[16px] py-[16px] rounded-[8px] w-[300px] hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className="bg-[#006f6a] text-white text-[20px] px-[16px] py-[16px] rounded-[8px] w-[310px] hover:bg-[#005a56] transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
