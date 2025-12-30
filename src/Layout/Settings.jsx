import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef, useState } from "react";

export default function Settings() {
  const selectRef = useRef(null);
  const [value, setValue] = useState("");

  const openSelect = () => {
    selectRef.current.click();
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="relative flex items-center justify-center px-5 sm:px-10 pt-10">
        <Link to="/home-page">
          <FaArrowLeft
            className="absolute left-5 sm:left-18 top-14 w-7 h-6 text-black cursor-pointer transition-all duration-300 hover:text-green-600 hover:-translate-x-1"
          />
        </Link>

        <img
          src="/Optislipimage.png"
          alt="OptiSlip"
          style={{ filter: "invert(1) grayscale(1) brightness(0)" }}
          className="h-[12vh] sm:ml-8 ml-4 sm:h-[20vh]"
        />
      </div>

      <div>
        <h1 className="font-semibold text-center text-[20px] sm:text-[24px]">Settings</h1>
      </div>

      {["Facebook", "Instagram", "Website"].map((label, i) => (
        <div key={i} className="relative w-full flex justify-center my-6 sm:my-10 px-2 sm:px-0">
          <label
            className="absolute sm:-top-5 -top-4 sm:left-60 left-4 bg-white px-2 text-sm font-bold text-black z-20"
          >
            {label}
          </label>

          <input
            type="text"
            placeholder={label === "Website" ? "eg. optislip.com" : "ID Name"}
            className="w-full sm:w-[65%] py-3 sm:py-6 px-4 sm:px-5 border-2 border-gray-400 rounded-[25px] text-base font-bold bg-white text-black min-h-[60px] mx-0 sm:mx-4 transition-all duration-300 focus:border-green-600 focus:shadow-md outline-none"
          />
        </div>
      ))}

      <div className="w-full flex justify-center mt-6 sm:mt-10 px-2 sm:px-0 relative">
        <label className="block mb-1 font-semibold absolute left-4 sm:left-60 bottom-6 text-[15px]">
          Set Currency
        </label>

        <div className="relative w-full sm:w-[65%] mx-auto">
          <input
            readOnly
            placeholder="USD - US Dollar ($)"
            value={value}
            className="w-full border-2 border-gray-400 rounded-[25px] text-black py-4 sm:py-5 px-4 sm:px-5 pr-14 text-base bg-white cursor-default"
          />

          <select
            ref={selectRef}
            className="absolute inset-0 w-full opacity-0 cursor-pointer"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="">Select Category</option>
            <option>USD - US Dollar ($)</option>
            <option>EUR - Euro (€)</option>
            <option>GBP - British Pound (£)</option>
            <option>PKR - Pakistani Rupee (₨)</option>
            <option>INR - Indian Rupee (₹)</option>
            <option>AED - Dirham (د.إ)</option>
            <option>SAR - Saudi Riyal (﷼)</option>
            <option>CAD - Canadian Dollar (C$)</option>
            <option>AUD - Australian Dollar (A$)</option>
            <option>JPY - Japanese Yen (¥)</option>
            <option>CNY - Chinese Yuan (¥)</option>
            <option>CHF - Swiss Franc (CHF)</option>
            <option>SGD - Singapore Dollar (S$)</option>
            <option>MYR - Malaysian Ringgit (RM)</option>
            <option>BDT - Bangladeshi Taka (৳)</option>
            <option>THB - Thai Baht (฿)</option>
            <option>KRW - South Korean Won (₩)</option>
            <option>ZAR - South African Rand (R)</option>
            <option>TRY - Turkish Lira (₺)</option>
            <option>BRL - Brazilian Real (R$)</option>
            <option>MXN - Mexican Peso ($)</option>
            <option>NZD - New Zealand Dollar (NZ$)</option>
            <option>RUB - Russian Ruble (₽)</option>
          </select>

          <button
            type="button"
            onClick={openSelect}
            className="absolute top-0 right-0 h-full pl-5 bg-[#007A3F] rounded-r-[25px] flex items-center justify-center text-white"
          >
            USD
            <RiArrowDropDownLine size={26} />
          </button>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-[#007A3F] text-[18px] text-white py-3 px-14 font-semibold rounded-[28px]">
          Save Changes
        </button>
      </div>

      <div className="flex items-center gap-2 mt-4 mx-auto w-full sm:w-[65%] px-4">
        <input type="checkbox" id="delete-account" className="w-5 h-5 cursor-pointer" />
        <label htmlFor="delete-account" className="text-[16px] cursor-pointer text-black">
          Delete My Shop Account
        </label>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="bg-[#FF0000] text-[18px] text-white py-3 px-20 font-semibold rounded-[28px] mb-8">
          Confirm
        </button>
      </div>
    </div>
  );
}
