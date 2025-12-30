import { AiOutlineFileAdd, AiOutlineShop, AiOutlineBarChart } from "react-icons/ai";
import { LuFileCheck } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowTrendUp, FaCalculator } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BiCube } from "react-icons/bi";

export default function Actionbuttons() {
  return (
    <div className="grid grid-cols-3 md:gap-[30px] gap-[10px] mt-[25px] md:mx-[20px] mx-2 mb-4">
      <a
        href="/new-order"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <LuFileCheck />
        New Order
      </a>
      <a
        href="/pending-order"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <FiShoppingCart />
        Pending Order
      </a>
      <a
        href="/complete-order"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <BiCube/>
        Complete Order
      </a>
      <a
        href="/search-record"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <FaSearch />
        Search Record
      </a>
      <a
        href="/add-record"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <AiOutlineFileAdd />
        Add Record
      </a>
      <a
        href="/salesrecord"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <FaArrowTrendUp />
        Sale Record
      </a>
      <a
        href="/mynewshop"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <AiOutlineShop />
        My Shop
      </a>
      <a
        href="/calculator"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <FaCalculator />
        Calculator
      </a>
      <a
        href="/addexpense"
        className="bg-[#169D53] text-white md:text-[17px] text-[15px] font-semibold text-center md:py-[25px] md:px-[20px] py-[12px] px-[8px] rounded-[10px] transition-all duration-300 ease-in-out hover:bg-green-700 flex flex-col items-center gap-2"
      >
        <AiOutlineBarChart />
        Add Expense
      </a>
    </div>
  );
}
