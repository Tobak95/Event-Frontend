import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { MdKeyboardArrowDown, MdAdd, MdEdit, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export default function CreateTicket({
  onBack,
  onContinue,
  formData = { tickets: [] },
  setFormData = () => {},
}) {
  const [ticket, setTicket] = useState({
    name: "",
    type: "",
    startDate: "",
    endDate: "",
    price: "",
    quantityAvailable: "",
    maxPerOrder: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // ✅ Validate ticket fields before saving
  const validateTicket = () => {
    if (!ticket.name.trim()) return "Ticket name is required.";
    if (!ticket.type.trim()) return "Ticket type is required.";
    if (ticket.type === "paid" && !ticket.price)
      return "Price is required for paid tickets.";
    if (!ticket.startDate) return "Start date is required.";
    if (!ticket.endDate) return "End date is required.";
    if (new Date(ticket.startDate) > new Date(ticket.endDate))
      return "Start date cannot be after end date.";
    if (!ticket.quantityAvailable) return "Quantity available is required.";
    if (!ticket.maxPerOrder) return "Max per order is required.";
    return null;
  };

  // ✅ Add or Update Ticket
  const handleAddOrUpdateTicket = (e) => {
    e.preventDefault();
    const error = validateTicket();
    if (error) {
      toast.error(error);
      return;
    }

    const updatedTickets = [...(formData.tickets || [])];

    if (editingIndex !== null) {
      updatedTickets[editingIndex] = ticket;
      toast.success("Ticket updated successfully!");
      setEditingIndex(null);
    } else {
      updatedTickets.push(ticket);
      toast.success("Ticket added successfully!");
    }

    setFormData({ ...formData, tickets: updatedTickets });

    // Reset form
    setTicket({
      name: "",
      type: "",
      startDate: "",
      endDate: "",
      price: "",
      quantityAvailable: "",
      maxPerOrder: "",
    });
  };

  // ✏️ Edit Ticket
  const handleEdit = (index) => {
    setTicket(formData.tickets[index]);
    setEditingIndex(index);
  };

  // 🗑️ Delete Ticket
  const handleDelete = (index) => {
    const updatedTickets = formData.tickets.filter((_, i) => i !== index);
    setFormData({ ...formData, tickets: updatedTickets });
    toast.info("Ticket deleted.");
  };

  return (
    <div className="min-h-screen bg-white p-[30px]">
      <button
        onClick={onBack}
        className="text-[#777777] text-[20px] font-[400] flex items-center gap-1 ml-3"
      >
        <FaLessThan size={20} /> Back
      </button>

      <div className="max-w-[1107px] mx-auto">
        <div className="mb-[50px]">
          <ProgressSteps currentStep={2} />
        </div>

        <div className="space-y-[45px]">
          {/* Ticket Form */}
          <div className="bg-white rounded-[10px] border border-[#777777] shadow-[0px_20px_46px_0px_rgba(0,0,0,0.08)] p-[30px]">
            <form onSubmit={handleAddOrUpdateTicket} className="space-y-[35px]">
              <div className="space-y-[25px]">
                <div className="flex gap-[21px]">
                  {/* Ticket Name */}
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Ticket Name</label>
                    <select
                      value={ticket.name}
                      onChange={(e) =>
                        setTicket({ ...ticket, name: e.target.value })
                      }
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    >
                      <option value="">Select ticket name</option>
                      <option value="Regular">Regular</option>
                      <option value="VIP">VIP</option>
                      <option value="VVIP">VVIP</option>
                    </select>
                  </div>

                  {/* Ticket Type */}
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Ticket Type</label>
                    <div className="relative">
                      <select
                        value={ticket.type}
                        onChange={(e) =>
                          setTicket({ ...ticket, type: e.target.value })
                        }
                        className="appearance-none w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                      >
                        <option value="">Select ticket type</option>
                        <option value="paid">Paid</option>
                        <option value="free">Free</option>
                      </select>
                      <MdKeyboardArrowDown
                        size={24}
                        className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#777777]"
                      />
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-[12px]">
                  <label className="text-black">Ticket Availability</label>
                  <div className="flex gap-[21px]">
                    <input
                      type="date"
                      value={ticket.startDate}
                      onChange={(e) =>
                        setTicket({ ...ticket, startDate: e.target.value })
                      }
                      className="flex-1 bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                    <input
                      type="date"
                      value={ticket.endDate}
                      onChange={(e) =>
                        setTicket({ ...ticket, endDate: e.target.value })
                      }
                      className="flex-1 bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                  </div>
                </div>

                {/* Price & Quantity */}
                <div className="flex gap-[21px]">
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Price</label>
                    <input
                      type="number"
                      placeholder="$"
                      value={ticket.price}
                      onChange={(e) =>
                        setTicket({ ...ticket, price: e.target.value })
                      }
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-black outline-none border border-[#dbdbdb]"
                    />
                  </div>

                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Quantity Available</label>
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      value={ticket.quantityAvailable}
                      onChange={(e) =>
                        setTicket({
                          ...ticket,
                          quantityAvailable: e.target.value,
                        })
                      }
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                  </div>
                </div>

                {/* Max Per Order */}
                <div className="w-1/2 pr-[10.5px] space-y-[12px]">
                  <label className="text-black">Max Tickets per Order</label>
                  <input
                    type="number"
                    placeholder="Enter quantity"
                    value={ticket.maxPerOrder}
                    onChange={(e) =>
                      setTicket({ ...ticket, maxPerOrder: e.target.value })
                    }
                    className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center gap-[7px] text-[#006f6a] hover:opacity-80 transition-opacity"
              >
                <MdAdd size={32} className="text-[#006f6a]" />
                <span>
                  {editingIndex !== null
                    ? "Update Ticket"
                    : "Create New Ticket"}
                </span>
              </button>
            </form>

            {/* ✅ Ticket List */}
            {Array.isArray(formData.tickets) && formData.tickets.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium mb-3">Added Tickets:</h4>
                <ul className="space-y-2">
                  {formData.tickets.map((ticket, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 mb-2"
                    >
                      <div>
                        <p className="font-medium">{ticket.name}</p>
                        <p className="text-sm text-gray-500 capitalize">
                          {ticket.type} • ${ticket.price}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          const updatedTickets = formData.tickets.filter(
                            (_, i) => i !== index
                          );
                          setFormData({ ...formData, tickets: updatedTickets });
                          toast.info(`Removed ${ticket.name}`);
                        }}
                        className="text-red-600 hover:text-red-800 text-sm border border-red-600 rounded px-2 py-1 transition-colors"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-[20px]">
            <button
              onClick={onBack}
              className="border border-[#4a4a4a] text-[#161616] px-[16px] py-[16px] rounded-[8px] w-[300px] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onContinue}
              className="bg-[#006f6a] text-white px-[16px] py-[16px] rounded-[8px] w-[310px] hover:bg-[#005a56] transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Progress Steps Component
function ProgressSteps({ currentStep }) {
  const steps = [
    { number: 1, label: "Create New Event" },
    { number: 2, label: "Create Ticket" },
    { number: 3, label: "Summary" },
  ];

  return (
    <div className="space-y-[15px]">
      <div className="relative h-[22px] flex items-center">
        <div className="absolute w-full flex items-center">
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#006F6A]"></div>
          </div>
          <div className="flex items-center" style={{ width: "50%" }}>
            <div className="w-full h-[1px] bg-[#8E8E8E]"></div>
          </div>
        </div>

        <div className="absolute w-full flex justify-between items-center px-[11px]">
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10"></div>
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] z-10"></div>
          <div className="w-[22px] h-[22px] rounded-full bg-white border-2 border-[#2B8783] z-10"></div>
        </div>
      </div>

      <div className="flex justify-between">
        {steps.map((step) => (
          <div
            key={step.number}
            className="text-center"
            style={{ width: "33.33%" }}
          >
            <p className="text-[#161616]">{step.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
