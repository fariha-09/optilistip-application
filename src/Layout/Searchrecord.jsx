import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import Customerorder from "./Customerorder";

export default function Searchrecord() {
   const [showSlip, setShowSlip] = useState(false);
    const orders = [];

  return (
    <div className="bg-[linear-gradient(135deg,#169D53_0%,#128a43_100%)] w-full h-full">
      
      <Link to="/home-page" className="relative flex items-center justify-center px-10 pt-10 mb-10">
        <FaArrowLeft
          className="
            absolute left-10 top-10
            w-12 h-12
            text-[#169D53]
            bg-[rgba(255,255,255,0.9)]
            p-4
            rounded-[12px]
            cursor-pointer
            transition-all duration-300
            hover:bg-white
            hover:-translate-x-1
          "
        />
      </Link>

      <div className="flex justify-center items-center mt-10">
        <div className="bg-white/95 w-[90%] rounded-[25px] text-center sm:p-8 p-4 shadow-[0_4px_15px_rgba(0,0,0,0.05)] mt-10">

          <h1 className="font-extrabold text-[32px] text-[#169D53]">Search Records</h1>
          
          <p className="text-[#718096] sm:text-[18px] text-[14px] text-center font-semibold mt-2 flex justify-center items-center ">
            Search patient orders by name, tracking ID, or WhatsApp number
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">

            <div className="relative w-full sm:w-[50%]">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#169D53] text-[18px]" />

              <input
                type="text"
                placeholder="Enter patient name, tracking ID, or phone number..."
                className="
                  w-full
                  bg-white
                  border border-[#e5e7eb]
                  rounded-[14px]
                  pl-12 pr-4 py-3
                  sm:text-[16px]
                  text-[12px]
                  outline-none
                  focus:border-[#169D53]
                  focus:border-2
                  transition-all
                "
              />
            </div>

            <button
              className="
                flex items-center gap-2
                bg-[#169D53] text-white
                font-semibold
                px-6 py-3
                rounded-[14px]
                shadow-sm
                hover:opacity-90
                transition-all
                w-full sm:w-auto
              "
            >
              <FaSearch />
              Search
            </button>
          </div>
<div
  className="
    bg-[rgba(22,157,83,0.05)]
    sm:mt-8 mt-3
    md:p-[20px] p-[8px]
    rounded-[12px]
    border-l-[4px] border-l-[#169D53]
    w-full sm:w-[90%] md:w-[60%]
    mx-auto
  "
>
  <p className="text-[#718096] sm:text-[15px] text-[12px]">
    <strong className="font-semibold">Search Tips:</strong> 
    You can search by patient name, tracking ID (e.g., ORD20241225_1234), or WhatsApp number.
  </p>
</div>

        </div>
      </div>

     {orders.length === 0 ? (
         <div className="flex flex-col items-center">
  <div className="bg-white/95 rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] sm:w-[90%] mt-6 w-full overflow-hidden px-6">
    <div className="flex justify-between items-center py-6 px-2">
      <h1 className="text-black font-bold text-[25px]">Search Results</h1>
      <div
        className="text-white text-sm font-semibold px-4 py-1 rounded-full shadow"
        style={{ background: "linear-gradient(135deg, #169D53, #128a43)" }}
      >
        0 Found
      </div>
    </div>

    <div className="text-center text-gray-600 space-y-4 py-10 px-6">
      <FaSearch className="text-[48px] text-gray-300 mx-auto" />
      <h3 className="text-[1.25rem]">No Records Found</h3>
      <p>No orders found matching "word"</p>
      <p className="text-[#666]">
        Try searching with different keywords or check your spelling.
      </p>
    </div>
  </div>
</div>

         

      ) : (
       orders.map((order, index) => (

    <div className="flex justify-center items-center mt-10 px-3">
  <div className="bg-white/30 w-full sm:w-[90%] rounded-[20px] p-5 shadow-md border border-white/40 mb-10">

    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  
      <div>
        <h1 className="text-[18px] sm:text-[20px] font-bold text-gray-900">
          Mr Alex White
        </h1>
        <p className="text-[13px] sm:text-[14px] text-gray-700 font-medium">
          ORD-2025-001
        </p>
      </div>
      <div className="flex flex-row gap-5 items-center justify-start sm:justify-end">
        
        <FaPhoneAlt 
          className="text-[#007A3F] cursor-pointer" 
          size={24}
        />

         <MdRemoveRedEye 
      className="text-[#019AF8] cursor-pointer" 
      size={24}
      onClick={() => setShowSlip(true)}
    />

        <MdEdit 
          className="text-[#FF9101] cursor-pointer"
          size={24}
        />

        <svg
          height="24"
          width="24"
          viewBox="0 0 32 32"
          className="cursor-pointer"
        >
          <path
            fill="#25D366"
            d="M16 .667C7.64.667.667 7.64.667 16c0 2.82.735 5.555 2.132 7.963L0 32l8.315-2.745A15.26 15.26 0 0016 31.333C24.36 31.333 31.333 24.36 31.333 16S24.36.667 16 .667z"
          />
          <path
            fill="#FFF"
            d="M23.12 19.64c-.34-.17-2.02-1-2.34-1.11-.32-.12-.55-.17-.78.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.72-1.69-1-.9-1.69-2.01-1.88-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.61.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.82-1.08-2.49-.28-.63-.57-.54-.78-.55h-.67c-.23 0-.67.09-1.02.43-.34.34-1.34 1.18-1.34 2.85 0 1.67 1.22 3.29 1.39 3.52.17.23 2.38 3.56 5.97 5 .84.36 1.5.59 2.01.76.84.27 1.61.25 2.2.15.67-.1 2.02-.83 2.31-1.62.29-.79.29-1.45.2-1.58-.09-.13-.34-.23-.73-.4z"
          />
        </svg>

        <RiDeleteBinLine 
          className="text-[#FF0000] cursor-pointer" 
          size={24}
        />

      </div>
    </div>

  </div>

    {showSlip && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white max-h-[90vh] w-[90%]  rounded-xl shadow-xl overflow-y-auto relative p-4">
              
              <button
                onClick={() => setShowSlip(false)}
                className="absolute top-3 right-3 text-black text-[20px] cursor-pointer"
              >
                ✕
              </button>
        
              <Customerorder />
            </div>
          </div>
        )}
        
            </div>
          
           ))
        )}
        </div>
          );
        }
        
    
