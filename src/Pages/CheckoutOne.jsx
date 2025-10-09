import { ArrowLeft, Minus, Plus } from "lucide-react";
import BrandLogo from "../assets/logo2.png";
import { Link } from "react-router-dom";

const CheckoutOne = () => {
  const ticketTypes = [
    {
      id: "regular",
      name: "Regular",
      price: 10000,
      fee: 74,
    },
    {
      id: "vip",
      name: "VIP",
      price: 20000,
      fee: 74,
    },
    {
      id: "vvip",
      name: "VVIP",
      price: 30000,
      fee: 74,
    },
  ];

  const ticketQuantities = {
    regular: 1,
    vip: 0,
    vvip: 0,
  };

  const hasTicketsSelected = true;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="bg-white border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <img src={BrandLogo} alt="" />
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6">
              <div className="flex items-center justify-start mb-8">
                <ArrowLeft
                  size={40}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer mr-4"
                />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Choose Tickets
                </h2>
              </div>

              {/* Ticket Selection */}
              <div className="space-y-6">
                {ticketTypes.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-4 md:mb-0 flex-1">
                        <h3 className="text-lg font-semibold text-[32px] text-[#4A4A4A] mb-2">
                          {ticket.name}
                        </h3>
                        <p className="text-2xl font-semibold text-[26px] text-[#006F6A] mb-1">
                          $ {ticket.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">
                          Includes ${ticket.fee} fee
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          This ticket admits one
                        </p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors">
                          <Minus className="h-4 w-4" />
                        </button>

                        <span className="text-lg font-semibold min-w-[40px] text-center">
                          {ticketQuantities[ticket.id] || 0}
                        </span>

                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
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
              <Link to={"/checkout2"}>
                <button className="w-full bg-[#006F6A] text-white py-3 px-4 rounded-md font-semibold">
                  Pay Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOne;
