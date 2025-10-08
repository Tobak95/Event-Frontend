import React, {useState, useRef} from 'react'

const DiscoverModal = () => {
  const eventCategoryModalRef = useRef(null);
  const priceModalRef = useRef(null);
  const dateModalRef = useRef(null);
  return (
    <>
    <main>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
 {/* All Event Discover Modal */}

    </main>
    </>
  )
}

export default DiscoverModal

// const DiscoverModal = ({ isOpen, onClose, children }) => {
  // if (!isOpen) return null; 
// <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//   <div className="bg-white p-6 rounded-lg relative w-[90%] max-w-lg shadow-lg">
//     {/* Close button */}
//     <button
//       onClick={onClose}
//       className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
//     >
//       &times;
//     </button>

//     {/* Modal Content */}
//     {children}
//   </div>
// </div>

