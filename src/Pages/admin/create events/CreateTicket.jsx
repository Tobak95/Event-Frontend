import React, { useState } from "react";
import { MdKeyboardArrowDown, MdAdd } from "react-icons/md";
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

  const handleAddTicket = (e) => {
    e?.preventDefault?.();
    if (!ticket.name || !ticket.price) {
      toast.error("Please fill in at least ticket name and price.");
      return;
    }

    setFormData({
      ...formData,
      tickets: [...(formData.tickets || []), ticket],
    });

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

  return (
    <div className="min-h-screen bg-white p-[30px]">
      <div className="max-w-[1107px] mx-auto">
        <div className="mb-[50px]">
          <ProgressSteps currentStep={2} />
        </div>

        <div className="space-y-[45px]">
          <div className="bg-white rounded-[10px] border border-[#777777] shadow-[0px_20px_46px_0px_rgba(0,0,0,0.08)] p-[30px]">
            <div className="space-y-[35px]">
              <div className="space-y-[25px]">
                <div className="flex gap-[21px]">
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Ticket Name </label>
                    <input
                      type="text"
                      placeholder="Enter ticket name"
                      value={ticket.name}
                      onChange={(e) =>
                        setTicket({ ...ticket, name: e.target.value })
                      }
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                  </div>

                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Ticket type</label>
                    <div className="relative">
                      <select
                        value={ticket.type}
                        onChange={(e) =>
                          setTicket({ ...ticket, type: e.target.value })
                        }
                        className="appearance-none w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                      >
                        <option value="">Select ticket type</option>
                        <option value="Paid">Paid</option>
                        <option value="Free">Free</option>
                      </select>

                      {/* <input
                        type="text"
                        placeholder="Paid"
                        value={ticket.type}
                        onChange={(e) =>
                          setTicket({ ...ticket, type: e.target.value })
                        }
                        className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                      /> */}
                      <MdKeyboardArrowDown
                        size={24}
                        className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#777777]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-[12px]">
                  <label className="text-black">Ticket availability</label>
                  <div className="flex gap-[21px]">
                    <input
                      type="date"
                      placeholder="Enter start date"
                      value={ticket.startDate}
                      onChange={(e) =>
                        setTicket({ ...ticket, startDate: e.target.value })
                      }
                      className="flex-1 bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                    <input
                      type="date"
                      placeholder="Enter end date"
                      value={ticket.endDate}
                      onChange={(e) =>
                        setTicket({ ...ticket, endDate: e.target.value })
                      }
                      className="flex-1 bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-[#777777] text-center outline-none border border-[#dbdbdb]"
                    />
                  </div>
                </div>

                <div className="flex gap-[21px]">
                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Price</label>
                    <input
                      type="text"
                      placeholder="$"
                      value={ticket.price}
                      onChange={(e) =>
                        setTicket({ ...ticket, price: e.target.value })
                      }
                      className="w-full bg-neutral-100 rounded-[8px] px-[15px] py-[18px] text-black outline-none border border-[#dbdbdb]"
                    />
                  </div>

                  <div className="flex-1 space-y-[12px]">
                    <label className="text-black">Quantity available</label>
                    <input
                      type="text"
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

                <div className="w-1/2 pr-[10.5px] space-y-[12px]">
                  <label className="text-black">Max tickets per order</label>
                  <input
                    type="text"
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
                onClick={handleAddTicket}
                className="flex items-center gap-[7px] text-[#006f6a] hover:opacity-80 transition-opacity"
              >
                <MdAdd size={32} className="text-[#006f6a]" />
                <span>Create New Ticket</span>
              </button>

              {Array.isArray(formData.tickets) &&
                formData.tickets.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Added Tickets:</h4>
                    <ul className="space-y-1">
                      {formData.tickets.map((t, i) => (
                        <li key={i} className="text-sm text-gray-700">
                          • {t.name} — {t.type} — ${t.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>

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
          <div className="w-[22px] h-[22px] rounded-full bg-[#006F6A] border-2 border-[#006F6A] flex items-center justify-center z-10">
            <div className="w-[10px] h-[10px] rounded-full bg-[#006F6A]"></div>
          </div>
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
