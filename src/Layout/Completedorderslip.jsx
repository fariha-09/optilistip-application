import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuPrinter } from "react-icons/lu";
import { BiSave } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";

export default function Completedorderslip() {
  return (
    <div className="w-full bg-white h-full pb-10 ">
      <div className="relative flex items-center justify-center px-5 sm:px-10 pt-0">
        <Link to="/complete-order">
          <FaArrowLeft
            className="
        absolute left-5 sm:left-18 top-8
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

      <div className=" flex flex-col items-center ">
        <h1 className="font-bold text-[25px] text-[#007A3F] text-center">
          Complete Orders
        </h1>
        <div className="bg-[#F6F6F6] border border-2 border-[#00000038] px-50 py-10 rounded-[20px] w-[60%]">
          <div className="flex flex-col gap-2 w-full mb-2">
            <div className="flex justify-between">
              <span>Tracking ID:</span>
              <span>ORD20251003_1133</span>
            </div>
            <div className="flex justify-between">
              <span>Patient Name:</span>
              <span>Mr. Ali</span>
            </div>
            <div className="flex justify-between">
              <span>WhatsApp:</span>
              <span>+123-1234567</span>
            </div>
            <div className="flex justify-between">
              <span>Order Details:</span>
              <span>TR90 + HC</span>
            </div>
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Advance:</span>
              <span>0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Date:</span>
              <span>01-05-2025</span>
            </div>
            <div className="flex justify-between">
              <span>Balance:</span>
              <span>0.00</span>
            </div>
          </div>

          <div className="flex justify-center gap-5 mb-2">
            <p>Right Eye:</p>
            <p>Left Eye:</p>
          </div>
          <div className="flex justify-center gap-5 mb-2">
            <p>SPH: N/A</p>
            <p>SPH: N/A</p>
          </div>
          <div className="flex justify-center gap-5 mb-2">
            <p>CYL: N/A</p>
            <p>CYL: N/A</p>
          </div>
          <div className="flex justify-center gap-5 mb-2">
            <p>AXIS: N/A</p>
            <p>AXIS: N/A</p>
          </div>
          <div className="text-center mb-4">
            <p>ADD</p>
            <p>+2.50</p>

            <div className=" flex flex-row mx-auto">
              <div className="flex items-center gap-4 mt-4  w-[65%]">
                <input
                  type="checkbox"
                  id="delete-account"
                  className="w-5 h-5 cursor-pointer ml-4"
                />
                <label
                  htmlFor="delete-account"
                  className="text-[16px] cursor-pointer text-black underline"
                >
                  Mark As Deliverd
                </label>
              </div>

              <FiShare2 className="text-[#007A3F] mt-8 ml-6" size={25} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 my-2">
        <button className="flex items-center gap-2 bg-[#E2E2E2] text-black font-semibold px-10 py-3 rounded-lg hover:bg-gray-300 transition">
          <LuPrinter size={18} /> Print
        </button>
        <button className="flex items-center gap-2 bg-[#007A3F] text-white font-semibold px-10 py-3 rounded-lg hover:bg-green-700 transition">
          <BiSave size={18} /> Save
        </button>
      </div>

    
    </div>
  );
}
