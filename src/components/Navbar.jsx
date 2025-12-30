import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="relative bg-white border-b-2 border-gray-200 shadow-md px-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center md:hidden">
          <button onClick={() => setMenu(!menu)}>
            <FaBars size={25} />
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <a
            href="/home-page"
            className="text-white font-semibold bg-[#169D53] px-[10px] py-[6px] rounded-[6px] text-lg"
          >
            Home
          </a>
          <a
            href="my-shop"
            className="text-green-600 font-semibold px-[10px]  py-[2px] rounded-[6px] hover:bg-[#169D53] hover:text-white  text-lg px-[10px]  py-[6px] rounded-[6px]"
          >
            My Shop
          </a>
          <a
            href="termsandconditions"
            className="text-green-600 px-[10px]  py-[6px] rounded-[6px] font-semibold hover:bg-[#169D53] hover:text-white text-lg px-[8px] py-[6px] rounded-[6px]"
          >
            Terms & Conditions
          </a>
          <a
            href="privacy-policy"
            className="text-green-600 font-semibold hover:bg-[#169D53] hover:text-white text-lg px-[8px] py-[6px] rounded-[6px]"
          >
            Privacy Policy
          </a>
        </div>

        <div className="flex justify-center md:justify-start md:flex-none">
          <img
            src="/Optislipimage.png"
            alt="OptiSlip"
            style={{ filter: "invert(1) grayscale(1) brightness(0)" }}
            className="md:w-[120px] md:h-[102px] w-30 h-[17vh]"
          />
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <a
            href="/setting"
            className="hidden md:flex text-green-600 font-semibold hover:bg-[#169D53] hover:text-white text-lg px-[8px] py-[6px] rounded-[6px]"
          >
            <IoMdSettings size={30} />
          </a>
          <a
            href="/"
            className="bg-[#dc3545] text-white px-5 py-2 rounded-md font-semibold text-[19px]"
          >
            Logout
          </a>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex relative">
              <FaSearch className="text-[#169D53] absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search Record..."
                className="pl-[30px] py-[6px] border rounded-[20px] focus:outline-none border-[#169D53] font-[19px]"
              />
            </div>

            <a
              href="calculator"
              className="bg-[#169D53] text-white px-4 py-2 rounded-md font-semibold text-xl"
            >
              Calculator
            </a>
          </div>
        </div>
      </div>

      {menu && (
        <div className="absolute top-0 left-0 w-70 bg-white h-screen shadow-md flex flex-col items-center space-y-4 pt-4 md:hidden z-50">
          <div className="flex flex-row justify-between items-center w-full px-6 md:px-0">
            <img
              src="/Optislipimage.png"
              alt="OptiSlip"
              style={{ filter: "invert(1) grayscale(1) brightness(0)" }}
              className="md:w-[120px] md:h-[120px] w-28 h-[14vh] pl-8"
            />

            <div className="flex items-center md:hidden">
              <button onClick={() => setMenu(!menu)}>
                <FaTimes size={25} />
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 w-full"></div>

          <a
            href="/home-page"
            className="text-white font-semibold bg-[#169D53] py-[10px] text-lg w-full px-10 text-center"
          >
            Home
          </a>
          <a
            href="/my-shop"
            className="text-[#169D53] font-semibold py-[8px] text-lg w-full px-10 text-left"
          >
            My Shop
          </a>
          <div className="border-t border-gray-200 w-full"></div>

          <a
            href="/terms-conditions"
            className="text-[#169D53] font-semibold py-[8px] text-lg w-full px-10 text-left"
          >
            Terms & Conditions
          </a>
          <div className="border-t border-gray-200 w-full"></div>

          <a
            href="/promotionpage"
            className="text-[#169D53] font-semibold py-[8px] text-lg w-full px-10 text-left"
          >
            Promotion
          </a>
          <div className="border-t border-gray-200 w-full"></div>

          <a
            href="/etting"
            className="text-[#169D53] font-semibold py-[8px] text-lg w-full px-10 text-left"
          >
            Settings
          </a>
          <div className="border-t border-gray-200 w-full"></div>

          <a
            href="/privacy-policy"
            className="text-[#169D53] font-semibold py-[8px] text-lg w-full px-10 text-left"
          >
            Privacy Policy
          </a>

          <div className="border-t border-gray-200 w-full"></div>

          <div className="border-t border-gray-200 w-full mt-3"></div>

          <div className="md:flex items-center space-x-6">
            <div className="flex relative">
              <FaSearch className="text-[#169D53] absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Q Search Record..."
                className="pl-[40px] py-[8px] w-full border rounded-[20px] focus:outline-none border-[#169D53] font-[19px]"
              />
            </div>
          </div>
          <div className="flex items-center md:space-x-4 md:space-x-6 flex-col">
            <a
              href="calculator"
              className="bg-[#169D53] text-white md:px-4 md:py-2 py-2 px-18 rounded-md font-semibold w-full text-xl"
            >
              Calculator
            </a>
            <a
              href="/login"
              className="bg-[#dc3545] text-white md:px-5 md:py-2 py-2 px-22  rounded-md font-semibold text-[19px] mt-4"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
