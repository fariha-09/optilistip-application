import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Addexpense() {
const selectRef = useRef(null);
const [value, setValue] = useState("");

const openSelect = () => {
selectRef.current.click();
};

return ( <div className="w-full bg-white min-h-screen pb-10">

  <div className="relative flex items-center justify-center px-4 sm:px-10 pt-10">
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
      className="h-[10vh] sm:h-[20vh] ml-4"
    />
  </div>

  <div className="w-full px-4 sm:px-0 mt-4">

    <h1 className="font-semibold text-center text-[20px]">
      Add Expense
    </h1>
    <div className="relative w-full flex justify-center my-10">
      <label
        className="
          absolute
          -top-5 
          sm:-top-5 
          left-6 sm:left-60
          bg-white
          px-2
          text-sm
          font-bold
          text-black
          z-20
        "
      >
        Amount
      </label>

      <input
        type="text"
        placeholder="0.00"
        className="
          w-full sm:w-[65%]
          mx-1
          px-5 py-5 sm:py-6
          border-2 border-gray-400
          rounded-[25px]
          text-base font-bold
          bg-white text-black
          min-h-[55px]
          focus:border-green-600
          transition-all
          outline-none
        "
      />
    </div>
    <div className="w-full flex justify-center mb-10">
      <div className="w-full sm:w-[65%] relative">
        <label className="absolute -top-5 sm:-top-5 left-6 sm:left-0 bg-white px-2 text-sm font-bold">
          Category
        </label>

        <input
          readOnly
          placeholder="eg. Shop Rent, Utility Bills, Frame Vendor"
          value={value}
          className="
            w-full
            border border-2 border-gray-400
            rounded-[25px]
            text-black
            py-5 px-5
            pr-14
            bg-white
          "
        />

        <select
          ref={selectRef}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Select Category</option>
          <option>Shop Rent</option>
          <option>Utility Bills</option>
          <option>Frame Vendor</option>
        </select>

        <button
          type="button"
          onClick={openSelect}
          className="
            absolute
            top-0 right-0
            h-full w-14
            bg-green-700
            rounded-r-[25px]
            flex items-center justify-center
            text-white
          "
        >
          <RiArrowDropDownLine size={26} />
        </button>
      </div>
    </div>

    <div className="w-full flex justify-center mb-10">
      <div className="w-full sm:w-[65%] relative">
        <label className="absolute -top-5 sm:-top-5 left-6 sm:left-0 bg-white px-2 text-sm font-bold">
          Date
        </label>

        <input
          readOnly
          placeholder="03-06-2025"
          className="
            w-full
            border border-2 border-gray-400
            rounded-[25px]
            text-black
            py-5 px-5
            pr-14
            bg-white
          "
        />

        <select
          ref={selectRef}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        >
          <option>03-06-2025</option>
        </select>

        <button
          type="button"
          onClick={openSelect}
          className="
            absolute
            top-0 right-0
            h-full w-14
            bg-green-700
            rounded-r-[25px]
            flex items-center justify-center
            text-white
          "
        >
          <RiArrowDropDownLine size={26} />
        </button>
      </div>
    </div>
    <div className="flex justify-center mt-8">
      <button className="bg-[#007A3F] text-[18px] text-white py-4 px-12 font-semibold rounded-[20px]">
        + Save Expense
      </button>
    </div>

  </div>
</div>

);
}
