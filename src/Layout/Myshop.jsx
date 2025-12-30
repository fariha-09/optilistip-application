import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Myshop() {
  return (
    <div className="w-full bg-white h-fullscreen pb-20">
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

      <div className="flex flex-row items-center justify-center mt-2">
        <p className="">👤</p>
        <p className="text-green-600 font-semibold text-sm pl-[8px]">
          Sub User Access
        </p>
      </div>

      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Shop Name
        </label>

        <input
          type="text"
          placeholder="Enter shop name"
          defaultValue="Your Shop Name"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
      text-black       
    placeholder:text-gray-400 
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>

      <div className="relative w-full flex flex-row justify-center">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Shop Address
        </label>

        <textarea
          type="text"
          placeholder="Enter shop address"
          defaultValue="Your Shop Address"
          className="
     w-[65%]
      px-5 
      py-6
      rows-3
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
       text-black       
    placeholder:text-gray-400 
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>

      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Phone Number
        </label>

        <input
          type="text"
          placeholder="Enter 
phone number"
          defaultValue="03315141488"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
       text-black       
    placeholder:text-gray-400
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>

      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          User Name
        </label>

        <input
          type="text"
          placeholder="Enter user name"
          defaultValue="atifmeo"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
       text-black       
    placeholder:text-gray-400
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>

      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Password
        </label>

        <input
          type="text"
          placeholder="Enter new password(optional)"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
       text-gray-400
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>

      <div className="relative w-full flex flex-row justify-center my-10">
  <label
    className="absolute -top-0 left-20 sm:left-60 bg-white px-2 text-sm font-bold text-black z-20"
  >
    Upload Logo
  </label>

  <div className="w-[65%] flex flex-col mt-8 sm:mt-0">
    <input id="uploadLogo" type="file" className="peer hidden" />

    <div
      className="
        w-full
        border-2
        border-black
        rounded-t-[25px]
        overflow-hidden
        bg-white
        px-5 py-4
        text-gray-400 font-bold
        flex items-center
      "
    >
      Choose file...
    </div>

    <button
      type="button"
      onClick={() => document.getElementById("uploadLogo").click()}
      className="
        w-full
        bg-[#128a43]
        text-white
        font-semibold
        py-4
        rounded-b-[25px]
        mt-0
        hover:bg-green-700
        transition-all duration-300
      "
    >
      Upload
    </button>
  </div>
</div>


      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Currency
        </label>

        <select
          className="
      w-[65%]
        
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
      outline-none
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
    "
        >
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
      </div>

      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          WhatsApp Number
        </label>

        <input
          type="text"
          placeholder="Enter WhatsApp number"
          defaultValue="12345678900"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
      text:black
       placeholder:text-gray-400
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>
      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Facebook ID
        </label>

        <input
          type="text"
          placeholder="Enter Facebook ID"
          defaultValue="your shop"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
      text:black
      placeholde:text-gray-400
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>

      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
      left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Instagram ID
        </label>

        <input
          type="text"
          placeholder="Enter Instagram ID"
          defaultValue="your shop"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
       text:black
      placeholde:text-gray-400
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>
      <div className="relative w-full flex flex-row justify-center my-10">
        <label
          className="
      absolute
      -top-5
     left-20
      sm:left-60
      bg-white
      px-2
      text-sm
      font-bold
      text-black
      z-20
    "
        >
          Website
        </label>

        <input
          type="text"
          placeholder="Enter 
Website URL"
          defaultValue="https://yourshop.com"
          className="
     w-[65%]
      px-5 
      py-6
      border-2 
      border-black
      rounded-[25px]
      text-base
      font-bold
      bg-white
       text:black
      placeholde:text-gray-400
      min-h-[60px]
      transition-all
      duration-300
      focus:border-green-600
      focus:shadow-md
      outline-none
    "
        />
      </div>

      <div className="flex justify-center space-x-6 sm:mt-20 mt-20">
        <button
          type="button"
          className="bg-[#169D53] text-white font-bold sm:px-10 sm:py-4  px-10 py-1 sm:px-10  rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          Save
        </button>

        <button
          type="button"
          className="bg-white text-green-600 font-bold  sm:px-10 sm:py-4  px-8 py-[8px] sm:px-10 rounded-lg border-2 border-green-600 hover:bg-[#169D53] hover:text-white transition-all duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
