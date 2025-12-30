import { FaArrowLeft } from "react-icons/fa";
import { Link} from "react-router-dom";
import SalesChart from "./SalesChart";
import { FaRegCalendarAlt } from "react-icons/fa";
import DonutCard from "./DonutCard";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function Salesrecord() {
    const incomeData = [
{ day: "Mon", value: 20 },
{ day: "Tue", value: 40 },
{ day: "Wed", value: 35 },
{ day: "Thu", value: 60 },
{ day: "Fri", value: 50 },
{ day: "Sat", value: 90 },
{ day: "Sun", value: 65 },
];

const expenseData = [
{ day: "Mon", value: 10 },
{ day: "Tue", value: 30 },
{ day: "Wed", value: 25 },
{ day: "Thu", value: 55 },
{ day: "Fri", value: 45 },
{ day: "Sat", value: 80 },
{ day: "Sun", value: 55 },
];


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
   <div className="w-full bg-[white] h-full ">
         <div className="relative flex items-center justify-center px-5 sm:px-10 pt-10">
  <Link to="/home-page">
    <FaArrowLeft
      className="
        absolute left-5 sm:left-18 top-14
        w-7 h-6 
        text-black 
        cursor-pointer 
        transition-all duration-300 
        hover:text-green-600 
        hover:-translate-x-1
      "
    />
  </Link>

  <img
    src="/Optislipimage.png"
    alt="OptiSlip"
    style={{ filter: "invert(1) grayscale(1) brightness(0)" }}
    className="h-[12vh] sm:ml-8 ml-4 sm:h-[20vh]"
  />
</div>

<div className="">
<h1 className="font-semibold text-center text-[20px]">Sale Records</h1>
</div>
 <div className="flex justify-center gap-3 mt-5 px-5">
     <DonutCard label="Sales" value={70} total={100} color=" #007A3F" />
      <DonutCard label="Expense" value={55} total={100} color=" #007A3F" />
       <DonutCard label="Total Amount" value={80} total={100} color="#007A3F" />
        </div> 

        <div className="px-5 mt-8 md:mx-40 mb-4">
             <div className="flex sm:justify-between items-center gap-4">
             <h2 className="font-semibold text-sm">Chart Type: INCOME</h2>
              <div className="relative inline-block sm:ml-auto">
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center md:gap-[12px] md:ml-12 border-1 border-[#e9ecef] rounded-lg px-[14px] py-[10px] shadow-sm bg-[#f8f9fa] hover:shadow-md transition-all"
                  >
                    <FaRegCalendarAlt className="text-gray-600" />
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
                  </div>

<div className="px-5 mb-8 flex items-center justify-center">
<SalesChart data={incomeData} /> 
</div>
<div className="px-5 mb-8 md:mx-40"> 
               <div className="flex sm:justify-between items-center gap-4 ">
    <h2 className="font-semibold mb-2">Chart Type: EXPENSE</h2>
    <div className="relative inline-block sm:ml-auto">
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center md:gap-[12px] md:ml-12 border-1 border-[#e9ecef] rounded-lg px-[14px] py-[10px] shadow-sm bg-[#f8f9fa] hover:shadow-md transition-all"
                  >
                    <FaRegCalendarAlt className="text-gray-600" />
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
                      </div>
     <div className="flex justify-center items-center ">
     <SalesChart data={expenseData} /> 
      </div>

<div className="px-5 mb-8 sm:mx-40  "> 
               <div className="flex sm:justify-between items-center gap-4">
    <h2 className="font-semibold mb-2">Chart Type: EXPENSE</h2>
    <div className="relative inline-block sm:ml-auto">
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center md:gap-[12px] md:ml-12 border-1 border-[#e9ecef] rounded-lg px-[14px] py-[10px] shadow-sm bg-[#f8f9fa] hover:shadow-md transition-all"
                  >
                    <FaRegCalendarAlt className="text-gray-600" />
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
                      </div>
     <div className="flex justify-center items-center ">
     <SalesChart data={expenseData} /> 
      </div>




    </div>
  );
}
