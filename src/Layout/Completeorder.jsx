import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInbox } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import Completedorderslip from "./Completedorderslip";

export default function Completeorder() {
  const [showSlip, setShowSlip] = useState(false);
  const orders = [];
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rangeText, setRangeText] = useState("Nov 1 To Nov 30");

  const quickRanges = [
    { label: "Today", handler: () => handleQuickRange(0) },
    { label: "Last 7 Days", handler: () => handleQuickRange(7) },
    { label: "Last 30 Days", handler: () => handleQuickRange(30) },
  ];

  const handleQuickRange = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days + 1);
    setStartDate(start.toISOString().split("T")[0]);
    setEndDate(end.toISOString().split("T")[0]);
    setRangeText(
      `${start.toLocaleDateString()} To ${end.toLocaleDateString()}`
    );
    setOpen(false);
  };

  const applyFilter = () => {
    if (startDate && endDate) {
      setRangeText(`${startDate} To ${endDate}`);
    }
    setOpen(false);
  };

  const cancelFilter = () => {
    setOpen(false);
  };

  return (
    <div className="w-full bg-[white] h-screen ">
      <div
        className="
    pb-10 
    px-10 
    pt-10
    grid 
    grid-cols-1
    sm:grid-cols-3
    items-center
  "
      >
        <Link to="/home-page">
          <FaArrowLeft className="w-7 h-6 text-black cursor-pointer transition-all duration-300 hover:text-green-600 hover:-translate-x-1" />
        </Link>

        <img
          src="/Optislipimage.png"
          alt="OptiSlip"
          style={{ filter: "invert(1) grayscale(1) brightness(0)" }}
          className="sm:h-[20vh] h-[16vh]  mx-auto"
        />

        <div className="relative inline-block sm:ml-auto">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-[12px] ml-12 border-1 border-[#e9ecef] rounded-full px-[14px] py-[10px] shadow-sm bg-[#f8f9fa] hover:shadow-md transition-all"
          >
            <FaCalendarAlt className="text-gray-600" />
            <span className="text-[#666] font-medium">{rangeText}</span>
            <IoChevronDown className="text-gray-600" />
          </button>

          {open && (
            <div className="absolute right-0 z-50 mt-2 min-w-[250px] w-[350px] max-w-[400px] bg-white p-6 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <h3 className="text-lg font-semibold mb-4">Select Date Range</h3>

              <div className="flex flex-col gap-3 mb-4">
                <label className="text-sm font-medium">Start Date:</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />

                <label className="text-sm font-medium">End Date:</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>

              <div className="flex gap-2 mb-4">
                {quickRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={range.handler}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-200 transition-all text-sm"
                  >
                    {range.label}
                  </button>
                ))}
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={cancelFilter}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={applyFilter}
                  className="px-4 py-2 rounded-md bg-[#169D53] text-white hover:bg-green-600 transition-all"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 my-6">
      
                  <div className="relative w-full sm:w-[50%]">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#169D53] text-[18px]" />
      
                    <input
                      type="text"
                      placeholder="Search by Name or Order ID"
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


{orders.length === 0 ? (
  <div className="flex flex-col items-center">
    <div className="bg-white rounded-[12px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] sm:w-[90%] w-full overflow-hidden px-6 flex justify-center items-center">
      <div className="text-center text-gray-600 space-y-4 py-10 px-6">
        <FaCheckCircle className="text-[48px] text-gray-300 mx-auto" />
        <h3 className="text-[1.25rem]">No Completed Orders</h3>
        <p className="text-[#666]">
          You don't have any completed orders at the moment.
        </p>
      </div>
    </div>
  </div>
) : (
   orders.map((order, index) => (
    <div  className="flex justify-center items-center mt-10">
      <div className="bg-black/10 w-full sm:w-[90%] rounded-[20px] p-5 shadow-md border border-white/40 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          <div>
            <h1 className="text-[18px] sm:text-[20px] font-bold text-gray-900">
              
              {order.name}
            </h1>
            <p className="text-[13px] sm:text-[14px] text-gray-700 font-medium">
              {order.orderId}
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

      <Completedorderslip />
    </div>
  </div>
)}

    </div>
  
   ))
)}
</div>
  );
}
