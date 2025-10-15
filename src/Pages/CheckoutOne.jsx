import { ArrowLeft, ChevronDown } from "lucide-react";
import BrandLogo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckoutOne = () => {
  const ticketTypes = [
    {
      id: "regular",
      name: "Regular",
      price: 100,
      fee: 10,
    },
    {
      id: "vip",
      name: "VIP",
      price: 200,
      fee: 10,
    },
    {
      id: "vvip",
      name: "VVIP",
      price: 300,
      fee: 10,
    },
  ];

  const [ticketQuantities, setTicketQuantities] = useState({
    regular: 1,
    vip: 0,
    vvip: 0,
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    regular: false,
    vip: false,
    vvip: false,
  });

  // Calculate totals
 const calculateSubtotal = () => {
    return ticketTypes.reduce((total, ticket) => {
      const quantity = ticketQuantities[ticket.id] || 0;
      const ticketTotal = quantity * ticket.price;
      const feeTotal = quantity * ticket.fee;
      return total + ticketTotal + feeTotal;
    }, 0);
  };
  const calculateTotalFees = () => {
    return ticketTypes.reduce((total, ticket) => {
      return total + (ticketQuantities[ticket.id] || 0) * ticket.fee;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  const hasTicketsSelected = Object.values(ticketQuantities).some(qty => qty > 0);

  // Dropdown 
  const toggleDropdown = (ticketId) => {
    setDropdownOpen(prev => ({
      ...prev,
      [ticketId]: !prev[ticketId]
    }));
  };

  const handleQuantityChange = (ticketId, quantity) => {
    setTicketQuantities(prev => ({
      ...prev,
      [ticketId]: quantity
    }));
    setDropdownOpen(prev => ({
      ...prev,
      [ticketId]: false
    }));
  };

  const closeAllDropdowns = () => {
    setDropdownOpen({
      regular: false,
      vip: false,
      vvip: false,
    });
  };

  // Close dropdown 
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeAllDropdowns();
    }
  };

  return (
    <div className="min-h-screen bg-white" onClick={handleBackdropClick}>
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
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow relative"
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

                      <div className="relative">
                        {/* Dropdown Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(ticket.id);
                          }}
                          className="flex items-center justify-between w-24 px-3 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-semibold">
                            {ticketQuantities[ticket.id] || 0}
                          </span>
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform ${
                              dropdownOpen[ticket.id] ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Dropdown Modal */}
                        {dropdownOpen[ticket.id] && (
                          <div className="absolute top-full left-0 mt-1 w-24 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            {[0, 1, 2, 3, 4, 5].map((quantity) => (
                              <button
                                key={quantity}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleQuantityChange(ticket.id, quantity);
                                }}
                                className={`w-full px-3 py-2 text-left hover:bg-gray-100 transition-colors ${
                                  quantity === ticketQuantities[ticket.id]
                                    ? 'bg-[#006F6A] text-white'
                                    : 'text-gray-900'
                                } ${
                                  quantity === 0 ? 'rounded-t-md' : ''
                                } ${
                                  quantity === 5 ? 'rounded-b-md' : ''
                                }`}
                              >
                                {quantity}
                              </button>
                            ))}
                          </div>
                        )}
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

                {hasTicketsSelected && (
                  <>
                    <div className="flex justify-between text-sm pt-5 border-t border-gray-200">
                      <span className="text-[#4A4A4A]">Fee</span>
                      <span className="font-medium text-[#4A4A4A] text-[14px]">
                        ${calculateTotalFees().toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm pt-5 ">
                      <span className="text-[#4A4A4A]">Subtotal</span>
                      <span className="font-medium text-[#4A4A4A] text-[14px]">
                        ${calculateSubtotal().toLocaleString()}
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
                {hasTicketsSelected && (
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-[#4A4A4A] text-[17px]">TOTAL</span>
                    <span className="text-[#4A4A4A] text-[17px]">
                      ${calculateTotal().toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
              
              <Link to={hasTicketsSelected ? "/checkout2" : "#"}>
                <button 
                  disabled={!hasTicketsSelected}
                  className={`w-full ${
                    hasTicketsSelected 
                      ? "bg-[#006F6A] hover:bg-[#005a55]" 
                      : "bg-gray-400 cursor-not-allowed"
                  } text-white py-3 px-4 rounded-md font-semibold transition-colors`}
                >
                  Pay Now
                </button>
              </Link>
              
              {!hasTicketsSelected && (
                <p className="text-sm text-red-500 text-center mt-2">
                  Please select at least one ticket
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutOne;