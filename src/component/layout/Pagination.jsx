import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { useEventContext } from "../../Hooks/useEventContext";

const Pagination = () => {
  const { page, setPage, totalPages, setTotalPages, discover } =
    useEventContext();
  return (
    <div className="lg:w-[80%] mx-auto py-6">
      <div className="flex items-center justify-center gap-2">
        <IoMdArrowBack
          color="#BEBEBE"
          className="cursor-pointer"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        />
        {Array.from(
          [1, 2, 3, 4].map((page) => (
            <div
              className={` ${
                page === 1
                  ? " bg-[#96C4C2] border-[#2B8783]"
                  : "bg-[#D6D6D6] border-[#EDEDED]"
              } flex gap-4  border-4 rounded-full h-[35px] w-[35px] items-center justify-center cursor-pointer`}
            >
              <p className="">{page}</p>
            </div>
          ))
        )}
        <IoArrowForward
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        />
      </div>
    </div>
  );
};

export default Pagination;

//   return (
//     <div className="flex items-center justify-between py-4 text-sm text-gray-600 layout">
//       <span>
//         Showing {properties.length} of {total}
//       </span>

//       <div className="flex items-center space-x-2">
//         <span className="px-2">
//           Page {page} of {totalPage}
//         </span>
//         <button
//           className="px-2 py-1 border rounded disabled:opacity-30"
//           onClick={() => setPage(page - 1)}
//           disabled={page === 1}
//         >
//           <MdArrowLeft size={22} />
//         </button>

//         <button
//           className="px-2 py-1 border rounded disabled:opacity-30"
//           onClick={() => setPage(page + 1)}
//           disabled={page === totalPage}
//         >
//           <MdArrowRight size={22} />
//         </button>
//       </div>
//     </div>

//     export defau

// {/* <div className="lg:w-[80%] mx-auto py-6">
//               <div className="flex items-center justify-center gap-2">
//                 <IoMdArrowBack color="#BEBEBE" className="cursor-pointer" />
//                 {Array.from(
//                   [1, 2, 3, 4].map((page) => (
//                     <div
//                       className={` ${
//                         page === 1
//                           ? " bg-[#96C4C2] border-[#2B8783]"
//                           : "bg-[#D6D6D6] border-[#EDEDED]"
//                       } flex gap-4  border-4 rounded-full h-[35px] w-[35px] items-center justify-center cursor-pointer`}
//                     >
//                       <p className="">{page}</p>
//                     </div>
//                   ))
//                 )}
//                 <IoArrowForward />
//               </div>
//             </div> */}
